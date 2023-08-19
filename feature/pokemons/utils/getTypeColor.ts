import PokemonTypeColors from '../constants/pokemonTypesColor';

const getTypeColor = (type: string) => {
    let color: string | null = null;

    for (const key in PokemonTypeColors) {
        if (PokemonTypeColors.hasOwnProperty(key)) {
            if (key === type.toLowerCase()) {
                color = PokemonTypeColors[key];
            }
        }
    }

    return color;
};

export default getTypeColor;
