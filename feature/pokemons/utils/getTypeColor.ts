import PokemonTypeColors from '../constants/pokemonTypesColor';

const getTypeColor = (type: string): { color: string; bgColor: string } => {
    let color: string = '';
    let bgColor: string = '';

    for (const key in PokemonTypeColors) {
        if (PokemonTypeColors.hasOwnProperty(key)) {
            if (key === type.toLowerCase()) {
                color = PokemonTypeColors[key].color;
                bgColor = PokemonTypeColors[key].bgColor;
            }
        }
    }
    return { color, bgColor };
};

export default getTypeColor;
