"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import LoadingButton from "../Buttons/LoadingButton";
import LableInput from "../Inputs/LableInput";
import LableSelectInput from "../Inputs/LableSelectInput";
import { AppAvailabilityInterface } from "@/Interfaces";

interface CommontProps {
  data: AppAvailabilityInterface;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const AppAvailavlityForm = <T extends {}>({ data }: CommontProps & T) => {
  const [inputState, setInputState] = useState<AppAvailabilityInterface>({
    _id: data._id,
    endTime: data.endTime,
    manualSigin: data.manualSigin,
    startTime: data.startTime,
    temprary: data.temprary,
    updateAt: data.updateAt,
  });
  
  const handleOnChange = (event: FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    console.log(target);
    setInputState((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  return (
    <form className="w-full space-y-8 ">
      <LableInput
        lable="Start Time"
        name="startTime"
        placeholder="Enter Start Time"
        type="time"
        onChange={handleOnChange}
        value={inputState.startTime}
      />
      <LableInput
        lable="End Time"
        name="endTime"
        placeholder="Enter Start Time"
        type="time"
        onChange={handleOnChange}
        value={inputState.endTime}
      />

      <LableSelectInput
        defaultValue={inputState.temprary}
        id="temprary"
        lable="Temprary Signup Service"
      >
        <option value="true">Not Available</option>
        <option value="false">Available</option>
      </LableSelectInput>

      <LableSelectInput
        defaultValue={inputState.manualSigin}
        id="menualSignup"
        lable="Manual Signin Service"
      >
        <option value="true">Enable</option>
        <option value="false">Disable</option>
      </LableSelectInput>
      <LoadingButton isLoading={false} title={"Update"} type="submit" />
    </form>
  );
};

export default AppAvailavlityForm;
