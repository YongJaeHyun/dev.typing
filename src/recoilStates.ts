import { atom } from 'recoil';
import { ITypingList, typingList } from '../assets/typingList';

export const isDarkState = atom({
  key: 'isDark',
  default: true,
});

export const typingListState = atom<ITypingList>({
  key: 'typingList',
  default: typingList,
});
