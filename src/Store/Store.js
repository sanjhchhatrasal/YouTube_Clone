import {configureStore} from '@reduxjs/toolkit'
import sidebarReducer from '../Features/SidebarSlice'

export const store = configureStore({
    reducer:{
        sidebar: sidebarReducer
    }
})