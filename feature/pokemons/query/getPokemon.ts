import { gql } from '@apollo/client';

const GET_POKEMON = gql`
    query pokemon($id: String, $name: String) {
        pokemon(id: $id, name: $name) {
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

export default GET_POKEMON;
