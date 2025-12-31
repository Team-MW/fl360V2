import { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import { ArrowRight } from 'lucide-react';
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
        country: 'France',
        mobile: '',
        consentContact: false,
        consentTerms: false,
        // Cargo Details
        cargoWeight: '',
        cargoVolume: '',
        cargoLargestSize: '',
        cargoDimensions: ''
    });
    const [departure, setDeparture] = useState<Airport | null>(null);
    const [arrival, setArrival] = useState<Airport | null>(null);

    const nextStep = () => {
        if (!departure || !arrival) {
            alert("Veuillez sélectionner les aéroports de départ et d'arrivée.");
            return;
        }
        if (!formData.departureDate) {
            alert("Veuillez sélectionner une date de départ.");
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
                alert("Veuillez accepter les termes et conditions.");
                return;
            }
        }

        if (!departure || !arrival) {
            alert("Veuillez sélectionner les aéroports de départ et d'arrivée.");
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
                        returnDate: '', returnTime: 'Indifférent', company: '', country: 'France',
                        mobile: '', consentContact: false, consentTerms: false,
                        cargoWeight: '', cargoVolume: '', cargoLargestSize: '', cargoDimensions: ''
                    });
                    setDeparture(null);
                    setArrival(null);
                    setStep(1); // Return to Step 1
                    setTimeout(() => setShowSuccess(false), 5000);
                })
                .catch((error) => {
                    console.error("EmailJS Error:", error);
                    alert("Erreur lors de l'envoi : " + error.text);
                });
        }
    };

    return (
        <PageTransition>
            <Helmet>
                <title>{t('contact_page.title')} - fl360</title>
                <meta name="description" content="Demandez un devis ou contactez nos experts pour vos besoins en aviation. Assistance rapide et professionnelle." />
                <meta property="og:title" content={`${t('contact_page.title')} - fl360`} />
                <meta property="og:description" content="Contactez fl360 Aviation Systems pour discuter de vos projets aéronautiques." />
                <meta property="og:type" content="website" />
            </Helmet>
            <div className="min-h-screen bg-zinc-950 pt-32 pb-20 flex flex-col items-center justify-center text-white relative overflow-hidden font-sans">
                <Starfield />

                <div className="container mx-auto px-4 max-w-5xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-widest mb-4">
                            {step === 1 ? "Détails du Vol" :
                                (step === 2 && formData.flightType === 'CARGO') ? "Détails Cargo" :
                                    "Informations de Contact"}
                        </h1>
                        <div className="flex items-center justify-center gap-4 text-xs font-mono tracking-[0.2em] text-gray-500 mb-8">
                            <span className={step === 1 ? "text-cyan-400" : ""}>01. VOL</span>
                            <span>&gt;</span>
                            {formData.flightType === 'CARGO' && (
                                <>
                                    <span className={step === 2 ? "text-cyan-400" : ""}>02. DETAILS</span>
                                    <span>&gt;</span>
                                    <span className={step === 3 ? "text-cyan-400" : ""}>03. CONTACT</span>
                                </>
                            )}
                            {formData.flightType === 'PASSENGER' && (
                                <span className={step === 2 ? "text-cyan-400" : ""}>02. CONTACT</span>
                            )}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-zinc-900 border border-zinc-800 p-8 md:p-12 relative shadow-2xl rounded-none"
                    >
                        {/* Decorative Corner Lines */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-indigo-500/50"></div>
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-indigo-500/50"></div>
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-indigo-500/50"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-indigo-500/50"></div>

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
                                Country: ${formData.country}
                                Mobile: ${formData.mobile}
                                Marketing Consent: ${formData.consentContact ? 'Yes' : 'No'}
                            `} />

                            {/* Cargo Details for Email */}
                            <input type="hidden" name="cargo_details" value={`
                                Weight: ${formData.cargoWeight}
                                Volume: ${formData.cargoVolume}
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
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Type d'appareil <span className="text-indigo-500">*</span></label>
                                        <div className="flex gap-0">
                                            <button
                                                type="button"
                                                onClick={() => handleTypeChange('PASSENGER')}
                                                className={`flex-1 py-4 text-sm font-bold uppercase tracking-widest transition-all border ${formData.flightType === 'PASSENGER'
                                                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]'
                                                    : 'bg-transparent text-gray-500 border-zinc-700 hover:border-zinc-500'
                                                    }`}
                                            >
                                                Passager
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => handleTypeChange('CARGO')}
                                                className={`flex-1 py-4 text-sm font-bold uppercase tracking-widest transition-all border-y border-r ${formData.flightType === 'CARGO'
                                                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]'
                                                    : 'bg-transparent text-gray-500 border-zinc-700 hover:border-zinc-500'
                                                    }`}
                                            >
                                                Cargo
                                            </button>
                                        </div>
                                    </div>

                                    {/* Airport Selection */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Départ <span className="text-indigo-500">*</span></label>
                                            <AirportAutocomplete
                                                onSelect={setDeparture}
                                                placeholder="Départ (Ville ou Code)"
                                                customStyles={{
                                                    input: { backgroundColor: '#18181b', border: '1px solid #3f3f46', padding: '1rem', fontSize: '1rem', borderRadius: 0 },
                                                    inputFocus: { borderColor: '#6366f1' }
                                                }}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Destination <span className="text-indigo-500">*</span></label>
                                            <AirportAutocomplete
                                                onSelect={setArrival}
                                                placeholder="Arrivée (Ville ou Code)"
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
                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Date de départ <span className="text-indigo-500">*</span></label>
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
                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Heure</label>
                                                <select
                                                    name="departureTime"
                                                    value={formData.departureTime}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-zinc-900 border border-zinc-700 p-4 text-white focus:border-indigo-500 outline-none transition-all uppercase appearance-none"
                                                >
                                                    <option>Indifférent</option>
                                                    <option>Matin (06:00 - 12:00)</option>
                                                    <option>Après-midi (12:00 - 18:00)</option>
                                                    <option>Soir (18:00 - 00:00)</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* Pax Count or Empty for Balance */}
                                        {formData.flightType === 'PASSENGER' && (
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Passagers <span className="text-indigo-500">*</span></label>
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
                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Date de retour</label>
                                                <input
                                                    type="date"
                                                    name="returnDate"
                                                    value={formData.returnDate}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-zinc-900 border border-zinc-700 p-4 text-white focus:border-indigo-500 outline-none transition-all uppercase placeholder-gray-600 text-gray-400 focus:text-white"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Heure</label>
                                                <select
                                                    name="returnTime"
                                                    value={formData.returnTime}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-zinc-900 border border-zinc-700 p-4 text-white focus:border-indigo-500 outline-none transition-all uppercase appearance-none text-gray-400 focus:text-white"
                                                >
                                                    <option>Indifférent</option>
                                                    <option>Matin (06:00 - 12:00)</option>
                                                    <option>Après-midi (12:00 - 18:00)</option>
                                                    <option>Soir (18:00 - 00:00)</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2 pt-4 border-t border-zinc-800">
                                        {formData.flightType === 'PASSENGER' && (
                                            <>
                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Informations supplémentaires (Optionnel)</label>
                                                <textarea
                                                    name="comment"
                                                    value={formData.comment}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-zinc-900 border border-zinc-700 p-4 text-white focus:border-indigo-500 outline-none h-32 resize-none transition-all placeholder-gray-600"
                                                    placeholder="Besoin particulier, animaux, bagages volumineux..."
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
                                            Suivant <ArrowRight className="w-5 h-5" />
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
                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Poids Total (kg/t) <span className="text-indigo-500">*</span></label>
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
                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Volume Total (m3/ft3)</label>
                                                <input
                                                    type="text"
                                                    name="cargoVolume"
                                                    value={formData.cargoVolume}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-zinc-900 border border-zinc-700 p-4 text-white focus:border-indigo-500 outline-none transition-all"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Plus grande taille (m/ft)</label>
                                                <input
                                                    type="text"
                                                    name="cargoLargestSize"
                                                    value={formData.cargoLargestSize}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-zinc-900 border border-zinc-700 p-4 text-white focus:border-indigo-500 outline-none transition-all"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Dimensions (m/ft)</label>
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
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Informations supplémentaires</label>
                                            <textarea
                                                name="comment"
                                                value={formData.comment}
                                                onChange={handleInputChange}
                                                className="w-full h-full min-h-[300px] bg-zinc-900 border border-zinc-700 p-4 text-white focus:border-indigo-500 outline-none resize-none transition-all placeholder-gray-600"
                                                placeholder="Description de la marchandise, instructions spéciales..."
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="flex justify-between pt-8 border-t border-zinc-800">
                                        <button
                                            type="button"
                                            onClick={prevStep}
                                            className="text-gray-500 hover:text-white font-bold uppercase tracking-widest transition-colors px-6"
                                        >
                                            &larr; Retour
                                        </button>
                                        <button
                                            type="button"
                                            onClick={nextStep}
                                            className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-10 py-4 font-bold uppercase tracking-widest hover:from-violet-500 hover:to-indigo-500 transition-all shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:shadow-[0_0_30px_rgba(99,102,241,0.7)] flex items-center gap-2"
                                        >
                                            Suivant <ArrowRight className="w-5 h-5" />
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
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Nom <span className="text-indigo-500">*</span></label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                className="w-full bg-zinc-900 border border-zinc-700 p-4 text-white focus:border-indigo-500 outline-none transition-all"
                                                placeholder="Votre nom"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Email <span className="text-indigo-500">*</span></label>
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
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Entreprise <span className="text-indigo-500">*</span></label>
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleInputChange}
                                                className="w-full bg-zinc-900 border border-zinc-700 p-4 text-white focus:border-indigo-500 outline-none transition-all"
                                                placeholder="Nom de l'entreprise"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Téléphone <span className="text-indigo-500">*</span></label>
                                            <div className="flex">
                                                <span className="bg-zinc-800 text-gray-400 p-4 border border-zinc-700 border-r-0 flex items-center justify-center font-mono text-sm">+33</span>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-zinc-900 border border-zinc-700 p-4 text-white focus:border-indigo-500 outline-none transition-all"
                                                    placeholder="1 23 45 67 89"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Row 3: Pays | Mobile */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Pays <span className="text-indigo-500">*</span></label>
                                            <select
                                                name="country"
                                                value={formData.country}
                                                onChange={handleInputChange}
                                                className="w-full bg-zinc-900 border border-zinc-700 p-4 text-white focus:border-indigo-500 outline-none transition-all appearance-none"
                                            >
                                                <option value="France">France</option>
                                                <option value="United Kingdom">Royaume-Uni</option>
                                                <option value="USA">États-Unis</option>
                                                <option value="Switzerland">Suisse</option>
                                                <option value="Belgium">Belgique</option>
                                                <option value="Other">Autre</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Mobile</label>
                                            <div className="flex">
                                                <span className="bg-zinc-800 text-gray-400 p-4 border border-zinc-700 border-r-0 flex items-center justify-center font-mono text-sm">+33</span>
                                                <input
                                                    type="tel"
                                                    name="mobile"
                                                    value={formData.mobile}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-zinc-900 border border-zinc-700 p-4 text-white focus:border-indigo-500 outline-none transition-all"
                                                    placeholder="6 12 34 56 78"
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
                                                J'autorise Air Charter Service à utiliser mes informations pour me contacter par téléphone et par email au sujet de ma demande de renseignements et/ou de produits et services équivalents.
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
                                                J'accepte les termes et conditions, <a href="/mentions-legales" className="text-indigo-400 hover:text-white hover:underline">la politique de confidentialité</a> et de cookies.
                                            </span>
                                        </label>
                                    </div>

                                    <div className="flex justify-between pt-8 border-t border-zinc-800">
                                        <button
                                            type="button"
                                            onClick={prevStep}
                                            className="text-gray-500 hover:text-white font-bold uppercase tracking-widest transition-colors px-6"
                                        >
                                            &larr; Retour
                                        </button>
                                        <button
                                            type="submit"
                                            className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-12 py-4 font-bold uppercase tracking-widest hover:from-violet-500 hover:to-indigo-500 transition-all shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:shadow-[0_0_30px_rgba(99,102,241,0.7)] flex items-center gap-2"
                                        >
                                            Soumettre <ArrowRight className="w-5 h-5 -rotate-45" />
                                        </button>
                                    </div>

                                </motion.div>
                            )}

                            {/* Step 2 for Cargo Fallback REMOVED as it is now handled above */}
                            {false && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-8"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Prénom <span className="text-cyan-500">*</span></label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                className="w-full bg-zinc-900 border border-zinc-700 p-4 text-white focus:border-cyan-500 outline-none transition-all"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Nom <span className="text-cyan-500">*</span></label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                className="w-full bg-zinc-900 border border-zinc-700 p-4 text-white focus:border-cyan-500 outline-none transition-all"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Téléphone <span className="text-cyan-500">*</span></label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full bg-zinc-900 border border-zinc-700 p-4 text-white focus:border-cyan-500 outline-none transition-all"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Email <span className="text-cyan-500">*</span></label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full bg-zinc-900 border border-zinc-700 p-4 text-white focus:border-cyan-500 outline-none transition-all"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Message (Optionnel)</label>
                                        <textarea
                                            name="comment"
                                            value={formData.comment}
                                            onChange={handleInputChange}
                                            className="w-full bg-zinc-900 border border-zinc-700 p-4 text-white focus:border-cyan-500 outline-none h-32 resize-none transition-all"
                                        ></textarea>
                                    </div>

                                    <div className="flex justify-between pt-8">
                                        <button
                                            type="button"
                                            onClick={prevStep}
                                            className="text-gray-500 hover:text-white font-bold uppercase tracking-widest transition-colors px-6"
                                        >
                                            &larr; Retour
                                        </button>
                                        <button
                                            type="submit"
                                            className="bg-cyan-500 text-black px-12 py-4 font-bold uppercase tracking-widest hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
                                        >
                                            Envoyer la demande
                                        </button>
                                    </div>

                                </motion.div>
                            )}
                        </form>
                    </motion.div>
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
                        <h3 className="text-2xl font-bold uppercase tracking-wider mb-4">Demande Envoyée</h3>
                        <p className="text-gray-400 font-light leading-relaxed mb-8">
                            Merci pour votre demande. Elle sera traitée dans les plus brefs délais par notre équipe.
                        </p>
                        <button
                            onClick={() => setShowSuccess(false)}
                            className="bg-white text-black px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors w-full"
                        >
                            Fermer
                        </button>
                    </motion.div>
                </div>
            )}
        </PageTransition>
    );
};

export default Contact;
