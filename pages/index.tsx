// /pages/index.tsx

import { gql, useQuery, useMutation } from '@apollo/client';

const AllLinksQuery = gql`
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

function Home() {
    const { data, loading, error, fetchMore } = useQuery(AllLinksQuery, {
        variables: { first: 1000 },
    });

    return (
        <div>
            {loading ? (
                <span>Loading</span>
            ) : (
                <span>{data.pokemons[0].name}</span>
            )}
        </div>
    );
}

export default Home;
