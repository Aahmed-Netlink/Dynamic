import { createSlice, configureStore } from '@reduxjs/toolkit';
import { useState } from 'react';


const initialForms = {
    forms: [],
    updatedForms : []
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
            console.log("Edit -->", action.payload);
            const { id, droppable } = action.payload;

            const formIndex = state.forms.findIndex((form) => form.id == id);
            
            state.updatedForms = action.payload
            
            console.log("Index Of Form -->", formIndex);
            
            console.log("Updated form --> " ,state.updatedForms);
            if (formIndex !== -1) {
                state.forms[formIndex] = { ...action.payload};
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