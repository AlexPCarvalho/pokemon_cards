export interface PokemonCard {
    id: string;
    name: string;
    images: {
      small: string;
      large: string;
    };
   
  }
  
  export async function searchCards(name: string): Promise<PokemonCard[]> {
    const res = await fetch(
      `https://api.pokemontcg.io/v2/cards?q=name:${name}&pageSize=20`
    );
  
    if (!res.ok) {
      throw new Error('Erro na API');
    }
  
    const json = await res.json();
    return json.data as PokemonCard[];
  }