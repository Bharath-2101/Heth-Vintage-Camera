import { create } from "zustand";

const useRefStore = create((set, get) => ({
  refs: {},
  setRef: (key, ref) =>
    set((state) => ({
      refs: { ...state.refs, [key]: ref },
    })),
  getRef: (key) => get().refs[key],
}));

export default useRefStore;
