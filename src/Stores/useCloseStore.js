import { create } from "zustand";
const useCloseStore = create((set) => ({
  close: true,
  changeClose: () => set((state) => ({ close: !state.close })),
}));

export default useCloseStore;
