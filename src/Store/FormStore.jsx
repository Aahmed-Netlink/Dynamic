import { createSlice, configureStore } from '@reduxjs/toolkit';
import { useState } from 'react';


const initialForms = {
    forms: []
};

const formSclice = createSlice({
    name: 'form',
    initialState: initialForms,
    reducers: {
        handleSave(state, action) {
            // console.log(action);
            state.forms.push(action.payload)
        },
        handleDelete(state, action) {
            console.log(action.payload);

            // return state.forms.filter((item) => item.id !== action.payload)
            state.forms = action.payload;
            // console.log(state.forms);
            // state.forms.push(action.payload)
        },
    }
});

const store = configureStore({
    reducer: formSclice.reducer
})

export const formActions = formSclice.actions;

export default store;