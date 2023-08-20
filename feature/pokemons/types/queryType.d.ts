export type Pokemon = {
    id: string;
    number: number;
    name: string;
    weight: {
        minimum: string;
        maximum: string;
    };
    height: {
        minimum: string;
        maximum: string;
    };
    classification: string;
    types: string[];
    resistant: string[];
    weaknesses: string[];
    fleeRate: number;
    maxCP: number;
    maxHP: number;
    image: string;
};

export type PokemonAttacks = {
    id: string;
    name: string;
    attacks: {
        fast: {
            name: string;
            type: string;
            damage: integer;
        }[];
        special: {
            name: string;
            type: string;
            damage: integer;
        }[];
    };
};

export type PokemonEvaluation = {
    id: string;
    name: string;
    evolutions: {
        id: string;
        number: string;
        name: string;
        classification: string;
        types: string[];
        resistant: string[];
        weaknesses: string[];
        fleeRate: number;
        maxCP: integer;
        maxHP: integer;
        image: string;
    }[];
};
