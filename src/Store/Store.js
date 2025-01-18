import {configureStore} from '@reduxjs/toolkit'
import sidebarReducer from '../Features/SidebarSlice'
import chatReducer from '../Features/LivechatSlice'

export const store = configureStore({
    reducer:{
        sidebar: sidebarReducer,
        livechat: chatReducer
    }
})