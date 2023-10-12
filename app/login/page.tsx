"use client";
import GoogleButton from "@/components/Buttons/GoogleButton";
import LoadingButton from "@/components/Buttons/LoadingButton";
import LableInput from "@/components/Inputs/LableInput";
import Link from "next/link";
import { FormEvent, MouseEvent, useEffect, useState } from "react";
 import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { userLogin } from "@/lib/actions/authActions";

interface UserInputInterface {
  email: string;
  password?: string;
  type: "oauth" | "manual";
  manual?: boolean;
}

export default function SignupPage() {
  const router = useRouter();
  const { data } = useSession();
  const [userInputState, setUserInputState] = useState<UserInputInterface>({
    email: "",
    type: "manual",
    password: "",
    manual: true,
  });

  useEffect(() => {
    if (document.cookie?.includes("login")) {
      router.push("/dashboard");
    } else if (data?.user?.email) {
      handleSubmit(null, {
        email: data?.user?.email,
        type: "oauth",
        manual: false,
      });
    }
    return () => {};
  }, [data?.user?.email]);

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement> | any,
    googleInput: UserInputInterface | undefined
  ) => {
    try {
      if (event) {
        event.preventDefault();
      }
      let data;
      if (event) {
        data = await userLogin(userInputState);
      } else {
        data = await userLogin(googleInput || userInputState);
      }
      if (data.error) {
        toast.error(data.error);
        if (googleInput?.type === "oauth") {
          await signOut({
            redirect: false,
          });
          return;
        }
      } else if (data?.user.idCard) {
        router.replace("/dashboard");
        toast.success("You have sigin successfully");
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  const handleOnchange = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setUserInputState((pre) => ({
      ...pre,
      [target.name]: target.value,
    }));
  };

  return (
    <div
      id="authentication-modal"
      aria-hidden="true"
      className="flex justify-center items-center w-full p-4 overflow-x-hidden overflow-y-auto h-screen"
    >
      <div className="relative w-full max-w-md max-h-full ">
        <div className="relative bg-white dark:bg-gray-700 shadow-lg rounded-lg border border-blue-100 dark:border-white ">
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              Sign in to Busmate Admin
            </h3>
            <form
              className="space-y-4"
              onSubmit={(e) => handleSubmit(e, undefined)}
            >
              <GoogleButton onClick={() => signIn("google")} />
              <div className="relative flex text-center justify-center items-center ">
                <span className="bg-white relative z-10 px-2 dark:bg-gray-700">
                  Or with email and password
                </span>
                <span className="block w-full absolute border  dark:border-white"></span>
              </div>
              <LableInput
                name="email"
                lable="Email"
                placeholder="Enter Your Email"
                type="email"
                onChange={handleOnchange}
              />
              <LableInput
                name="password"
                lable="Password"
                placeholder="******"
                type="password"
                onChange={handleOnchange}
              />
              <div className="flex justify-between">
                <Link
                  href="/reset-password"
                  className="text-sm text-blue-700 hover:underline dark:text-white-100"
                >
                  Lost Password?
                </Link>
              </div>

              <LoadingButton
                title="Login to your account"
                isLoading={false}
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
