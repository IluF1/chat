import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { AuthSliceReducers } from '@/pages/Auth/model/api.slice'
import { RegistrationSliceReducers } from '@/pages/Registration/model/Slices/api.slice'

const reducers = combineReducers({
    registration: RegistrationSliceReducers,
    auth: AuthSliceReducers
})

export const Store = configureStore({
    reducer: reducers
})

export type AppStore = typeof Store

export type RootState = ReturnType<AppStore['getState']>

export type AppDispatch = AppStore['dispatch']
