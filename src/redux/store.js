import {configureStore, createReducer} from "@reduxjs/toolkit"
const store=configureStore({
    reducer:{
        reducer:createReducer
    },
});
export default store;