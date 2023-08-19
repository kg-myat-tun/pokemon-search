import { gql } from '@apollo/client';

export interface Pokemon {
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
}

const GET_ALL_POKEMONS = gql`
    query pokemons($first: Int!) {
        pokemons(first: $first) {
            id
            number
            name
            weight {
                minimum
                maximum
            }
            height {
                minimum
                maximum
            }
            classification
            types
            resistant
            weaknesses
            fleeRate
            maxCP
            maxHP
            image
        }
    }
`;

export default GET_ALL_POKEMONS;
