import axios from "axios";
import {
  FishSearch,
  FishInfo,
  FishCareGuide,
  FishOverview,
  FishRelatedData,
  FishResourceLink,
} from "./fish";

const api = "http://localhost:8080/api/fish/";

export interface SearchResponse {
  data: FishSearch[];
}

export const searchFishes = async (query: string) => {
  try {
    // const data = await axios.get<SearchResponse>(api + `search?query=${query}&limit=8`);
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

export const getFishInfo = async (query: string) => {
  try {
    // const data = await axios.get<FishInfo[]>(api + `info/${query}`);
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

export const getFishCareGuide = async (query: string) => {
  try {
    // const data = await axios.get<FishCareGuide[]>(api + `care-guide/${query}`);
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

export const getFishOverview = async (query: string) => {
  try {
    // const data = await axios.get<FishOverview[]>(api + `overview/${query}`);
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

export const getRelatedData = async (query: string) => {
  try {
    // const data = await axios.get<FishRelatedData[]>(api + `related-fishes?scientificName=${query}&limit=5`);
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

export const getResourceLinks = async (query: string) => {
  try {
    // const data = await axios.get<FishResourceLink[]>(api + `resource-links/${query}`);
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
