import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language.startsWith('fr') ? 'en' : 'fr';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="text-sm font-mono font-bold text-white/70 hover:text-white transition-colors uppercase tracking-widest border border-white/20 px-3 py-1 rounded hover:bg-white/10"
        >
            {i18n.language.startsWith('fr') ? 'EN' : 'FR'}
        </button>
    );
};

export default LanguageSwitcher;
