import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../Features/Todo/todoSlide'

export const store = configureStore({
    reducer: todoReducer
})