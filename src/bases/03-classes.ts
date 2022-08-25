import axios from "axios";
import {
  Move,
  PokeapiResponse,
} from "../interfaces/pokeapi-response.interface";

export class Pokemon {
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  constructor(public readonly id: number, public name: string) {}

  public scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  public speak() {
    console.log(`${this.name}, ${this.name}`);
  }

  async getMoves(): Promise<Move[]> {
    // const moves = 10;

    const { data } = await axios.get<PokeapiResponse>(
      "https://pokeapi.co/api/v2/pokemon/4"
    );

    console.log(data.moves);

    return data.moves;
  }
}

export const charmander = new Pokemon(1, "Charmander");

// console.log(await charmander.getMoves());
// charmander.scream();
// charmander.speak();

charmander.getMoves();
