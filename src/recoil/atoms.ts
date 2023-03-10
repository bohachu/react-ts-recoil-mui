import { atom } from 'recoil';

export { }

export const userEmailState = atom<string>({
  key: 'userEmailState',
  default: '',
});