import { getUserFromLS } from '@/shared/utils/getCurrentUserFromLS';
import { getUserEmailFromLS } from '@/shared/utils/getUserEmailFromLS';
import { createSlice } from '@reduxjs/toolkit';
const { refresh, access, user_info } = getUserFromLS();
const { email } = getUserEmailFromLS();

const initialState = {
   refresh,
   access,
   user_info,
   email,
};

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      addCurrentUser: (state, action) => {
         state.refresh = action.payload.refresh;
         state.access = action.payload.access;
         state.user_info = action.payload.user_info;
      },
      addEmail: (state, action) => {
         state.email = action.payload;
      },
      removeEmail: (state) => {
         state.email = null;
      },
      removeUser: (state) => {
         state.refresh = null;
         state.access = null;
         state.user_info = null;
      },
      tokenRefresh: (state, action) => {
         console.log(action.payload);
         const { access, refresh } = action.payload;
         console.log('state.access - ', access);
         console.log('state.refresh - ', refresh);
         state.access = access;
         state.refresh = refresh;
      },
   },
});

export const { addCurrentUser, removeUser, addEmail, removeEmail, tokenRefresh } =
   authSlice.actions;

export default authSlice.reducer;
