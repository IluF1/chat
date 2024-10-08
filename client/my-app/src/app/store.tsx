import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { RegistrationSliceReducers } from '@/pages/Registration/model/api.slice'

const reducers = combineReducers({
    registration: RegistrationSliceReducers
})

export const Store = configureStore({
    reducer: reducers
})

export type AppStore = typeof Store

export type RootState = ReturnType<AppStore['getState']>

export type AppDispatch = AppStore['dispatch']
