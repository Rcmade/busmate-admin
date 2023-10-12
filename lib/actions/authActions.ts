"use server";

import {
  LogutInterface,
  UserInputInterface,
  UserInterface,
} from "@/Interfaces";
import { loginRoute, logout } from "@/app/api/auth/api";
import { cookies } from "next/headers";
import { userInitialRoute } from "../../app/api/auth/api";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";

// handleing server side user information
export const userLogin = async (
  userInput: UserInputInterface
): Promise<UserInterface> => {
  const data = await loginRoute(userInput);
  if (data.token) {
    cookies().set("login", data.token);
  }
  return data;
};

export const userInitialData = async (): Promise<boolean> => {
  const data = await userInitialRoute();
  if (data.token && data.user) {
    cookies().set("login", data.token);
    return true;
  } else {
    cookies().delete("login");
    redirect("/login");
  }
};

export const getUser = async (): Promise<UserInterface> => {
  const token = cookies().get("login")?.value;
  if (!token) {
    return redirect("/login");
  }
  const decode = jwt.verify(
    String(token),
    String(process.env.JWT_SECRET)
  ) as UserInterface;

  // console.log({ decode });

  return decode;
};

export const userLogoutAction = async (): Promise<LogutInterface> => {
  const data = await logout();
  if (data) {
    cookies().delete("login");
    redirect("/login");
  }
  return data;
};
