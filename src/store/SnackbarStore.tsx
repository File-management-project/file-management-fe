import { create } from "zustand";

export enum SnackbarTypes {
  success,
  error,
}

type State = {
  isShowing: boolean;
  message: string;
  title: string;
  type: SnackbarTypes;
  isLastMessage: boolean;
};

type Actions = {
  close: () => void;
  show: (
    type: SnackbarTypes,
    title: string,
    message: string,
    isLastMessage: boolean
  ) => void;
  error: (title: string, message: string, isLastMessage?: boolean) => void;
  success: (title: string, message: string, isLastMessage?: boolean) => void;
};

const defaultState: State = {
  isShowing: false,
  message: "Message",
  title: "Title",
  type: SnackbarTypes.success,
  isLastMessage: false,
};

export const useSnackbarStore = create<State & Actions>((set, get) => ({
  ...defaultState,
  close: () =>
    set(() => ({
      isShowing: false,
    })),
  show: (type, title, message, isLastMessage = false) =>
    set({
      isShowing: true,
      type,
      title,
      message,
      isLastMessage,
    }),
  error: (title, message, isLastMessage = false) => {
    get().show(SnackbarTypes.error, title, message, isLastMessage);
  },
  success: (title, message, isLastMessage = false) => {
    get().show(SnackbarTypes.success, title, message, isLastMessage);
  },
}));
