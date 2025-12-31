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
        "Aerospatiale Gazelle",
        "Augusta-Bell / Bell 206",
        "Columbia 300 / 350 / 400",
        "Dornier Do-27",
        "Extra 260 / 300 / 400 / 500",
        "Fligth Design CT LS GT600 UL (UL)",
        "Jodel D-11 / 110 / 120",
        "Robinson R-22 / R-44",
        "Guimbal G-2 Cabri",
        "Pilatus PC-6 Porter"
    ]
};

const CapList = () => {
    const [activeTab, setActiveTab] = useState("BEECH");

    return (
        <PageTransition>
            <Helmet>
                <title>Capability List - fl360</title>
                <meta name="description" content="Liste des aéronefs gérés en CAO / CAMO." />
            </Helmet>

            <div className="min-h-screen bg-zinc-950 text-white font-sans pt-32 pb-20">
                <Starfield />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-widest mb-4"
                        >
                            Capability List
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-gray-400 font-light"
                        >
                            Aéronefs au sein de la gestion de navigabilité CAO / CAMO
                        </motion.p>
                    </div>

                    {/* Manufacturer Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {Object.keys(aircraftData).map((manufacturer, index) => (
                            <motion.button
                                key={manufacturer}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.3 }}
                                onClick={() => setActiveTab(manufacturer)}
                                className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${activeTab === manufacturer
                                    ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105'
                                    : 'bg-zinc-900 text-gray-400 hover:bg-zinc-800 hover:text-white border border-white/5'
                                    }`}
                            >
                                {manufacturer}
                            </motion.button>
                        ))}
                    </div>

                    {/* Aircraft List Table */}
                    <motion.div
                        layout
                        className="max-w-4xl mx-auto bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
                    >
                        {/* Table Header */}
                        <div className="grid grid-cols-[1fr,auto] gap-4 p-6 border-b border-white/10 bg-white/5">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">Types/Séries/Groupes d'aéronefs</h3>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 text-right hidden md:block">Examens de navigabilité autorisée</h3>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 text-right md:hidden">Autorisé</h3>
                        </div>

                        {/* Table Body */}
                        <div className="max-h-[600px] overflow-y-auto custom-scrollbar">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.2 }}
                                    className="divide-y divide-white/5"
                                >
                                    {aircraftData[activeTab as keyof typeof aircraftData].map((aircraft, index) => (
                                        <motion.div
                                            key={`${activeTab}-${index}`}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            transition={{ delay: index * 0.05 }}
                                            className="grid grid-cols-[1fr,auto] gap-4 p-6 hover:bg-indigo-900/10 transition-colors items-center group"
                                        >
                                            <span className="text-base md:text-lg font-medium text-gray-200 group-hover:text-indigo-200 transition-colors">{aircraft}</span>
                                            <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center border border-white/10 group-hover:border-indigo-500/50 transition-colors group-hover:bg-indigo-500/10">
                                                <Check className="text-indigo-400" size={20} />
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
