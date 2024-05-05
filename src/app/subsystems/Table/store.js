import { create } from 'zustand';
import mock from './mock';

const cards = create((set) => ({
  cards: mock,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}));

export default cards;
