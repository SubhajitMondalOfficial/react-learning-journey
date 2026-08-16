import { configureStore } from '@reduxjs/toolkit'
import searchReducer from '../features/searchSlice'
import collectionReducer from '../features/collectionSlice'

export const Store = configureStore({
    reducer:{
        collection: collectionReducer,
        search: searchReducer,
    }
})