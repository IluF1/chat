import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { instance } from '@/components/Helpers/constants'

interface IUser {
    id?: number
    login: string
    password: string
}

interface IInitialState {
    user: IUser
    error: string | null
}

const initialState: IInitialState = {
    user: {
        login: '',
        password: ''
    },
    error: ''
}

export const authApi = createAsyncThunk('api/auth', async (user: IUser) => {
    try {
        const response = await instance.post('/auth', {
            login: user.login,
            password: user.password
        })

        return response.data
    } catch (err) {
        console.log(err)
    }
})

const AuthSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(authApi.fulfilled, (state, action) => {
            state.user = action.payload
            state.error = null
        })
        builder.addCase(authApi.rejected, (state, action) => {
            state.error = action.payload as string
        })
    }
})

export const AuthSliceReducers = AuthSlice.reducer
