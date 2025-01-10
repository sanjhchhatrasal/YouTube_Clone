import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSidebarOpen: true
}

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers:{
        toggleSidebar: (state, action) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        }
    }
})

export const {toggleSidebar} = sidebarSlice.actions

export default sidebarSlice.reducer