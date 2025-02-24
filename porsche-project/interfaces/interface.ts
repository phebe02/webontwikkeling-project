
export interface Manufacturer {
    id: number;
    name: string;
    country: string;
    founded: string;
    logoUrl: string;
}

export interface Porsche {
    id: number;
    name: string;
    description: string;
    horsepower: number;
    isElectric: boolean;
    releaseDate: string;
    imageUrl: string;
    category: string;
    features: string[];
    manufacturer: Manufacturer;
  }

export interface PorscheData {
    porsches: Porsche[];
  }