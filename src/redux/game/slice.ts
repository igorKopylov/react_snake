import { createSlice } from "@reduxjs/toolkit";
import gameSliceState from "./types";


const initialState: gameSliceState = {
    boardSize: 17,
    snakeSpeed: 170,
    snakeColor: '#0ba222',
    mod: 'Standart',
    control: ['ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
    foodId: 0
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setBoardSize(state, action) {
            state.boardSize = action.payload
        },
        setSnakeSpeed(state, action) {
            state.snakeSpeed = action.payload
            console.log(action)
        },
        setSnakeColor(state, action) {
            state.snakeColor = action.payload
        },
        setMod(state, action) {
            state.mod = action.payload
        },
        setControl(state, action) {
            state.control = action.payload
        },
        setFoodImage(state, action) {
            state.foodId = action.payload
        }
    }
})

export const { setBoardSize, setSnakeColor, setSnakeSpeed, setMod, setControl, setFoodImage } = gameSlice.actions

export default gameSlice.reducer