export interface DatabaseInfo {
  dbName: string;
  totalSize: string;
  totalDocuments: number;
  freeStorageSize: string;
}

export interface RemoveWrongDataInfo {
  message?: string;
  error?: string;
}

export interface AppAvailabilityInterface {
  startTime: number;
  endTime: number;
  temprary: boolean;
  manualSigin: boolean;
  _id: string;
  destinationLatitude?: number;
  destinationLongitude?: number;
  updateAt?: string;
  contributor?: string;
  error?: string;
  message?: string;
}

export interface UserInputInterface {
  email: string;
  password?: string;
  type: "oauth" | "manual";
}

export interface UserInterface {
  user: {
    name: string;
    email: string | null;
    password?: string | null;
    role: "student" | "driver" | "admin" | "superAdmin" | null;
    idCard: string | null;
    profileImage?: string | null;
    photo?: string | null;
    idImage?: string | null;
    busNumber: string;
    weight: number;
    isAuthenticated: boolean;
    token?: string | null;
    penalty?: number;
    tasks: string[];
    createdAt?: Date;
    updatedAt?: Date;
  };

  token?: string;
  error?: string;
}

export interface LogutInterface {
  message: string;
}
