import { createSlice } from '@reduxjs/toolkit';

export const controledSidebar = createSlice({
    name: 'controled',
    initialState: {
        isActive: false,
    },
    reducers: {
        changedSidebar: (state) => {
            state.isActive = !state.isActive
        }
    }
});

export const { changedSidebar } = controledSidebar.actions;

export default controledSidebar.reducer;
