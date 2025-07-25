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
      if (debouncedTerm === "") {
        setCards([]);
        setError("");
        return;
      }

      setLoading(true);
      setError("");

      try {
        const data = await searchCards(debouncedTerm);

        if (data.length === 0) {
          setCards([]);
          setError("Nenhuma carta encontrada.");
        } else {
          setCards(data);
        }
      } catch (err) {
        console.error(err);
        setError("Erro ao buscar cartas.");
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
        {loading && <p className="text-center text-lg p-6">Carregando...</p>}
        {error && !loading && (
          <p className="text-center text-lg p-6 text-red-500">{error}</p>
        )}
      {!loading && !error && cards.length > 0 && (
        <div className="grid grid-cols-3 gap-4 mt-6">
          {cards.map((card) => (
            <div key={card.id}>
              <img src={card.images.small} alt={card.name} />
              <p className="text-center text-lg pt-4">{card.name}</p>
            </div>
          ))}
        </div>
      )}
      </div>
    </div>
  );
};

export default Search;
