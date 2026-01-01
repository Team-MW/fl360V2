import { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import { ArrowRight, ArrowRightLeft, MapPin, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { AirportAutocomplete, type Airport } from '../components/AirportAutocomplete';
import emailjs from '@emailjs/browser';
import Starfield from '../components/Starfield';

const Contact = () => {
    const { t } = useTranslation();
    const form = useRef<HTMLFormElement>(null);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        // Contact Info
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        comment: '',
        // Flight Details
        flightType: 'PASSENGER' as 'PASSENGER' | 'CARGO',
        paxCount: 1,
        departureDate: '',
        departureTime: 'Indifférent',
        returnDate: '',
        returnTime: 'Indifférent',
        // Additional Contact Info (Passenger)
        company: '',
        mobile: '',
        consentContact: false,
        consentTerms: false,
        // Cargo Details
        cargoWeight: '',
        cargoVolume: '',
        cargoLargestSize: '',
        cargoDimensions: '',
        cargoType: ''
    });
    const [departure, setDeparture] = useState<Airport | null>(null);
    const [arrival, setArrival] = useState<Airport | null>(null);

    const nextStep = () => {
        if (!departure || !arrival) {
            alert(t('contact_page.alerts.airports'));
            return;
        }
        if (!formData.departureDate) {
            alert(t('contact_page.alerts.date'));
            return;
        }


        if (step === 1) {
            setStep(2);
        } else if (step === 2 && formData.flightType === 'CARGO') {
            setStep(3);
        }
    };

    const prevStep = () => {
        setStep(prev => prev - 1);
    };

    const handleSwapAirports = () => {
        const temp = departure;
        setDeparture(arrival);
        setArrival(temp);
    };

    const [showSuccess, setShowSuccess] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleTypeChange = (type: 'PASSENGER' | 'CARGO') => {
        setFormData(prev => ({ ...prev, flightType: type }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: checked }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validation for Passenger Step 2
        // Validation for Passenger Step 2 OR Cargo Step 3
        const isFinalStep = (formData.flightType === 'PASSENGER' && step === 2) || (formData.flightType === 'CARGO' && step === 3);

        if (isFinalStep) {
            if (!formData.consentTerms) {
                alert(t('contact_page.alerts.terms'));
                return;
            }
        }

        if (!departure || !arrival) {
            alert(t('contact_page.alerts.airports'));
            return;
        }

        if (form.current) {
            emailjs.sendForm(
                "service_8y69j7i",
                "template_i97fokm",
                form.current,
                "ID4XIUPXgHORIScgQ"
            )
                .then(() => {
                    setShowSuccess(true);
                    setFormData({
                        firstName: '', lastName: '', phone: '', email: '', comment: '',
                        flightType: 'PASSENGER', paxCount: 1, departureDate: '', departureTime: 'Indifférent',
                        returnDate: '', returnTime: 'Indifférent', company: '',
                        mobile: '', consentContact: false, consentTerms: false,
                        cargoWeight: '', cargoVolume: '', cargoLargestSize: '', cargoDimensions: '', cargoType: ''
                    });
                    setDeparture(null);
                    setArrival(null);
                    setStep(1); // Return to Step 1
                    setTimeout(() => setShowSuccess(false), 5000);
                })
                .catch((error) => {
                    console.error("EmailJS Error:", error);
                    alert(t('contact_page.alerts.error') + error.text);
                });
        }
    };

    return (
        <PageTransition>
            <Helmet>
                <title>{t('contact_page.title')} - fl360</title>
                <meta name="description" content={t('contact_page.description')} />
                <meta property="og:title" content={`${t('contact_page.title')} - fl360`} />
                <meta property="og:description" content={t('contact_page.description')} />
                <meta property="og:type" content="website" />
            </Helmet>
            <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0a0a] to-black pt-32 pb-20 flex flex-col items-center justify-center text-white relative overflow-hidden font-sans">
                <Starfield />

                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-widest mb-4">
                            {step === 1 ? t('contact_page.steps.flight_details') :
                                (step === 2 && formData.flightType === 'CARGO') ? t('contact_page.steps.cargo_details') :
                                    t('contact_page.steps.contact_info')}
                        </h1>
                        <div className="flex items-center justify-center gap-4 text-xs font-mono tracking-[0.2em] text-gray-500 mb-8">
                            <span className={step === 1 ? "text-cyan-400" : ""}>01. {t('contact_page.steps.step1')}</span>
                            <span>&gt;</span>
                            {formData.flightType === 'CARGO' && (
                                <>
                                    <span className={step === 2 ? "text-cyan-400" : ""}>02. {t('contact_page.steps.step2')}</span>
                                    <span>&gt;</span>
                                    <span className={step === 3 ? "text-cyan-400" : ""}>03. {t('contact_page.steps.step3')}</span>
                                </>
                            )}
                            {formData.flightType === 'PASSENGER' && (
                                <span className={step === 2 ? "text-cyan-400" : ""}>02. {t('contact_page.steps.step3')}</span>
                            )}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-black/50 backdrop-blur-xl border border-white/10 p-8 md:p-12 relative shadow-2xl rounded-2xl"
                    >

                        <form ref={form} onSubmit={handleSubmit} className="space-y-10">
                            {/* Hidden inputs for EmailJS */}
                            <input type="hidden" name="from_name" value={`${formData.firstName} ${formData.lastName}`} />
                            <input type="hidden" name="reply_to" value={formData.email} />
                            <input type="hidden" name="flight_details" value={`
                                Type: ${formData.flightType}
                                Pax: ${formData.paxCount}
                                Dep: ${departure?.name} (${departure?.iata})
                                Arr: ${arrival?.name} (${arrival?.iata})
                                Date: ${formData.departureDate} ${formData.departureTime}
                                Return: ${formData.returnDate} ${formData.returnTime}
                                Message: ${formData.comment}
                            `} />

                            {/* Additional Passenger Data for Email */}
                            <input type="hidden" name="passenger_details" value={`
                                Company: ${formData.company}
                                Mobile: ${formData.mobile}
                                Marketing Consent: ${formData.consentContact ? 'Yes' : 'No'}
                            `} />

                            {/* Cargo Details for Email */}
                            <input type="hidden" name="cargo_details" value={`
                                Weight: ${formData.cargoWeight}
                                Volume: ${formData.cargoVolume}
                                Type: ${formData.cargoType}
                                Largest Size: ${formData.cargoLargestSize}
                                Dimensions: ${formData.cargoDimensions}
                            `} />

                            <input type="hidden" name="message" value={formData.comment} />


                            {step === 1 && (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="space-y-8"
                                >
                                    {/* Flight Type Selection */}
                                    <div className="space-y-3">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest block pl-1">{t('contact_page.form.aircraft_type')}</label>
                                        <div className="flex bg-black/40 p-1.5 rounded-xl border border-white/5 relative">
                                            {/* Sliding Background could be added here with separate component, but simple distinct buttons work well too */}
                                            <button
                                                type="button"
                                                onClick={() => handleTypeChange('PASSENGER')}
                                                className={`flex-1 py-3 text-sm font-bold uppercase tracking-widest transition-all rounded-lg relative z-10 ${formData.flightType === 'PASSENGER'
                                                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/50'
                                                    : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
                                                    }`}
                                            >
                                                {t('contact_page.form.passenger')}
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => handleTypeChange('CARGO')}
                                                className={`flex-1 py-3 text-sm font-bold uppercase tracking-widest transition-all rounded-lg relative z-10 ${formData.flightType === 'CARGO'
                                                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/50'
                                                    : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
                                                    }`}
                                            >
                                                {t('contact_page.form.cargo')}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Airport Selection */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                                        {/* Swap Button - Vertically centered relative to the input boxes (offset by label height approx 24px) */}
                                        <button
                                            type="button"
                                            onClick={handleSwapAirports}
                                            className="hidden md:flex absolute top-[calc(50%+12px)] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-black/80 backdrop-blur-xl border border-white/20 p-2.5 rounded-full hover:border-indigo-500 hover:text-indigo-400 transition-all text-gray-400 shadow-xl group"
                                            title="Inverser aéroports"
                                        >
                                            <ArrowRightLeft className="w-4 h-4 transition-transform group-hover:rotate-180" />
                                        </button>

                                        {/* Mobile Swap Button (visible only on mobile) */}
                                        <button
                                            type="button"
                                            onClick={handleSwapAirports}
                                            className="md:hidden absolute top-1/2 left-[calc(100%-20px)] -translate-y-1/2 z-20 bg-black/80 backdrop-blur-xl border border-white/20 p-2 rounded-full hover:border-indigo-500 hover:text-indigo-400 transition-all text-gray-400 shadow-xl"
                                        >
                                            <ArrowRightLeft className="w-4 h-4 rotate-90" />
                                        </button>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">{t('contact_page.form.departure')} <span className="text-indigo-500">*</span></label>
                                            <AirportAutocomplete
                                                key={`dep-${departure?.iata || 'empty'}`}
                                                initialAirport={departure}
                                                onSelect={setDeparture}
                                                placeholder={t('contact_page.form.departure')}
                                                customStyles={{
                                                    input: { backgroundColor: '#18181b', border: '1px solid #3f3f46', padding: '1rem', fontSize: '1rem', borderRadius: 0 },
                                                    inputFocus: { borderColor: '#6366f1' }
                                                }}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">{t('contact_page.form.arrival')} <span className="text-indigo-500">*</span></label>
                                            <AirportAutocomplete
                                                key={`arr-${arrival?.iata || 'empty'}`}
                                                initialAirport={arrival}
                                                onSelect={setArrival}
                                                placeholder={t('contact_page.form.arrival')}
                                                customStyles={{
                                                    input: { backgroundColor: '#18181b', border: '1px solid #3f3f46', padding: '1rem', fontSize: '1rem', borderRadius: 0 },
                                                    inputFocus: { borderColor: '#6366f1' }
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Date & Time */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">{t('contact_page.form.departure_date')} <span className="text-indigo-500">*</span></label>
                                                <input
                                                    type="date"
                                                    name="departureDate"
                                                    value={formData.departureDate}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-zinc-900 border border-zinc-700 p-4 text-white focus:border-indigo-500 outline-none transition-all uppercase placeholder-gray-600"
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">{t('contact_page.form.time')}</label>
                                                <select
                                                    name="departureTime"
                                                    value={formData.departureTime}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-zinc-900 border border-zinc-700 p-4 text-white focus:border-indigo-500 outline-none transition-all uppercase appearance-none"
                                                >
                                                    <option>{t('contact_page.form.indifferent')}</option>
                                                    <option>{t('contact_page.form.morning')}</option>
                                                    <option>{t('contact_page.form.afternoon')}</option>
                                                    <option>{t('contact_page.form.evening')}</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* Pax Count or Empty for Balance */}
                                        {formData.flightType === 'PASSENGER' && (
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">{t('contact_page.form.passengers')} <span className="text-indigo-500">*</span></label>
                                                <input
                                                    type="number"
                                                    name="paxCount"
                                                    min="1"
                                                    value={formData.paxCount}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-zinc-900 border border-zinc-700 p-4 text-white focus:border-indigo-500 outline-none transition-all"
                                                />
                                            </div>
                                        )}
                                    </div>

                                    {/* Return Date (Optional) */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-zinc-800">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">{t('contact_page.form.return_date')}</label>
                                                <input
                                                    type="date"
                                                    name="returnDate"
                                                    value={formData.returnDate}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-zinc-900 border border-zinc-700 p-4 text-white focus:border-indigo-500 outline-none transition-all uppercase placeholder-gray-600 text-gray-400 focus:text-white"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">{t('contact_page.form.time')}</label>
                                                <select
                                                    name="returnTime"
                                                    value={formData.returnTime}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-zinc-900 border border-zinc-700 p-4 text-white focus:border-indigo-500 outline-none transition-all uppercase appearance-none text-gray-400 focus:text-white"
                                                >
                                                    <option>{t('contact_page.form.indifferent')}</option>
                                                    <option>{t('contact_page.form.morning')}</option>
                                                    <option>{t('contact_page.form.afternoon')}</option>
                                                    <option>{t('contact_page.form.evening')}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2 pt-4 border-t border-zinc-800">
                                        {formData.flightType === 'PASSENGER' && (
                                            <>
                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">{t('contact_page.form.additional_info')}</label>
                                                <textarea
                                                    name="comment"
                                                    value={formData.comment}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-zinc-900 border border-zinc-700 p-4 text-white focus:border-indigo-500 outline-none h-32 resize-none transition-all placeholder-gray-600"
                                                    placeholder={t('contact_page.form.additional_info_placeholder')}
                                                ></textarea>
                                            </>
                                        )}
                                    </div>

                                    <div className="flex justify-end pt-8">
                                        <button
                                            type="button"
                                            onClick={nextStep}
                                            className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-10 py-4 font-bold uppercase tracking-widest hover:from-violet-500 hover:to-indigo-500 transition-all shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:shadow-[0_0_30px_rgba(99,102,241,0.7)] flex items-center gap-2"
                                        >
                                            {t('contact_page.form.next')} <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 2 for CARGO: Cargo Details */}
                            {step === 2 && formData.flightType === 'CARGO' && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-8"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* Left Column: Inputs */}
                                        <div className="space-y-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">{t('contact_page.form.cargo_weight')} <span className="text-indigo-500">*</span></label>
                                                <input
                                                    type="text"
                                                    name="cargoWeight"
                                                    value={formData.cargoWeight}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-zinc-900 border border-zinc-700 p-4 text-white focus:border-indigo-500 outline-none transition-all"
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">{t('contact_page.form.cargo_volume')}</label>
                                                <input
                                                    type="text"
                                                    name="cargoVolume"
                                                    value={formData.cargoVolume}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-zinc-900 border border-zinc-700 p-4 text-white focus:border-indigo-500 outline-none transition-all"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">{t('contact_page.form.cargo_type')}</label>
                                                <input
                                                    type="text"
                                                    name="cargoType"
                                                    value={formData.cargoType}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-zinc-900 border border-zinc-700 p-4 text-white focus:border-indigo-500 outline-none transition-all"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">{t('contact_page.form.cargo_size')}</label>
                                                <input
                                                    type="text"
                                                    name="cargoLargestSize"
                                                    value={formData.cargoLargestSize}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-zinc-900 border border-zinc-700 p-4 text-white focus:border-indigo-500 outline-none transition-all"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">{t('contact_page.form.cargo_dims')}</label>
                                                <input
                                                    type="text"
                                                    name="cargoDimensions"
                                                    value={formData.cargoDimensions}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-zinc-900 border border-zinc-700 p-4 text-white focus:border-indigo-500 outline-none transition-all"
                                                />
                                            </div>
                                        </div>

                                        {/* Right Column: Textarea */}
                                        <div className="space-y-2 h-full">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">{t('contact_page.form.additional_info')}</label>
                                            <textarea
                                                name="comment"
                                                value={formData.comment}
                                                onChange={handleInputChange}
                                                className="w-full h-full min-h-[300px] bg-zinc-900 border border-zinc-700 p-4 text-white focus:border-indigo-500 outline-none resize-none transition-all placeholder-gray-600"
                                                placeholder={t('contact_page.form.cargo_desc_placeholder')}
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="flex justify-between pt-8 border-t border-zinc-800">
                                        <button
                                            type="button"
                                            onClick={prevStep}
                                            className="text-gray-500 hover:text-white font-bold uppercase tracking-widest transition-colors px-6"
                                        >
                                            &larr; {t('contact_page.form.back')}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={nextStep}
                                            className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-10 py-4 font-bold uppercase tracking-widest hover:from-violet-500 hover:to-indigo-500 transition-all shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:shadow-[0_0_30px_rgba(99,102,241,0.7)] flex items-center gap-2"
                                        >
                                            {t('contact_page.form.next')} <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {/* Contact Step (Step 2 for Passenger / Step 3 for Cargo) */}
                            {((step === 2 && formData.flightType === 'PASSENGER') || (step === 3 && formData.flightType === 'CARGO')) && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-8"
                                >
                                    {/* Row 1: Nom | Email */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">{t('contact_page.form.name')} <span className="text-indigo-500">*</span></label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                className="w-full bg-zinc-900 border border-zinc-700 p-4 text-white focus:border-indigo-500 outline-none transition-all"
                                                placeholder={t('contact_page.form.name_placeholder')}
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">{t('contact_page.form.email')} <span className="text-indigo-500">*</span></label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full bg-zinc-900 border border-zinc-700 p-4 text-white focus:border-indigo-500 outline-none transition-all"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Row 2: Entreprise | Telephone */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">{t('contact_page.form.company')}</label>
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleInputChange}
                                                className="w-full bg-zinc-900 border border-zinc-700 p-4 text-white focus:border-indigo-500 outline-none transition-all"
                                                placeholder={t('contact_page.form.company_placeholder')}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">{t('contact_page.form.phone')} <span className="text-indigo-500">*</span></label>
                                            <div className="flex">
                                                <span className="bg-zinc-800 text-gray-400 p-4 border border-zinc-700 border-r-0 flex items-center justify-center font-mono text-sm">+33</span>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-zinc-900 border border-zinc-700 p-4 text-white focus:border-indigo-500 outline-none transition-all"
                                                    placeholder={t('contact_page.form.phone_placeholder')}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Row 3: Mobile */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">{t('contact_page.form.mobile')}</label>
                                            <div className="flex">
                                                <span className="bg-zinc-800 text-gray-400 p-4 border border-zinc-700 border-r-0 flex items-center justify-center font-mono text-sm">+33</span>
                                                <input
                                                    type="tel"
                                                    name="mobile"
                                                    value={formData.mobile}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-zinc-900 border border-zinc-700 p-4 text-white focus:border-indigo-500 outline-none transition-all"
                                                    placeholder={t('contact_page.form.mobile_placeholder')}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Checkboxes */}
                                    <div className="space-y-4 pt-4">
                                        <label className="flex items-start gap-4 cursor-pointer group">
                                            <div className="relative flex items-center">
                                                <input
                                                    type="checkbox"
                                                    name="consentContact"
                                                    checked={formData.consentContact}
                                                    onChange={handleCheckboxChange}
                                                    className="peer h-5 w-5 cursor-pointer appearance-none border border-zinc-600 bg-zinc-900 checked:bg-indigo-600 checked:border-indigo-600 transition-all"
                                                />
                                                <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none opacity-0 peer-checked:opacity-100 text-white transition-opacity" viewBox="0 0 14 14" fill="none">
                                                    <path d="M3 8L6 11L11 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <span className="text-sm text-gray-400 group-hover:text-gray-300">
                                                {t('contact_page.form.consent_contact')}
                                            </span>
                                        </label>

                                        <label className="flex items-start gap-4 cursor-pointer group">
                                            <div className="relative flex items-center">
                                                <input
                                                    type="checkbox"
                                                    name="consentTerms"
                                                    checked={formData.consentTerms}
                                                    onChange={handleCheckboxChange}
                                                    className="peer h-5 w-5 cursor-pointer appearance-none border border-zinc-600 bg-zinc-900 checked:bg-indigo-600 checked:border-indigo-600 transition-all"
                                                    required
                                                />
                                                <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none opacity-0 peer-checked:opacity-100 text-white transition-opacity" viewBox="0 0 14 14" fill="none">
                                                    <path d="M3 8L6 11L11 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <span className="text-sm text-gray-400 group-hover:text-gray-300">
                                                <span dangerouslySetInnerHTML={{ __html: t('contact_page.form.consent_terms') }} />
                                            </span>
                                        </label>
                                    </div>

                                    <div className="flex justify-between pt-8 border-t border-zinc-800">
                                        <button
                                            type="button"
                                            onClick={prevStep}
                                            className="text-gray-500 hover:text-white font-bold uppercase tracking-widest transition-colors px-6"
                                        >
                                            &larr; {t('contact_page.form.back')}
                                        </button>
                                        <button
                                            type="submit"
                                            className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-12 py-4 font-bold uppercase tracking-widest hover:from-violet-500 hover:to-indigo-500 transition-all shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:shadow-[0_0_30px_rgba(99,102,241,0.7)] flex items-center gap-2"
                                        >
                                            {t('contact_page.form.submit')} <ArrowRight className="w-5 h-5 -rotate-45" />
                                        </button>
                                    </div>

                                </motion.div>
                            )}
                        </form>
                    </motion.div>

                    {/* Location / Access Section */}
                    <div className="mt-20 mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest mb-4 flex items-center justify-center gap-3">
                                <MapPin className="text-indigo-500" />
                                {t('contact_page.access.title')}
                            </h2>
                            <p className="text-gray-400 font-light max-w-2xl mx-auto">
                                {t('contact_page.access.subtitle')}
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            <a
                                href="/plan-acces-1.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative bg-zinc-900/50 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-zinc-800/80 hover:border-indigo-500/50 transition-all duration-300 flex flex-col items-center justify-center gap-4 text-center overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="p-4 rounded-full bg-white/5 group-hover:bg-indigo-500/20 transition-colors">
                                    <FileText className="w-8 h-8 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold uppercase tracking-wider mb-2 text-white group-hover:text-indigo-300 transition-colors">{t('contact_page.access.guide1')}</h3>
                                    <span className="text-xs font-mono text-gray-500 group-hover:text-gray-400 uppercase tracking-widest">PDF • DOCUMENTATION</span>
                                </div>
                            </a>

                            <a
                                href="/plan-acces-2.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative bg-zinc-900/50 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-zinc-800/80 hover:border-indigo-500/50 transition-all duration-300 flex flex-col items-center justify-center gap-4 text-center overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="p-4 rounded-full bg-white/5 group-hover:bg-indigo-500/20 transition-colors">
                                    <FileText className="w-8 h-8 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold uppercase tracking-wider mb-2 text-white group-hover:text-indigo-300 transition-colors">{t('contact_page.access.guide2')}</h3>
                                    <span className="text-xs font-mono text-gray-500 group-hover:text-gray-400 uppercase tracking-widest">PDF • DOCUMENTATION</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Success Modal */}
            {showSuccess && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setShowSuccess(false)}></div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-black border border-white/10 p-8 md:p-12 max-w-lg w-full relative z-10 text-center shadow-2xl"
                    >
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                            <ArrowRight className="text-black w-8 h-8 -rotate-45" />
                        </div>
                        <h3 className="text-2xl font-bold uppercase tracking-wider mb-4">{t('contact_page.success.title')}</h3>
                        <p className="text-gray-400 font-light leading-relaxed mb-8">
                            {t('contact_page.success.message')}
                        </p>
                        <button
                            onClick={() => setShowSuccess(false)}
                            className="bg-white text-black px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors w-full"
                        >
                            {t('contact_page.success.close')}
                        </button>
                    </motion.div>
                </div>
            )}
        </PageTransition>
    );
};

export default Contact;
