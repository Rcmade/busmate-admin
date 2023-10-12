"use server";
import {
  AppAvailabilityInterface,
  DatabaseInfo,
  LogutInterface,
  RemoveWrongDataInfo,
  UserInputInterface,
  UserInterface,
} from "@/Interfaces";
import axios, { AxiosResponse } from "axios";
import { cookies } from "next/headers";

const api = axios.create({
  baseURL: process.env.NODEJS_API_URL,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    Cookie: cookies()
      .getAll()
      .reduce((acc, cookie) => {
        if (acc.length > 0) {
          acc += "; ";
        }
        acc += `${cookie.name}=${cookie.value}`;
        return acc;
      }, ""),
  },
});

api.interceptors.request.use((config) => {
  if (config.url === "/signup" || config.url === "/admin/user-create") {
    config.headers["Content-Type"] = "multipart/form-data";
  }
  return config;
});

// App routes
// export const addNewLocation = async (location) =>
//   api.post("/addnewlocation", location);
// export const asignContributor = async (data) =>
//   api.post("/asignContributor", data);

// // User Route
// export const getLocation = async (location) => api.get("/get", location);
// export const sendOtp = async (data) => api.post("/otp-send", data);
// export const varifyOtp = async (data) => api.post("/otp-varify", data);
// export const signUpRoute = async (data) => api.post("/signup", data);

// export const loginRoute = async (data) => api.post("/login", data);

export const loginRoute = async (
  userInputData: UserInputInterface
): Promise<UserInterface> => {
  try {
    const { data } = await api.post("/login", userInputData);
    return data;
  } catch (error) {
    throw error;
  }
};

export const userInitialRoute = async (): Promise<UserInterface> => {
  const { data } = await api.get("/user-initial");
  return data;
};

export const logout = async (): Promise<LogutInterface> => {
  const { data } = await api.get("/logout");
  return data;
};

// export const updateUser = async (data) => api.post("/user-update", data);
// export const forgotPassword = async (data) =>
//   api.post("/forgot-password", data);
// export const getNewLocationRoute = async (data) =>
//   api.get(`/admin/all-bus-data`, {
//     params: data,
//   });

// // Admin routes /
// export const allUsersView = async (data) =>
//   api.get(`/admin/user-all-user-view`, {
//     params: { data },
//   });

// export const allUserSearch = async (data) =>
//   api.get(`/admin/user-search`, {
//     params: { data },
//   });

// export const updatedUser = async (data) => api.post("/admin/user-varify", data);

// export const userNotAuthenticated = async (data) =>
//   api.post("/admin/user-not-varify", data);

// export const createUser = async (data) => api.post("/admin/user-create", data);
// export const currentContributorApi = async (data) =>
//   api.get("/admin/current-contributors", data);

export const deleteRealTimeLocationRoute = async (
  inputData: number
): Promise<RemoveWrongDataInfo> => {
  try {
    const { data } = await api.get(`/admin/remove-realtime-location`, {
      params: { busNumber: inputData },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteContributorRoute = async (
  inputData: number
): Promise<RemoveWrongDataInfo> => {
  const { data } = await api.get("/admin/remove-contributor", {
    params: { busNumber: inputData },
  });
  return data;
};
// export const deleteContributorRoute = async (data) =>
// api.get(`/admin/remove-contributor`, {
//   params: { busNumber: data },
// });

export const getAppAvailabilityRoute =
  async (): Promise<AppAvailabilityInterface> => {
    try {
      const response: AxiosResponse<AppAvailabilityInterface> = await api.get(
        "/get-available-services"
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };
// export const setAppAvailablityRoute = async (data) =>
//   api.post(`/set-available-services`, data);

export const dashBoardStatsRoute = async (): Promise<DatabaseInfo[]> => {
  const { data } = await api.get(`/admin/db-status`, { withCredentials: true });
  return data;
};

// export const getAppUpdate = async (data) => api.get(`/get-app-update`);

// export const setAppUpdate = async (data) => api.post(`/set-app-update`, data);

// export default api;
