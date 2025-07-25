'use client';

import { useState, useEffect } from 'react';


const Search = () => {
  const [term, setTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState('');


  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(term.trim());
    }, 800);

    return () => clearTimeout(timer);

    
  }, [term]);


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
        
      </div>
    </div>
  );
};

export default Search;