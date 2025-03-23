import { Link } from "react-router-dom";
import { IFunctionalSectionProps } from "../types";

export const FunctionalSection = ({
  children,
  dogs,
  isFavoriteActive,
  setIsFavoriteActive,
  isNotFavoriteActive,
  setIsNotFavoriteActive,
  isCreateDogActive,
  setIsCreateDogActive,
}: IFunctionalSectionProps) => {
  return (
    <section id="main-section">
      <div className="container-header">
        <div className="container-label">Dogs: </div>
        <Link to={"/class"} className="btn">
          Change to Class
        </Link>
        <div className="selectors">
          {/* This should display the favorited count */}
          <div
            className={`selector ${isFavoriteActive ? "active" : ""}`}
            onClick={() => {
              if (!isFavoriteActive) {
                setIsFavoriteActive(true);
                setIsNotFavoriteActive(false);
                setIsCreateDogActive(false);
              } else {
                setIsFavoriteActive(false);
              }
            }}
          >
            favorited ( {dogs.filter((dog) => dog.isFavorite).length} )
          </div>

          {/* This should display the unfavorited count */}
          <div
            className={`selector ${isNotFavoriteActive ? "active" : ""}`}
            onClick={() => {
              if (!isNotFavoriteActive) {
                setIsNotFavoriteActive(true);
                setIsFavoriteActive(false);
                setIsCreateDogActive(false);
              } else {
                setIsNotFavoriteActive(false);
              }
            }}
          >
            unfavorited ( {dogs.filter((dog) => !dog.isFavorite).length} )
          </div>
          <div
            className={`selector ${isCreateDogActive ? "active" : ""}`}
            onClick={() => {
              if (!isCreateDogActive) {
                setIsCreateDogActive(true);
                setIsFavoriteActive(false);
                setIsNotFavoriteActive(false);
              } else {
                setIsCreateDogActive(false);
              }
            }}
          >
            create dog
          </div>
        </div>
      </div>
      <div className="content-container">{children}</div>
    </section>
  );
};
