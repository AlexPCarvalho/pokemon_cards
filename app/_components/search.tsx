"use client";

import { useState, useEffect } from "react";
import { PokemonCard, searchCards } from "../_services/searchService";

const Search = () => {
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");
  const [cards, setCards] = useState<PokemonCard[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(term.trim());
    }, 800);

    return () => clearTimeout(timer);
  }, [term]);

  useEffect(() => {
    const fetchCards = async () => {
      if (debouncedTerm === '') {
        setCards([]);
        setError('');
        return;
      }
  
      setLoading(true);
      setError('');
  
      try {
        const data = await searchCards(debouncedTerm);
  
        if (data.length === 0) {
          setCards([]);
          setError('Nenhuma carta encontrada.');
        } else {
          setCards(data);
        }
      } catch (err) {
        console.error(err);
        setError('Erro ao buscar cartas.');
        setCards([]);
      } finally {
        setLoading(false);
      }
    };
  
    fetchCards();
  }, [debouncedTerm]);
  return (
    <div className="max-w-2xl mx-auto mb-6 px-4">
      <div className="relative">
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Pesquise pelo Pokemon..."
          className="w-full h-14 px-9  rounded-full bg-white text-lg border-2"
        />
        {loading && <p>Carregando...</p>}
        {error && !loading && <p>{error}</p>}
      </div>
    </div>
  );
};

export default Search;
