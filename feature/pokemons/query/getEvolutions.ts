import { gql } from '@apollo/client';

const GET_EVOLUTIONS = gql`
    fragment RecursivePokemonFragment on Pokemon {
        id
        name
        attacks {
            fast {
                name
                type
                damage
            }
            special {
                name
                type
                damage
            }
        }
    }

    query pokemon($id: String, $name: String) {
        pokemon(id: $id, name: $name) {
            id
            name
            evolutions {
                id
                number
                name
                classification
                types
                resistant
                weaknesses
                fleeRate
                maxCP
                evolutions {
                    ...RecursivePokemonFragment
                }
                maxHP
                image
            }
        }
    }
`;

export default GET_EVOLUTIONS;
