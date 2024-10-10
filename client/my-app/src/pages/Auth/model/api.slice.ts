import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as cookie from 'cookie'

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
    error: null
}

export const authApi = createAsyncThunk(
    'api/auth',
    async (user: IUser, { rejectWithValue }) => {
        try {
            const response = await instance.post('/auth', {
                login: user.login,
                password: user.password
            })

            localStorage.setItem('accessToken', response.data.accessToken)

            return response.data
        } catch (err: any) {
            return rejectWithValue(err?.response?.data?.message || '')
        }
    }
)

const AuthSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(authApi.fulfilled, (state, action) => {
            state.user = action.payload.find
            state.error = null
        })
        builder.addCase(authApi.rejected, (state, action) => {
            state.error = action.payload as string
        })
    }
})

export const AuthSliceReducers = AuthSlice.reducer
