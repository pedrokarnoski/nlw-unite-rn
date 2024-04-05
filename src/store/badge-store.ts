import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type BadgeStoreProps = {
  id: string;
  name: string;
  email: string;
  eventTitle: string;
  checkInURL: string;
  image?: string;
};

type StateProps = {
  data: BadgeStoreProps | null;
  save: (badge: BadgeStoreProps) => void;
  remove: () => void;
  updateAvatar: (uri: string) => void;
};

export const useBadgeStore = create(
  persist<StateProps>(
    (set) => ({
      data: null,
      
      save: (data: BadgeStoreProps) => set(() => ({ data })),
      remove: () => set(() => ({ data: null })),
      updateAvatar: (uri: string) =>
        set((prevState) => ({
          data: prevState.data
            ? { ...prevState.data, image: uri }
            : prevState.data,
        })),
    }),
    {
      name: "nlw-unite:badge",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
