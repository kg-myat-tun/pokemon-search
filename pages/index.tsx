// /pages/index.tsx
import Head from "next/head";
import { gql, useQuery, useMutation } from "@apollo/client";
import { AwesomeLink } from "../components/AwesomeLink";
import type { Link as Node } from "@prisma/client";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

const AllLinksQuery = gql`
  query pokemons($first: Int!){
    pokemons(first: $first){
      id
      number
      name
      weight{
        minimum
        maximum
      }
      height{
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
  const { user } = useUser()
  const { data, loading, error, fetchMore } = useQuery(AllLinksQuery, {
    variables: { first: 3 },
  });

  console.log({data})

  
  return (
    <div>
     
    </div>
  );
}

export default Home;
