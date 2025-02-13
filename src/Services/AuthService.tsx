import axios from "axios";
import { handleError } from "../Helpers/ErrorHandler";
import { UserProfileToken } from "../Models/User";

const api = "http://localhost:5167/api/";

export const loginAPI = async (username: string, password: string) => {
  try {
    // const data = await axios.post<UserProfileToken>(api + "account/login", {
    //   username: username,
    //   password: password,
    // });
    const data = {
      data: {
        userName: "john_doe",
        email: "john.doe@example.com",
        token: "abcdef1234567890",
      },
    };
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const registerAPI = async (
  email: string,
  username: string,
  password: string
) => {
  try {
    // const data = await axios.post<UserProfileToken>(api + "account/register", {
    //   email: email,
    //   username: username,
    //   password: password,
    // });
    const data = {
      data: {
        userName: "john_doe",
        email: "john.doe@example.com",
        token: "abcdef1234567890",
      },
    };
    return data;
  } catch (error) {
    handleError(error);
  }
};
