import { atom } from 'recoil';
import { typingList } from './typingList';

export interface ITypingList {
  category: string;
  contents: string;
}

export const isDarkState = atom({
  key: 'isDark',
  default: true,
});

export const typingListState = atom<ITypingList[]>({
  key: 'typingList',
  default: typingList.sort(() => Math.floor(Math.random() - 0.5)),
});
