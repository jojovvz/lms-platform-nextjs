import { create } from 'zustand';

interface TabStore {
    mainTab: "explore" | "my+courses" | "assignments" | "certificates" | "discussions" | "profile" | "create";
    subTab: string | null;
    setMainTab: (mainTab: TabStore["mainTab"]) => void;
    setSubTab: (subTab: string | null) => void;
}

const useTabStore = create<TabStore>((set) => ({
    mainTab: "explore",
    subTab: null,
    setMainTab: (mainTab) => set({ mainTab, subTab: null }), 
    setSubTab: (subTab) => set({ subTab }),
}));

export default useTabStore;
