import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';

const Portfolio = () => (
    <PageTransition>
        <Helmet><title>Portfolio - fl360</title></Helmet>
        <div className="py-20 container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8">Notre Portfolio</h1>
            <p className="text-lg text-slate-600">Galerie de nos projets et appareils...</p>
            {/* Gallery Grid */}
        </div>
    </PageTransition>
);

export default Portfolio;
