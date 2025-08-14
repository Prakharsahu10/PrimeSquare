import { Models } from "react-native-appwrite";

export interface Agent extends Models.Document {
  name: string;
  email: string;
  avatar: string;
}

export interface Review extends Models.Document {
  name: string;
  avatar: string;
  review: string;
  rating: number;
}

export interface Gallery extends Models.Document {
  image: string;
}

export interface Property extends Models.Document {
  name: string;
  address: string;
  price: number;
  rating: number;
  image: string;
  type: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  facilities: string[];
  agent: Agent;
  reviews: Review[];
  gallery: Gallery[];
}

export interface User extends Models.Document {
  name: string;
  email: string;
  avatar: string;
}
