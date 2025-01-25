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
          id: 1,
          symbol: "AAPL",
          companyName: "Apple Inc.",
          purchase: 150.5,
          lastDiv: 0.88,
          industry: "Technology",
          marketCap: 2600000000000,
          comments: "Long-term hold for growth and innovation.",
        },
        {
          id: 2,
          symbol: "TSLA",
          companyName: "Tesla Inc.",
          purchase: 720.0,
          lastDiv: 0,
          industry: "Automotive",
          marketCap: 800000000000,
          comments: "High volatility, but strong potential for EV dominance.",
        },
      ],
    };
    return data;
  } catch (error) {
    handleError(error);
  }
};
