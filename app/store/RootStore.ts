import { create } from "zustand"
import { useShallow } from "zustand/react/shallow"
import { persist, createJSONStorage } from "zustand/middleware"
import AsyncStorage from "@react-native-async-storage/async-storage";


export interface RootStore {
    _hasHydrated: boolean,
    setHasHydrated: (state: boolean) => void;
}

export const useStore = create<RootStore>()(
    persist(
      (...a) => ({
        // STATE SLICES //
        // Add here
        
        _hasHydrated: false,
        setHasHydrated: (state) => {
          const set = a[0];
          set({
            _hasHydrated: state,
          });
        },
      }),
      {
        name: "zustand-app",
        storage: createJSONStorage(() => AsyncStorage),
        onRehydrateStorage: () => (state) => {
          state?.setHasHydrated(true);
        },
      }
    )
  );

