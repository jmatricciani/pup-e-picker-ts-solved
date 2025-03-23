// Add your own custom types in here

import { ReactNode } from "react";

export type Dog = {
  id: number;
  name: string;
  image: string;
  description: string;
  isFavorite: boolean;
};

//Prop Interfaces

export interface IFunctionalSectionProps {
  children?: ReactNode;
  dogs: Dog[];
  isFavoriteActive: boolean;
  setIsFavoriteActive: React.Dispatch<React.SetStateAction<boolean>>;
  isNotFavoriteActive: boolean;
  setIsNotFavoriteActive: React.Dispatch<React.SetStateAction<boolean>>;
  isCreateDogActive: boolean;
  setIsCreateDogActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IClassSectionProps {
  children?: ReactNode;
  dogs: Dog[];
  isFavoriteActive: boolean;
  handleIsFavoriteActive: (isFavoriteActive: boolean) => void;
  isNotFavoriteActive: boolean;
  handleIsNotFavoriteActive: (isFavoriteActive: boolean) => void;
  isCreateDogActive: boolean;
  handleIsCreateDogActive: (isFavoriteActive: boolean) => void;
}

export interface IFormProps {
  addDog: (dog: Omit<Dog, "id">) => void;
  isLoading: boolean;
}

export interface IDisplayDogs {
  dogs: Dog[];
  deleteDog: (id: number) => void;
  updateDog: (id: number, isFavorite: boolean) => void;
  isFavoriteActive: boolean;
  isNotFavoriteActive: boolean;
  isCreateDogActive: boolean;
  isLoading: boolean;
}
