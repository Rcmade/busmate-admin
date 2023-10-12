"use client";
import { MouseEventHandler, ReactNode } from "react";

interface Props {
  showModal: boolean;
  onHide: MouseEventHandler<HTMLButtonElement> | any; // Specify the correct type here
  title: string | ReactNode;
  children: ReactNode;
  index?: string;
}

const ModalWraper = ({
  showModal,
  onHide,
  title,
  children,
  index = "z-50",
}: Props) => {
  return (
    <>
      {showModal && (
        <div
          className={`fixed ${index} top-0 flex justify-center items-center backdrop-blur-sm left-0 right-0  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full cursor-pointer`}
          onClick={onHide}
        >
          <div className="relative cursor-auto w-full max-w-xl max-h-full">
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-lg shadow dark:bg-gray-700"
            >
              <button
                type="button"
                onClick={onHide}
                className="absolute top-3 font-bold right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                X
              </button>
              <div className="px-6 py-6 lg:px-8">
                <div className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                  {title}
                </div>
                {children}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalWraper;
