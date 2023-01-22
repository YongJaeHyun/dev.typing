import { atom } from 'recoil';
import { typingList } from './assets/typingList';

export interface ITypingList {
  Network: string[];
  Data_Structure: string[];
  Database: string[];
  Design_Pattern: string[];
  Operating_System: string[];
  My_Bookmark?: string[];
}

export const isDarkState = atom({
  key: 'isDark',
  default: true,
});

export const typingListState = atom<ITypingList>({
  key: 'typingList',
  default: typingList,
});
