import axios from "axios";
import {
  FishCareSheet,
  FishGuideTable,
  CompanyCompData,
  FishProfile,
  FishSearch,
  CompanyTenK,
} from "./fish";

export interface SearchResponse {
  data: FishSearch[];
}

export const searchFishes = async (query: string) => {
  try {
    // const data = await axios.get<SearchResponse>(
    //   `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${process.env.REACT_APP_API_KEY}`
    // );
    const data = {
      data: [
        {
          scientificName: "amphiprion-percula",
          category: "雀鯛",
          commonName: "公子小丑",
        },
        {
          scientificName: "amphiprion-frenatus",
          category: "雀鯛",
          commonName: "透紅小丑",
        },
      ],
    };
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An expected error has occured.";
    }
  }
};

export const getCompanyProfile = async (query: string) => {
  try {
    // const data = await axios.get<CompanyProfile[]>(
    //   `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${process.env.REACT_APP_API_KEY}`
    // );
    const data = {
      data: [
        {
          scientificName: "amphiprion-percula",
          category: "雀鯛",
          commonName: "公子小丑",
          description:
            "主要棲息於潟湖及珊瑚礁區，棲息深度可達約15公尺。和海葵具共生之行為，喜歡共生的海葵有 Stoichactis kenti 等，體表之黏液可保護自己不被海葵傷害。行群聚生活，雌、雄魚均具有護巢護卵之行為，通常由一隻體型最大之雌魚帶領一隻體型第二大且具生殖能力之雄魚，其它成員包括無生殖能力之其它中成魚和一群稚魚。當最大雌魚失去後，則依雄性之順位變性成雌魚而遞補。以藻類、魚卵和浮游生物為食。",
          size: "7-10公分",
          lifespan: "6~10年",
        },
      ],
    };
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};

export const getBalanceSheet = async (query: string) => {
  try {
    // const data = await axios.get<FishCareSheet[]>(
    //   `https://financialmodelingprep.com/api/v3/balance-sheet-statement/${query}?limit=20&apikey=${process.env.REACT_APP_API_KEY}`
    // );
    const data = {
      data: [
        {
          scientificName: "amphiprion-percula",
          ph: "7.8~8.4",
          salinity: "1.020~1.026",
          temperature: "24°C~28°C",
          ammonia: "0 ppm",
          nitrite: "0 ppm",
          nitrate: "低於20 ppm",
          hardness: "8-12 dKH",
          tankSize: "至少50公升",
          diet: "雜食性（多樣化食物，包括小顆粒飼料、冷凍海洋食物等）",
          compatibility: "與溫和性魚類兼容，避免與攻擊性強的魚類同箱飼養",
        },
      ],
    };
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};

export const getGuideTable = async (query: string) => {
  try {
    // const data = await axios.get<FishGuide[]>(
    //   `https://financialmodelingprep.com/api/v3/cash-flow-statement/${query}?limit=100&apikey=${process.env.REACT_APP_API_KEY}`
    // );
    const data = {
      data: [
        {
          category: "龍",
          commonName: "黃龍",
          scientificName: "scleropages-formosus",
          size: "15-25公分",
          lifespan: "10~15年",
        },
        {
          category: "龍",
          commonName: "三色龍",
          scientificName: "scleropages-sp",
          size: "12-20公分",
          lifespan: "8~12年",
        },
        {
          category: "神仙",
          commonName: "花臉神仙",
          scientificName: "pterophyllum-scalare",
          size: "10-18公分",
          lifespan: "7~12年",
        },
        {
          category: "神仙",
          commonName: "馬鞍神仙",
          scientificName: "pterophyllum-altum",
          size: "12-22公分",
          lifespan: "8~15年",
        },
        {
          category: "倒吊",
          commonName: "黑三角倒吊",
          scientificName: "zebrasoma-rostratum",
          size: "14-24公分",
          lifespan: "10~15年",
        },
        {
          category: "倒吊",
          commonName: "黃倒吊",
          scientificName: "zebrasoma-flavescens",
          size: "13-20公分",
          lifespan: "7~12年",
        },
        {
          category: "狐狸",
          commonName: "黃狐狸",
          scientificName: "siganus-vulpinus",
          size: "15-25公分",
          lifespan: "8~12年",
        },
        {
          category: "蝦虎",
          commonName: "雷達蝦虎",
          scientificName: "cryptocentrus-cinctus",
          size: "8-12公分",
          lifespan: "5~8年",
        },
        {
          category: "雀鯛",
          commonName: "公子小丑",
          scientificName: "amphiprion-percula",
          size: "7-10公分",
          lifespan: "6~10年",
        },
        {
          category: "雀鯛",
          commonName: "透紅小丑",
          scientificName: "amphiprion-frenatus",
          size: "6-10公分",
          lifespan: "6~10年",
        },
        {
          category: "其他",
          commonName: "大力水手",
          scientificName: "epinephelus-lanceolatus",
          size: "20-30公分",
          lifespan: "10~15年",
        },
      ],
    };
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};

export const getCompData = async (query: string) => {
  try {
    // const data = await axios.get<CompanyCompData[]>(
    //   `https://financialmodelingprep.com/api/v4/stock_peers?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY}`
    // );
    const data = {
      data: [
        {
          symbol: "AAPL",
          peersList: ["MSFT", "GOOGL", "AMZN", "META", "NFLX"],
        },
        {
          symbol: "TSLA",
          peersList: ["F", "GM", "RIVN", "LCID", "NIO"],
        },
      ],
    };
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};

export const getTenK = async (query: string) => {
  try {
    // const data = await axios.get<CompanyTenK[]>(
    //   `https://financialmodelingprep.com/api/v3/sec_filings/${query}?type=10-K&page=0&apikey=${process.env.REACT_APP_API_KEY}`
    // );
    const data = {
      data: [
        {
          symbol: "AAPL",
          fillingDate: "2023-10-30",
          acceptedDate: "2023-10-29",
          cik: "0000320193",
          type: "10-K",
          link: "https://www.sec.gov/Archives/edgar/data/320193/000032019324000010/index.html",
          finalLink:
            "https://www.sec.gov/Archives/edgar/data/320193/000032019324000010/10-k.html",
        },
        {
          symbol: "TSLA",
          fillingDate: "2023-12-31",
          acceptedDate: "2023-12-30",
          cik: "0001318605",
          type: "10-K",
          link: "https://www.sec.gov/Archives/edgar/data/1318605/000131860524000012/index.html",
          finalLink:
            "https://www.sec.gov/Archives/edgar/data/1318605/000131860524000012/10-k.html",
        },
      ],
    };
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};
