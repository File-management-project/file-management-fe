import { create } from "zustand";
export const STEP_MAX = 26;
export const STEP_MIN = 1;
export const STEPS_INFO_DEFAULT = [
  {
    id: 1,
    title: "Dashboard",
    stepFinished: false,
    stepLocker: false,
    stepForm: false,
  },
  {
    id: 2,
    title: "Collect Profile",
    stepFinished: false,
    stepLocker: false,
    stepForm: false,
  },
  {
    id: 3,
    title: "Physical Warehouse",
    stepFinished: false,
    stepLocker: false,
    stepForm: false,
  },
  {
    id: 4,
    title: "Digital Data Warehouse",
    stepFinished: false,
    stepLocker: false,
    stepForm: false,
  },
  {
    id: 5,
    title: "Time of accident",
    stepFinished: false,
    stepForm: true,
  },
  {
    id: 6,
    title: "Location of accident",
    stepFinished: false,
  },
  {
    id: 7,
    title: "Road condition",
    stepFinished: false,
  },
  {
    id: 8,
    title: "Collision type",
    stepFinished: false,
  },
  {
    id: 9,
    title: "Situation assessment",
    stepFinished: false,
    stepForm: true,
  },
  {
    id: 10,
    title: "Pedestrian Information",
    stepFinished: false,
    stepForm: true,
  },
  {
    id: 11,
    title: "Own vehicle damage",
    stepFinished: false,
    stepForm: true,
  },
  {
    id: 12,
    title: "Implicated damage",
    stepFinished: false,
    stepForm: true,
  },
  {
    id: 13,
    title: "Damaged stationary object",
    stepFinished: false,
    stepForm: true,
  },
  {
    id: 14,
    title: "Witness",
    stepFinished: false,
    stepForm: true,
  },
  {
    id: 15,
    title: "Police Information",
    stepFinished: false,
    stepForm: true,
  },
  {
    id: 16,
    title: "Drivability of Vehicle",
    stepFinished: false,
  },
  {
    id: 17,
    title: "Workshop",
    stepFinished: false,
  },
  {
    id: 18,
    title: "Checkpoint",
    stepFinished: false,
  },
  {
    id: 19,
    title: "Dashcam",
    stepFinished: false,
  },
  {
    id: 20,
    title: "Accident detail",
    stepFinished: false,
  },
  {
    id: 21,
    title: "Own passenger detail",
    stepFinished: false,
    stepForm: true,
  },
  {
    id: 22,
    title: "Policyholder information",
    stepFinished: false,
    stepForm: true,
  },
  {
    id: 23,
    title: "Driver information",
    stepFinished: false,
    stepForm: true,
  },
  {
    id: 24,
    title: "Vehicle detail",
    stepFinished: false,
    stepForm: true,
  },
  {
    id: 25,
    title: "Insurance declaration ",
    stepFinished: false,
  },
  {
    id: 26,
    title: "Submit",
    stepFinished: false,
  },
];
type State = {
  /**
   * The loader is shown if `show()` has been called more times than `hide()` \
   * I.e. it will stop showing once `hide()` has been called as many times as `show()` (once all loading operations are complete)
   */
  isShowingPanel: boolean;
  isReportSubmitSuccess: boolean;
  currentReport: Report;
  content: string;
  currentStep: number;
  STEPS: Array<any>;
};

type Actions = {
  showPanel: (content?: string) => void;
  hidePanel: () => void;
  setCurrentStep: (index: number) => void;
  setSubmitSuccess: (bool: boolean) => void;
  setSteps: (newArray: Array<any>) => void;
};
const defaultStates: State = {
  STEPS: [],
  isShowingPanel: false,
  isReportSubmitSuccess: false,
  currentStep: 1,
  content: "",
  currentReport: {} as Report,
};
export const useFileManagementStore = create<State & Actions>((set) => ({
  ...defaultStates,
  showPanel: (content = "") =>
    set(() => ({
      content,
      isShowingPanel: true,
    })),
  setSteps: (newSteps: Array<any>) =>
    set(() => ({
      STEPS: newSteps,
    })),
  setCurrentStep: (index: number) =>
    set(() => ({
      currentStep: index,
    })),
  setSubmitSuccess: (bool: boolean) =>
    set(() => ({
      isReportSubmitSuccess: bool,
    })),
  hidePanel: () =>
    set((state) => ({
      isShowingPanel: state.isShowingPanel,
    })),
}));
