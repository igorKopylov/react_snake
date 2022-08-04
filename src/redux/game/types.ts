export default interface gameSliceState {
    boardSize: number;
    snakeColor: string;
    snakeSpeed: number;
    mod: 'Without walls' | 'Standart' | 'Immortal';
    control: string[];
    foodId: number
}