import axios from "axios";
import { CollectionGet, CollectionPost } from "../Models/Collection";
import { handleError } from "../Helpers/ErrorHandler";

const api = "http://localhost:5167/api/collection/";

export const collectionAddAPI = async (symbol: string) => {
  try {
    const data = await axios.post<CollectionPost>(api + `?symbol=${symbol}`);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const collectionDeleteAPI = async (symbol: string) => {
  try {
    const data = await axios.delete<CollectionPost>(api + `?symbol=${symbol}`);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const collectionGetAPI = async () => {
  try {
    // const data = await axios.get<CollectionGet[]>(api);
    const data = {
      data: [
        {
          id: 9,
          scientificName: "amphiprion-percula",
          commonName: "公子小丑",
        },
        {
          id: 10,
          scientificName: "amphiprion-frenatus",
          commonName: "透紅小丑",
        },
      ],
    };
    return data;
  } catch (error) {
    handleError(error);
  }
};
