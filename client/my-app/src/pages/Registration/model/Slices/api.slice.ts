import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { instance } from '@/components/Helpers/constants'

interface IUser {
    id?: number
    name: string
    login: string
    password: string
}

interface IInitialState {
    user: IUser
    error: string | null
}

const initialState: IInitialState = {
    user: {
        name: '',
        login: '',
        password: ''
    },
    error: ''
}

export const registrationApi = createAsyncThunk(
    'api/registration',
    async (user: IUser, { rejectWithValue }) => {
        try {
            const response = await instance.post('/registration', {
                name: user.name,
                login: user.login,
                password: user.password
            })
            return response.data
        } catch (err: any) {
            return rejectWithValue(err.response?.data?.message || '  ')
        }
    }
)

const RegistrationSlice = createSlice({
    name: 'registrationSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                registrationApi.fulfilled,
                (state, action: PayloadAction<IUser>) => {
                    state.user = action.payload
                    state.error = null
                }
            )
            .addCase(registrationApi.rejected, (state, action) => {
                state.error = action.payload as string
            })
    }
})

export const RegistrationSliceReducers = RegistrationSlice.reducer
