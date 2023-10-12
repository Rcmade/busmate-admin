"use client";
import {
  deleteContributorRoute,
  deleteRealTimeLocationRoute,
} from "@/app/api/auth/api";
import EditIcon from "../icons/EditIcon";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import ModalWraper from "./ModalWraper";
import LoadingButton from "../Buttons/LoadingButton";
import LableSelectInput from "../Inputs/LableSelectInput";

const REALTIME = "REALTIME";
const CONTRIBUTOR = "CONTRIBUTOR";

interface InputStateInterFace {
  type: string;
  busNumber: number;
}
const EditDbModal = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [inputState, setInputState] = useState<InputStateInterFace>({
    type: REALTIME,
    busNumber: 0,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const arrOfBus = Array.from({ length: 21 }, (_, i) => i + 1);

  const handleModal = () => {
    setShowModal((pre) => !pre);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let data;
    try {
      setIsLoading(true);
      if (inputState.type === REALTIME) {
        data = await deleteRealTimeLocationRoute(inputState.busNumber);
      } else if (inputState.type === CONTRIBUTOR) {
        data = await deleteContributorRoute(inputState.busNumber);
      }
      if (data && data.message) {
        return toast.success(data.message);
        handleModal();
      } else if (data && data.error) {
        return toast.error(data.error);
      }
    } catch (error: unknown) {
      toast.error((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <span className="text-2xl cursor-pointer p-1 " onClick={handleModal}>
        <EditIcon />
      </span>
      <ModalWraper
        showModal={showModal}
        onHide={handleModal}
        title={" Remove Wrong Entry In Db"}
      >
        <form onSubmit={handleSubmit} className="space-y-6" action="#">
          <div>
            <LableSelectInput
              id="dbSelection"
              lable="Select Database Name"
              onChange={(e) =>
                setInputState((pre) => ({
                  ...pre,
                  type: e.target.value,
                }))
              }
              defaultValue={REALTIME}
            >
              <option value={REALTIME}>REALTIME</option>
              <option value={CONTRIBUTOR}>CONTRIBUTOR</option>
            </LableSelectInput>
          </div>
          <div>
            <LableSelectInput
              id="busNumber"
              lable="Select BusNumber To Remove Data From DataBase"
              onChange={(e) =>
                setInputState(() => ({
                  type: REALTIME,
                  busNumber: +e.target.value,
                }))
              }
              required
            >
              <option value="">Select BusNumber</option>
              {arrOfBus.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </LableSelectInput>
          </div>
          <LoadingButton isLoading={isLoading} title="Delete" type="sumbit" />
        </form>
      </ModalWraper>
    </>
  );
};

export default EditDbModal;
