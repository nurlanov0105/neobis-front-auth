import { TokensType } from '../types/types';
import { getUserFromLS } from './getCurrentUserFromLS';

export const updateUserInLS = (tokens: TokensType) => {
   const { access, refresh } = tokens;
   const userData = getUserFromLS();
   const updatedUserData = {
      ...userData,
      access: access,
      refresh: refresh,
   };

   localStorage.setItem('currentUser', JSON.stringify(updatedUserData));
};
