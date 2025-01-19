import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    message: []
}

const chatSlice = createSlice({
    name: "livechat",
    initialState,
    reducers:{
        setMsg: (state, action) => {
            if (state.message.length >= 30){
                state.message.shift();
            }
            state.message.push(action.payload)
        },
        clearMsg: (state) => {
            state.message = []
        }
    }
})

export const {setMsg, clearMsg} = chatSlice.actions;
export default chatSlice.reducer;