import { DogCard } from "../Shared/DogCard";
import { IDisplayDogs } from "../types";

export const FunctionalDogs = ({
  dogs,
  deleteDog,
  updateDog,
  isFavoriteActive,
  isNotFavoriteActive,
  isCreateDogActive,
  isLoading,
}: IDisplayDogs) => {
  return (
    //  the "<> </>"" are called react fragments, it's like adding all the html inside
    // without adding an actual html element
    <>
      {dogs
        .filter((dog) => {
          if (isFavoriteActive) return dog.isFavorite;
          else if (isNotFavoriteActive) return !dog.isFavorite;
          else if (isCreateDogActive) return false;
          else return dog;
        })
        .map((dog) => (
          <DogCard
            key={dog.id}
            dog={dog}
            onEmptyHeartClick={() => {
              updateDog(dog.id, true);
            }}
            onHeartClick={() => {
              updateDog(dog.id, false);
            }}
            //insert delete method here
            onTrashIconClick={() => {
              deleteDog(dog.id);
            }}
            isLoading={isLoading}
          />
        ))}
    </>
  );
};
