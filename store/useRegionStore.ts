// store/useRegionStore.ts
import { create } from 'zustand';

interface RegionState {
  region: string;
  setRegion: (region: string) => void;
}

export const useRegionStore = create<RegionState>((set) => ({
  region: "us", // Default region
  setRegion: (region: string) => set({ region }), // Method to update region
}));










