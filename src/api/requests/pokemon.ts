import api from 'api'

export type PokemonProps = {
    id: number
    name: string
    base_experience: number
    weight: number
    sprites: {
        front_default: string
    }
}

type PokemonByTypeProps = {
    name: string
    url: string
}

type APIPokemonByTypeReturn = {
    pokemon: {
        pokemon: PokemonByTypeProps
    }[]
}

export const getPokemonByType = async (
    type: string
): Promise<APIPokemonByTypeReturn> => {
    const { data } = await api.get(`/type/${type}`)

    return data
}

export const getPokemonByName = async (name: string): Promise<PokemonProps> => {
    const { data } = await api.get(`/pokemon/${name}`)

    return data
}

export const getPokemonByUrl = async (url: string): Promise<PokemonProps> => {
    const { data } = await api.get(url)

    return data
}
