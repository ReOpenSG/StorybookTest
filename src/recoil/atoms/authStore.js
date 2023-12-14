import { atom } from 'recoil';

const authState = atom({
  key: 'authState',
  default: null,
  dangerouslyAllowMutability: true,
});

export const isLoggedInState = atom({
  key: 'isLoggedInState',
  default: false,
});

export default authState;
