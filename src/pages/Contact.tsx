import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';

const Contact = () => (
    <PageTransition>
        <Helmet><title>Contact - fl360</title></Helmet>
        <div className="py-20 container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8">Contactez-nous</h1>
            <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Nom</label>
                        <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sky-500 outline-none" placeholder="Votre nom" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                        <input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sky-500 outline-none" placeholder="votre@email.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                        <textarea className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sky-500 outline-none h-32" placeholder="Votre message..."></textarea>
                    </div>
                    <button type="submit" className="w-full bg-sky-600 text-white py-3 rounded-lg font-bold hover:bg-sky-700 transition-colors">Envoyer</button>
                </form>
            </div>
        </div>
    </PageTransition>
);

export default Contact;
