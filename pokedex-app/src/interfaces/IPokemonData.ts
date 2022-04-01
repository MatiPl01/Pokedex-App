export default interface IPokemonData {
    id: number,
    name: string,
    sprite: string,
    height: number,
    weight: number,
    types: string[],
    abilities: string[],
    stats: {
        hp: number,
        attack: number,
        defense: number,
        special_attack: number,
        special_defense: number,
        speed: number
    }
}
