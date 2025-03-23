import { useEffect, useState } from "react";
import { FunctionalCreateDogForm } from "./FunctionalCreateDogForm";
import { FunctionalDogs } from "./FunctionalDogs";
import { FunctionalSection } from "./FunctionalSection";
import { Requests } from "../api";
import { Dog } from "../types";
import toast from "react-hot-toast";

export function FunctionalApp() {
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [isFavoriteActive, setIsFavoriteActive] = useState(false);
  const [isNotFavoriteActive, setIsNotFavoriteActive] = useState(false);
  const [isCreateDogActive, setIsCreateDogActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    refetchData();
  }, []);

  const refetchData = () => {
    return Requests.getAllDogs().then(setDogs);
  };

  const addDog = (dog: Omit<Dog, "id">) => {
    setIsLoading(true);
    Requests.postDog(dog)
      .then(refetchData)
      .then(() => toast.success("Dog Created"))
      .finally(() => setIsLoading(false));
  };

  const deleteDog = (id: number) => {
    setIsLoading(true);
    Requests.deleteDog(id)
      .then(refetchData)
      .finally(() => setIsLoading(false));
  };

  const updateDog = (id: number, isFavorite: boolean) => {
    setIsLoading(true);
    Requests.updateDog(id, isFavorite)
      .then(refetchData)
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="App" style={{ backgroundColor: "skyblue" }}>
      <header>
        <h1>pup-e-picker (Functional)</h1>
      </header>
      <FunctionalSection
        dogs={dogs}
        isFavoriteActive={isFavoriteActive}
        setIsFavoriteActive={setIsFavoriteActive}
        isNotFavoriteActive={isNotFavoriteActive}
        setIsNotFavoriteActive={setIsNotFavoriteActive}
        isCreateDogActive={isCreateDogActive}
        setIsCreateDogActive={setIsCreateDogActive}
      >
        <FunctionalDogs
          dogs={dogs}
          deleteDog={deleteDog}
          updateDog={updateDog}
          isFavoriteActive={isFavoriteActive}
          isNotFavoriteActive={isNotFavoriteActive}
          isCreateDogActive={isCreateDogActive}
          isLoading={isLoading}
        />
        {isCreateDogActive && (
          <FunctionalCreateDogForm addDog={addDog} isLoading={isLoading} />
        )}
      </FunctionalSection>
    </div>
  );
}
