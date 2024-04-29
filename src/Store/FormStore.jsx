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
            state.forms.push(action.payload)
        },
        handleDelete(state, action) {
            console.log(action.payload);
            state.forms = action.payload;
        },
        handleEdit(state, action) {
            const { id, updatedForm } = action.payload;
            console.log(id);
            const formIndex = state.forms.findIndex((form) => form.id == id);

            if (formIndex !== -1) {
                state.forms[formIndex] = { ...state.forms[formIndex], ...updatedForm };
            } else {
                console.error("Form with ID", id, "not found for editing.");
            }
        },
    }
});

const store = configureStore({
    reducer: formSclice.reducer
})

export const formActions = formSclice.actions;

export default store;