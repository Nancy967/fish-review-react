import axios from "axios";
import {
  FishSearchResult,
  FishInfo,
  FishCareGuide,
  FishOverview,
  RelatedFishData,
  FishResourceLink,
  FishSearchResponse,
} from "./fish";

export const fetchFishSearchResults = async (query: string) => {
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

export const fetchFishInfo = async (query: string) => {
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
          size: "7-10公分",
          lifespan: "6~10年",
          description:
            "主要棲息於潟湖及珊瑚礁區，棲息深度可達約15公尺。和海葵具共生之行為，喜歡共生的海葵有 Stoichactis kenti 等，體表之黏液可保護自己不被海葵傷害。行群聚生活，雌、雄魚均具有護巢護卵之行為，通常由一隻體型最大之雌魚帶領一隻體型第二大且具生殖能力之雄魚，其它成員包括無生殖能力之其它中成魚和一群稚魚。當最大雌魚失去後，則依雄性之順位變性成雌魚而遞補。以藻類、魚卵和浮游生物為食。",
        },
      ],
    };
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};

export const fetchFishCareGuide = async (query: string) => {
  try {
    // const data = await axios.get<FishCareSheet[]>(
    //   `https://financialmodelingprep.com/api/v3/balance-sheet-statement/${query}?limit=20&apikey=${process.env.REACT_APP_API_KEY}`
    // );
    const data = {
      data: [
        {
          scientificName: "amphiprion-percula",
          optimalPH: "7.8~8.4",
          optimalSalinity: "1.020~1.026",
          optimalTemperature: "24°C~28°C",
          maxAmmonia: "0 ppm",
          maxNitrite: "0 ppm",
          maxNitrate: "低於20 ppm",
          waterHardness: "8-12 dKH",
          recommendedTankSize: "至少50公升",
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

export const fetchFishOverview = async (query: string) => {
  try {
    // const data = await axios.get<FishGuide[]>(
    //   `https://financialmodelingprep.com/api/v3/cash-flow-statement/${query}?limit=100&apikey=${process.env.REACT_APP_API_KEY}`
    // );
    const data = {
      data: [
        {
          scientificName: "scleropages-formosus",
          category: "龍",
          commonName: "黃龍",
          size: "15-25公分",
          lifespan: "10~15年",
        },
        {
          scientificName: "scleropages-sp",
          category: "龍",
          commonName: "三色龍",
          size: "12-20公分",
          lifespan: "8~12年",
        },
        {
          scientificName: "pterophyllum-scalare",
          category: "神仙",
          commonName: "花臉神仙",
          size: "10-18公分",
          lifespan: "7~12年",
        },
        {
          scientificName: "pterophyllum-altum",
          category: "神仙",
          commonName: "馬鞍神仙",
          size: "12-22公分",
          lifespan: "8~15年",
        },
        {
          scientificName: "zebrasoma-rostratum",
          category: "倒吊",
          commonName: "黑三角倒吊",
          size: "14-24公分",
          lifespan: "10~15年",
        },
        {
          scientificName: "zebrasoma-flavescens",
          category: "倒吊",
          commonName: "黃倒吊",
          size: "13-20公分",
          lifespan: "7~12年",
        },
        {
          scientificName: "siganus-vulpinus",
          category: "狐狸",
          commonName: "黃狐狸",
          size: "15-25公分",
          lifespan: "8~12年",
        },
        {
          scientificName: "cryptocentrus-cinctus",
          category: "蝦虎",
          commonName: "雷達蝦虎",
          size: "8-12公分",
          lifespan: "5~8年",
        },
        {
          scientificName: "amphiprion-percula",
          category: "雀鯛",
          commonName: "公子小丑",
          size: "7-10公分",
          lifespan: "6~10年",
        },
        {
          scientificName: "amphiprion-frenatus",
          category: "雀鯛",
          commonName: "透紅小丑",
          size: "6-10公分",
          lifespan: "6~10年",
        },
        {
          scientificName: "epinephelus-lanceolatus",
          category: "其他",
          commonName: "大力水手",
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

export const fetchRelatedFishes = async (query: string) => {
  try {
    // const data = await axios.get<CompanyCompData[]>(
    //   `https://financialmodelingprep.com/api/v4/stock_peers?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY}`
    // );
    const data = {
      data: [
        {
          scientificName: "amphiprion-percula",
          relatedSpecies: [
            {
              scientificName: "amphiprion-frenatus",
              commonName: "透紅小丑",
            },
            {
              scientificName: "amphiprion-melanopus",
              commonName: "咖啡小丑",
            },
            {
              scientificName: "amphiprion-ephippium",
              commonName: "紅小丑",
            },
            {
              scientificName: "amphiprion-ocellaris",
              commonName: "黑公子",
            },
            {
              scientificName: "amphiprion-clarkii",
              commonName: "雙帶小丑",
            },
          ],
        },
      ],
    };
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};

export const fetchFishResourceLinks = async (query: string) => {
  try {
    // const data = await axios.get<CompanyTenK[]>(
    //   `https://financialmodelingprep.com/api/v3/sec_filings/${query}?type=10-K&page=0&apikey=${process.env.REACT_APP_API_KEY}`
    // );
    const data = {
      data: [
        {
          scientificName: "amphiprion-percula",
          title: "可愛尼莫----公子小丑",
          url: "https://kmweb.moa.gov.tw/subject/subject.php?id=14955",
        },
        {
          scientificName: "amphiprion-percula",
          url: "https://fishdb.sinica.edu.tw/chi/species.php?id=389_015",
        },
      ],
    };
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};
