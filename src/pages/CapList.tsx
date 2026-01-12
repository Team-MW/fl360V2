import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';
import Starfield from '../components/Starfield';
import { Check } from 'lucide-react';

const aircraftData = {
    "BEECH": [
        "BEECH 18",
        "BEECH 23",
        "BEECH 24 Sierra",
        "BEECH Bonanza 33 Series",
        "BEECH Bonanza 35 Series (V-tail)",
        "BEECH 36 Bonanza",
        "BEECH 55 Baron",
        "BEECH 58 Baron Series",
        "BEECH 60 Duke",
        "BEECH 76 Duchess"
    ],
    "CESSNA": [
        "CESSNA 140 / 150 / 152 / 170 / 175 / 177 / 180 / 185 / 190",
        "CESSNA 172 / Skyhawk",
        "CESSNA 172-RG Cutlass",
        "CESSNA 177-RG Cardinal",
        "CESSNA 177 Cardinal",
        "CESSNA 182 Skylane RG",
        "CESSNA 182 / Skylane",
        "CESSNA 206 Stationair / Skywagon",
        "CESSNA 206 Turbine",
        "CESSNA 207 Soloy Turbine",
        "CESSNA P-210 Pressurized Centurion",
        "CESSNA 205 / 210 / 310 / 335 / 340 / 401 / 402",
        "CESSNA P-210 Turbine Silver Eagle",
        "CESSNA T-303 Crusader",
        "CESSNA 337 Skymaster",
        "CESSNA 337 Skymaster (pressurized)",
        "CESSNA 404 Titan",
        "CESSNA 414 Series",
        "CESSNA 421 Golden Eagle"
    ],
    "PIPER": [
        "PIPER J-3 Cub Series",
        "PIPER PA-12 Super Cruiser",
        "PIPER PA-22 Colt / Tri-Pacer",
        "PIPER PA-18 Super Cub",
        "PIPER PA-23 Aztec",
        "PIPER PA-24 Comanche",
        "PIPER PA-28 Cherokee / Warrior / Archer",
        "PIPER PA-28 Cherokee / Dakota (6 cylinder)",
        "PIPER PA-28 Arrow Series (normally-aspirated)",
        "PIPER PA-28 Arrow Series (turbo)",
        "PIPER Twin Comanche Series",
        "PIPER PA-31 Navajo / Chieftain",
        "PIPER PA-31 Cheyenne II",
        "PIPER PA-32 Cherokee 6 / Saratoga / 6X",
        "PIPER PA-32 Lance / Saratoga (retractable)",
        "PIPER PA-32 Lance II (T-tail)",
        "PIPER PA-34 Seneca",
        "PIPER PA-38 Tomahawk",
        "PIPER PA-42-720 Cheyenne 3",
        "PIPER PA-44 Seminole",
        "PIPER PA-46 Malibu / Mirage",
        "PIPER PA-46 Meridian"
    ],
    "PILATUS": [
        "PILATUS PC-6 Porter",
        "PILATUS PC-12",
        "PILATUS PC-24"
    ],
    "DAHER": [
        "DAHER TBM 840"
    ],
    "LEARJET": [
        "LEARJET 35A"
    ],
    "HELICOPTERES": [
        "AS350 B2",
        "Robinson R-44",
        "Gazelle 341 G Civile"
    ],
    "ROBIN": [
        "ROBIN ATL",
        "ROBIN DR-253 Régent",
        "ROBIN DR-300 Series",
        "ROBIN DR-400 / 500",
        "ROBIN HR-100",
        "ROBIN HR-200",
        "ROBIN R-2100 Series"
    ],
    "SOCATA": [
        "SOCATA Rallye (Morane / Socata / PZL) Series",
        "SOCATA TB-9 Tampico",
        "SOCATA TB-10 / 200 Tobago",
        "SOCATA TB-20 / 21 Trinidad"
    ],
    "DIVERS": [
        "Augusta-Bell / Bell 206",
        "Columbia 300 / 350 / 400",
        "Dornier Do-27",
        "Extra 260 / 300 / 400 / 500",
        "Fligth Design CT LS GT600 UL (UL)",
        "Jodel D-11 / 110 / 120",
        "Guimbal G-2 Cabri",
        "Robinson R-22"
    ]
};

import { useTranslation } from 'react-i18next';

const CapList = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState("BEECH");

    return (
        <PageTransition>
            <Helmet>
                <title>{t('cap_list.title')}</title>
                <meta name="description" content={t('cap_list.meta_desc')} />
            </Helmet>

            <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
                {/* Background FX */}
                <Starfield />
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-black to-black pointer-events-none"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-violet-900/20 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="container mx-auto px-6 pt-40 pb-20 relative z-10">
                    <div className="text-center mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500"
                        >
                            {t('cap_list.hero.title')}
                        </motion.h1>
                        <div className="h-1 w-24 bg-violet-600 mx-auto rounded-full mb-8"></div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto"
                        >
                            {t('cap_list.hero.subtitle')}
                        </motion.p>
                    </div>

                    {/* Manufacturer Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {Object.keys(aircraftData).map((manufacturer, index) => (
                            <motion.button
                                key={manufacturer}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 + 0.3 }}
                                onClick={() => setActiveTab(manufacturer)}
                                className={`px-6 py-2 md:px-8 md:py-3 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-300 border ${activeTab === manufacturer
                                    ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105'
                                    : 'bg-zinc-900/50 text-gray-400 border-white/10 hover:border-violet-500/50 hover:text-violet-300'
                                    }`}
                            >
                                {manufacturer}
                            </motion.button>
                        ))}
                    </div>

                    {/* Aircraft List Table */}
                    <motion.div
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="max-w-4xl mx-auto bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-2xl hover:border-violet-500/30 transition-colors duration-500"
                    >
                        {/* Table Header */}
                        <div className="grid grid-cols-[1fr,auto] gap-4 p-6 border-b border-white/10 bg-white/5">
                            <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-violet-400">{t('cap_list.table.col1')}</h3>
                            <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-violet-400 text-right hidden md:block">{t('cap_list.table.col2')}</h3>
                            <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-violet-400 text-right md:hidden">{t('cap_list.table.col2_mobile')}</h3>
                        </div>

                        {/* Table Body */}
                        <div className="max-h-[600px] overflow-y-auto custom-scrollbar">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 10 }}
                                    transition={{ duration: 0.2 }}
                                    className="divide-y divide-white/5"
                                >
                                    {aircraftData[activeTab as keyof typeof aircraftData].map((aircraft, index) => (
                                        <motion.div
                                            key={`${activeTab}-${index}`}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.03 }}
                                            className="grid grid-cols-[1fr,auto] gap-4 p-6 hover:bg-violet-900/10 transition-colors items-center group cursor-default"
                                        >
                                            <span className="text-sm md:text-base font-medium text-gray-300 group-hover:text-white transition-colors">{aircraft}</span>
                                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-zinc-800/50 flex items-center justify-center border border-white/10 group-hover:border-violet-500/50 transition-colors group-hover:bg-violet-500/20 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                                                <Check className="text-gray-500 group-hover:text-violet-400 transition-colors" size={16} />
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </PageTransition>
    );
};
export default CapList;
