import { create } from 'zustand';

export type FilterOption = 'all' | 'bacteria' | 'fungi';
export type SortOrder = 'asc' | 'desc';

interface GlobalState {
  filterOption: FilterOption;
  setFilterOption: (option: FilterOption) => void;
  sortOrder: SortOrder;
  setSortOrder: (order: SortOrder) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export const useGlobalStore = create<GlobalState>((set) => ({
  filterOption: 'all',
  setFilterOption: (option) => set({ filterOption: option, currentPage: 1 }),
  sortOrder: 'desc',
  setSortOrder: (order) => set({ sortOrder: order, currentPage: 1 }),
  currentPage: 1,
  setCurrentPage: (page) => set({ currentPage: page }),
}));
