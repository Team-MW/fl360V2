import React, { useState, useEffect, useRef } from 'react';
import Papa from 'papaparse';
import { cn } from "../lib/utils";

// --- Types ---

export interface Airport {
    name: string;
    city: string;
    country: string;
    iata: string;
    icao?: string;
}

interface AirportAutocompleteProps {
    onSelect: (airport: Airport | null) => void;
    customStyles?: {
        input?: React.CSSProperties;
        inputFocus?: React.CSSProperties;
    };
    placeholder?: string;
}

interface CsvAirportRow {
    code: string;
    name: string;
    latitude: string;
    longitude: string;
    country_code: string;
    zone_code: string;
}

// --- Utilities ---

function normalize(str: string): string {
    if (!str) return '';
    return str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}

function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => clearTimeout(handler);
    }, [value, delay]);
    return debouncedValue;
}

// --- Component ---

export const AirportAutocomplete: React.FC<AirportAutocompleteProps> = ({ onSelect, customStyles, placeholder }) => {
    const [inputValue, setInputValue] = useState('');
    const [allAirports, setAllAirports] = useState<Airport[]>([]);
    const [suggestions, setSuggestions] = useState<Airport[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const [isLoading, setIsLoading] = useState(true);
    const [, setError] = useState<string | null>(null);
    const [isFocused, setIsFocused] = useState(false);

    const wrapperRef = useRef<HTMLDivElement>(null);
    const debouncedQuery = useDebounce(inputValue, 300);

    // --- Logic: Load Data ---
    useEffect(() => {
        const fetchAirports = async () => {
            try {
                const response = await fetch('/upply-airports.csv');
                if (!response.ok) throw new Error(`Failed to fetch CSV: ${response.statusText}`);
                const csvText = await response.text();

                Papa.parse<CsvAirportRow>(csvText, {
                    header: true,
                    delimiter: ";",
                    skipEmptyLines: true,
                    complete: (results) => {
                        const parsedAirports: Airport[] = results.data
                            .map(row => ({
                                name: row.name,
                                city: row.name,
                                country: row.country_code,
                                iata: row.code,
                                icao: undefined
                            }))
                            .filter(a => a.iata && a.name);
                        setAllAirports(parsedAirports);
                        setIsLoading(false);
                    },
                    error: (err: Error) => {
                        setError(err.message);
                        setIsLoading(false);
                    }
                });
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error loading airports');
                setIsLoading(false);
            }
        };
        fetchAirports();
    }, []);

    // --- Logic: Close on click outside ---
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setShowSuggestions(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // --- Logic: Search & Scoring ---
    useEffect(() => {
        if (!debouncedQuery || debouncedQuery.length < 2) {
            setSuggestions([]);
            return;
        }
        if (allAirports.length === 0) return;

        const normalizedQuery = normalize(debouncedQuery);
        const scoredAirports = allAirports.filter(airport => {
            const normIata = normalize(airport.iata);
            const normCity = normalize(airport.city);
            const normName = normalize(airport.name);
            return normIata.includes(normalizedQuery) || normCity.includes(normalizedQuery) || normName.includes(normalizedQuery);
        }).map(airport => {
            const normIata = normalize(airport.iata);
            const normCity = normalize(airport.city);
            const normName = normalize(airport.name);
            let score = 0;
            if (normIata === normalizedQuery) score += 100;
            else if (normIata.startsWith(normalizedQuery)) score += 50;
            else if (normCity.startsWith(normalizedQuery)) score += 40;
            else if (normName.startsWith(normalizedQuery)) score += 30;
            else if (normCity.includes(normalizedQuery)) score += 20;
            else if (normName.includes(normalizedQuery)) score += 10;
            return { airport, score };
        });

        scoredAirports.sort((a, b) => b.score - a.score);
        const topResults = scoredAirports.slice(0, 8).map(item => item.airport);

        setSuggestions(topResults);
        setHighlightedIndex(-1);
        setShowSuggestions(topResults.length > 0);
    }, [debouncedQuery, allAirports]);

    // --- UI Handlers ---
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        setShowSuggestions(true);
    };

    const handleSuggestionClick = (airport: Airport) => {
        setInputValue(`${airport.name} (${airport.iata})`);
        onSelect(airport);
        setShowSuggestions(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!showSuggestions || suggestions.length === 0) return;
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setHighlightedIndex(prev => (prev < suggestions.length - 1 ? prev + 1 : 0));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setHighlightedIndex(prev => (prev > 0 ? prev - 1 : suggestions.length - 1));
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (highlightedIndex >= 0 && highlightedIndex < suggestions.length) {
                handleSuggestionClick(suggestions[highlightedIndex]);
            }
        } else if (e.key === 'Escape') {
            setShowSuggestions(false);
        }
    };

    // Merge default styles with custom styles
    const computedInputStyle = {
        ...(customStyles?.input || {}),
        ...(isFocused && customStyles?.inputFocus ? customStyles.inputFocus : {})
    };

    // Base Tailwind classes adapted for dark mode
    const baseInputClasses = "flex w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:border-white outline-none transition-all placeholder:text-gray-500 placeholder-transparent disabled:cursor-not-allowed disabled:opacity-50";

    return (
        <div ref={wrapperRef} className="relative w-full font-sans">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                onFocus={() => { setShowSuggestions(suggestions.length > 0); setIsFocused(true); }}
                onBlur={() => setIsFocused(false)}
                placeholder={placeholder || (isLoading ? "Loading..." : "Search airport...")}
                disabled={isLoading}
                className={cn(baseInputClasses, isLoading && "opacity-50")}
                style={computedInputStyle}
            />

            {inputValue && !isLoading && (
                <button
                    onClick={() => { setInputValue(''); onSelect(null); setShowSuggestions(false); }}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                    aria-label="Clear selection"
                >
                    &times;
                </button>
            )}

            {showSuggestions && suggestions.length > 0 && (
                <ul className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-none border border-white/10 bg-black/90 backdrop-blur-md text-white shadow-xl">
                    {suggestions.map((airport, index) => (
                        <li
                            key={`${airport.iata}-${index}`}
                            className={cn(
                                "relative flex cursor-pointer select-none items-center px-4 py-3 text-sm outline-none transition-colors border-b border-white/5 last:border-0",
                                index === highlightedIndex ? "bg-white/10" : "hover:bg-white/5"
                            )}
                            onClick={() => handleSuggestionClick(airport)}
                            onMouseEnter={() => setHighlightedIndex(index)}
                        >
                            <div className="flex flex-col flex-1">
                                <span className="font-medium text-white">{airport.name}</span>
                                <span className="text-xs text-gray-400">{airport.city}, {airport.country}</span>
                            </div>
                            <span className="ml-2 font-mono text-xs font-bold text-black bg-white px-1.5 py-0.5 rounded">
                                {airport.iata}
                            </span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
