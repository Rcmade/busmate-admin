"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "@/redux/store";

interface Props {
  children: ReactNode;
}
const AuthSession = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <SessionProvider>{children}</SessionProvider>;
    </Provider>
  );
};

export default AuthSession;
