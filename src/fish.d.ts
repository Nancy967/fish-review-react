export interface FishSearch {
  scientificName: string;
  category: string;
  commonName: string;
}

export interface FishProfile {
  scientificName: string;
  category: string;
  commonName: string;
  description: string;
  size: string;
  lifespan: string;
}

export interface FishCareSheet {
  scientificName: string;
  ph: string;
  salinity: string;
  temperature: string;
  ammonia: string;
  nitrite: string;
  nitrate: string;
  hardness: string;
  tankSize: string;
  diet: string;
  compatibility: string;
}

export interface FishGuideTable {
  category: string;
  commonName: string;
  scientificName: string;
  size: string;
  lifespan: string;
}

export interface FishRelevantData {
  scientificName: string;
  peersList: PeersList[];
}

export interface PeersList {
  commonName: string;
  scientificName: string;
}

export interface CompanyTenK {
  symbol: string;
  fillingDate: string;
  acceptedDate: string;
  cik: string;
  type: string;
  link: string;
  finalLink: string;
}
