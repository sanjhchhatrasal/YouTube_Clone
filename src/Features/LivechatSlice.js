import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    message: []
}

const chatSlice = createSlice({
    name: "livechat",
    initialState,
    reducers:{
        setMsg: (state, action) => {
            state.message.splice(10, 1)
            state.message.push(action.payload)
        },
        clearMsg: (state) => {
            state.message = []
        }
    }
})

export const {setMsg, clearMsg} = chatSlice.actions;
export default chatSlice.reducer;