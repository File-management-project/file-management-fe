import { useFileManagementStore } from "@/store/FileManagementStore";
import classNames from "classnames";
import { LockKeyhole } from "lucide-react";
import React from "react";

export default function Step() {
  const [steps, currentStep, setCurrentStep] = useFileManagementStore(
    (state) => [state.STEPS, state.currentStep, state.setCurrentStep]
  );
  const handleClickStep = (stepIndex: any) => {
    setCurrentStep(stepIndex);
  };
  return (
    <>
      <ul className="steps steps-vertical w-full">
        {steps.map((step, index) => {
          return (
            <li
              data-content={
                step.stepFinished
                  ? "✓"
                  : !step.stepFinished && currentStep > step.id && step.stepForm
                  ? "!"
                  : index + 1
              }
              className={classNames(
                "step",
                step.stepFinished && "step-primary",
                !step.stepFinished &&
                  currentStep > step.id &&
                  step.stepForm &&
                  "step-warning"
              )}
              key={index}
            >
              <div
                className={classNames(
                  "flex items-center w-full justify-between cursor-pointer",
                  currentStep === step.id && "bg-lightBlue-100 rounded-md p-2"
                )}
                onClick={() => handleClickStep(step.id)}
              >
                <div>{step.title}</div>
                {/* {step.stepLocker && <LockKeyhole height={16} width={16}></LockKeyhole>} */}
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
