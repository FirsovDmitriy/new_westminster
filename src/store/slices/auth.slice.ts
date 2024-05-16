import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "..";
import { User } from "@/types/User";

interface Credentials {
  token: string | null
  data: User | null
}

const credentialsToJSON = localStorage.getItem('credentials')
const credentials: Credentials = credentialsToJSON ? JSON.parse(credentialsToJSON) : null

const initialState: Credentials = {
  token: credentials?.token,
  data: credentials?.data
}

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      localStorage.setItem('credentials', JSON.stringify(payload))
      state.data = payload.data
      state.token = payload.token
    },

    updateCredentials: (state, { payload }) => {
      state.data = { ...state.data, ...payload }
      localStorage.setItem('credentials', JSON.stringify(state))
    },

    loggedOut: state => {
      localStorage.removeItem('credentials')
      state.data = null
      state.token = null
    }
  },

  selectors: {
    getUser: state => state.data
  }
})

export const { setCredentials, loggedOut, updateCredentials } = slice.actions
export default slice.reducer
export const { getUser } = slice.selectors

export const selectCurrentUser = (state: RootState) => state.auth.data
export const selectCurrentToken = (state: RootState) => state.auth.token
