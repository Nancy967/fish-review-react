export interface FishSearchResult {
  scientificName: string;
  category: string;
  commonName: string;
}

export interface FishInfo {
  scientificName: string;
  category: string;
  commonName: string;
  size: string;
  lifespan: string;
  description: string;
}

export interface FishCareGuide {
  scientificName: string;
  optimalPH: string;
  optimalSalinity: string;
  optimalTemperature: string;
  maxAmmonia: string;
  maxNitrite: string;
  maxNitrate: string;
  waterHardness: string;
  recommendedTankSize: string;
  diet: string;
  compatibility: string;
}

export interface FishOverview {
  scientificName: string;
  category: string;
  commonName: string;
  size: string;
  lifespan: string;
}

export interface RelatedFishData {
  scientificName: string;
  relatedSpecies: RelatedFish[];
}

export interface RelatedFish {
  scientificName: string;
  commonName: string;
}

export interface FishResourceLink {
  scientificName: string;
  title?: string;
  url: string;
}

export interface FishSearchResponse {
  data: FishSearchResult[];
}
