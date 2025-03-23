import { Component } from "react";
import { ClassSection } from "./ClassSection";
import { ClassDogs } from "./ClassDogs";
import { ClassCreateDogForm } from "./ClassCreateDogForm";
import { Requests } from "../api";
import { Dog } from "../types";
import toast from "react-hot-toast";

export class ClassApp extends Component {
  state = {
    dogs: [],
    isFavoriteActive: false,
    isNotFavoriteActive: false,
    isCreateDogActive: false,
    isLoading: false,
  };

  componentDidMount(): void {
    this.refetchData();
  }

  refetchData = () => {
    return Requests.getAllDogs().then((dogs) => this.setState({ dogs: dogs }));
  };

  addDog = (dog: Omit<Dog, "id">) => {
    this.setState({ isLoading: true });
    Requests.postDog(dog)
      .then(this.refetchData)
      .then(() => toast.success("Dog Created"))
      .finally(() => this.setState({ isLoading: false }));
  };

  deleteDog = (id: number) => {
    this.setState({ isLoading: true });
    Requests.deleteDog(id)
      .then(this.refetchData)
      .finally(() => this.setState({ isLoading: false }));
  };

  updateDog = (id: number, isFavorite: boolean) => {
    this.setState({ isLoading: true });
    Requests.updateDog(id, isFavorite)
      .then(this.refetchData)
      .finally(() => this.setState({ isLoading: false }));
  };

  handleIsFavoriteActive = (isFavoriteActive: boolean) => {
    this.setState({ isFavoriteActive: isFavoriteActive });
  };
  handleIsNotFavoriteActive = (isNotFavoriteActive: boolean) => {
    this.setState({ isNotFavoriteActive: isNotFavoriteActive });
  };
  handleIsCreateDogActive = (isCreateDogActive: boolean) => {
    this.setState({ isCreateDogActive: isCreateDogActive });
  };

  render() {
    return (
      <div className="App" style={{ backgroundColor: "goldenrod" }}>
        <header>
          <h1>pup-e-picker (Class Version)</h1>
        </header>
        <ClassSection
          dogs={this.state.dogs}
          isFavoriteActive={this.state.isFavoriteActive}
          handleIsFavoriteActive={this.handleIsFavoriteActive}
          isNotFavoriteActive={this.state.isNotFavoriteActive}
          handleIsNotFavoriteActive={this.handleIsNotFavoriteActive}
          isCreateDogActive={this.state.isCreateDogActive}
          handleIsCreateDogActive={this.handleIsCreateDogActive}
        >
          <ClassDogs
            dogs={this.state.dogs}
            deleteDog={this.deleteDog}
            updateDog={this.updateDog}
            isFavoriteActive={this.state.isFavoriteActive}
            isNotFavoriteActive={this.state.isNotFavoriteActive}
            isCreateDogActive={this.state.isCreateDogActive}
            isLoading={this.state.isLoading}
          />
          {this.state.isCreateDogActive && (
            <ClassCreateDogForm
              addDog={this.addDog}
              isLoading={this.state.isLoading}
            />
          )}
        </ClassSection>
      </div>
    );
  }
}
