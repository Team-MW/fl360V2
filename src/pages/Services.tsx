import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';

const Services = () => (
    <PageTransition>
        <Helmet><title>Nos Services - fl360</title></Helmet>
        <div className="py-20 container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8">Nos Services</h1>
            <p className="text-lg text-slate-600">Détails complets de nos services d'aviation...</p>
            {/* Content to be expanded */}
        </div>
    </PageTransition>
);

export default Services;
