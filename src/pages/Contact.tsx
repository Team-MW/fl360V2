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
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        comment: ''
    });
    const [departure, setDeparture] = useState<Airport | null>(null);
    const [arrival, setArrival] = useState<Airport | null>(null);

    const [showSuccess, setShowSuccess] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
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
                    setFormData({ firstName: '', lastName: '', phone: '', email: '', comment: '' });
                    setDeparture(null);
                    setArrival(null);
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
            <div className="min-h-screen bg-black pt-40 pb-20 flex flex-col items-center justify-center text-white relative overflow-hidden">
                <Starfield />
                <div className="container mx-auto px-6 max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">{t('contact_page.title')}</h1>
                        <p className="text-lg md:text-xl text-gray-400 font-light whitespace-pre-line leading-relaxed max-w-2xl mx-auto">
                            {t('contact_page.description')}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="bg-zinc-950/50 p-10 border border-white/10 relative backdrop-blur-sm rounded-xl max-w-3xl mx-auto"
                    >
                        <div className="absolute -top-1 -right-1 w-4 h-4 border-t border-r border-white/30"></div>
                        <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b border-l border-white/30"></div>

                        <form ref={form} onSubmit={handleSubmit} className="space-y-8">
                            {/* Hidden inputs for EmailJS template compatibility */}
                            <input type="hidden" name="from_name" value={`${formData.firstName} ${formData.lastName}`} />
                            <input type="hidden" name="reply_to" value={formData.email} />
                            <input type="hidden" name="message" value={formData.comment} />
                            <input type="hidden" name="departure" value={departure ? `${departure.name} (${departure.iata})` : ''} />
                            <input type="hidden" name="arrival" value={arrival ? `${arrival.name} (${arrival.iata})` : ''} />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2 group">
                                    <label className="text-xs font-mono text-white uppercase tracking-widest">Prénom</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:border-white outline-none transition-all placeholder-transparent"
                                        placeholder="Votre prénom"
                                        required
                                    />
                                </div>
                                <div className="space-y-2 group">
                                    <label className="text-xs font-mono text-white uppercase tracking-widest">Nom</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:border-white outline-none transition-all placeholder-transparent"
                                        placeholder="Votre nom"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2 group">
                                    <label className="text-xs font-mono text-white uppercase tracking-widest">{t('contact_page.labels.phone') || "Téléphone"}</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:border-white outline-none transition-all placeholder-transparent"
                                        placeholder="+33 6 ..."
                                        required
                                    />
                                </div>
                                <div className="space-y-2 group">
                                    <label className="text-xs font-mono text-white uppercase tracking-widest">{t('contact_page.labels.email')}</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:border-white outline-none transition-all placeholder-transparent"
                                        placeholder={t('contact_page.placeholders.email')}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2 group">
                                <label className="text-xs font-mono text-white uppercase tracking-widest">Aéroport de Départ</label>
                                <AirportAutocomplete
                                    onSelect={setDeparture}
                                    placeholder="Rechercher un aéroport..."
                                />
                            </div>

                            <div className="space-y-2 group">
                                <label className="text-xs font-mono text-white uppercase tracking-widest">Aéroport d'Arrivée</label>
                                <AirportAutocomplete
                                    onSelect={setArrival}
                                    placeholder="Rechercher un aéroport..."
                                />
                            </div>

                            <div className="space-y-2 group">
                                <label className="text-xs font-mono text-white uppercase tracking-widest">{t('contact_page.labels.message')}</label>
                                <textarea
                                    name="comment"
                                    value={formData.comment}
                                    onChange={handleInputChange}
                                    className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:border-white outline-none h-32 resize-none transition-all placeholder-transparent"
                                    placeholder={t('contact_page.placeholders.message')}
                                ></textarea>
                            </div>

                            <button type="submit" className="w-full bg-white text-black py-4 font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group">
                                {t('contact_page.button')} <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
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
