import axios from "axios";
import { CollectionGet, CollectionPost } from "../Models/Collection";
import { handleError } from "../Helpers/ErrorHandler";

const api = "http://localhost:8080/api/collection/";

export const collectionAddAPI = async (scientificName: string) => {
  try {
    const data = await axios.post<CollectionPost>(api + `?scientificName=${scientificName}`);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const collectionDeleteAPI = async (scientificName: string) => {
  try {
    const data = await axios.delete<CollectionPost>(api + `?scientificName=${scientificName}`);
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
          id: 1,
          scientificName: "amphiprion-percula",
          commonName: "公子小丑",
        },
        // {
        //   id: 2,
        //   scientificName: "amphiprion-frenatus",
        //   commonName: "透紅小丑",
        // },
      ],
    };
    return data;
  } catch (error) {
    handleError(error);
  }
};
