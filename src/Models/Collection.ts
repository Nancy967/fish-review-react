export type CollectionGet = {
  id: number;
  scientificName: string;
  commonName: string;
};

export type CollectionPost = {
  scientificName: string;
};
