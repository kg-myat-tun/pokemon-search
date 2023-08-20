import { gql } from '@apollo/client';

const GET_ATTACK_RATING = gql`
    query pokemon($id: String, $name: String) {
        pokemon(id: $id, name: $name) {
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
    }
`;

export default GET_ATTACK_RATING;
