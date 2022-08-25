export const pokemonIds = [1, 20, 30, 34, 66];

interface Pokemon {
  id: number;
  name: string;
  age: number
}

export const pikachu: Pokemon = {
    id: 1,
    name: "pikachu",
    age: 4
};

console.log(pikachu);
