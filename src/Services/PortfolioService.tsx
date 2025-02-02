import axios from "axios";
import { PortfolioGet, PortfolioPost } from "../Models/Portfolio";
import { handleError } from "../Helpers/ErrorHandler";

const api = "http://localhost:5167/api/portfolio/";

export const portfolioAddAPI = async (symbol: string) => {
  try {
    const data = await axios.post<PortfolioPost>(api + `?symbol=${symbol}`);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const portfolioDeleteAPI = async (symbol: string) => {
  try {
    const data = await axios.delete<PortfolioPost>(api + `?symbol=${symbol}`);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const portfolioGetAPI = async () => {
  try {
    // const data = await axios.get<PortfolioGet[]>(api);
    const data = {
      data: [
        {
          id: 9,
          symbol: "09",
          commonName: "公子小丑",
        },
        {
          id: 10,
          symbol: "10",
          commonName: "透紅小丑",
        },
      ],
    };
    return data;
  } catch (error) {
    handleError(error);
  }
};
