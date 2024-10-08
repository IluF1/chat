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
}

const initialState: IInitialState = {
    user: {
        name: '',
        login: '',
        password: ''
    }
}

export const registrationApi = createAsyncThunk(
    'registration',
    async (user: IUser) => {
        try {
            const response = await instance.post('/registration', {
                name: user.name,
                login: user.login,
                password: user.password
            })

            return response.data
        } catch (err) {
            console.log(err)
        }
    }
)

const RegistrationSlice = createSlice({
    name: 'registrationSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            registrationApi.fulfilled,
            (state, action: PayloadAction<IUser>) => {
                state.user = action.payload
            }
        )
    }
})

export const RegistrationSliceReducers = RegistrationSlice.reducer
