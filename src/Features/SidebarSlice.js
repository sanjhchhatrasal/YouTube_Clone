import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSidebarOpen: true,
    videos: [],
    category: "All"
}

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers:{
        toggleSidebar: (state, action) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
        setHomeVideo: (state, action) => {
            state.videos = action.payload
        },
        setCategory: (state, action) => {
            state.category = action.payload
        }
    }
})

export const {toggleSidebar, setHomeVideo, setCategory} = sidebarSlice.actions

export default sidebarSlice.reducer