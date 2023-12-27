import { create, SetState } from "zustand";
import { devtools } from "zustand/middleware";

interface MyStore {
  loader: boolean;
  isLoggedIn: boolean;
  setLoginStatus: (status: boolean) => void;
}

const store = (set: SetState<MyStore>) => ({
  loader: true,
  isLoggedIn: false,
  setLoginStatus: (status: boolean) =>
    set(
      (state) => ({
        ...state,
        isLoggedIn: status,
        loader: false,
      }),
      false
    ),
});

const useStore = create(devtools(store));

export default useStore;
