import { Component } from "react";
import { Link } from "react-router-dom";
import { IClassSectionProps } from "../types";

export class ClassSection extends Component<IClassSectionProps> {
  render() {
    return (
      <section id="main-section">
        <div className="container-header">
          <div className="container-label">Dogs: </div>

          <Link to={"/functional"} className="btn">
            Change to Functional
          </Link>

          <div className="selectors">
            {/* This should display the favorited count */}
            <div
              className={`selector ${
                this.props.isFavoriteActive ? "active" : ""
              }`}
              onClick={() => {
                if (!this.props.isFavoriteActive) {
                  this.props.handleIsFavoriteActive(true);
                  this.props.handleIsNotFavoriteActive(false);
                  this.props.handleIsCreateDogActive(false);
                } else {
                  this.props.handleIsFavoriteActive(false);
                }
              }}
            >
              favorited ({" "}
              {this.props.dogs.filter((dog) => dog.isFavorite).length} )
            </div>

            {/* This should display the unfavorited count */}
            <div
              className={`selector ${
                this.props.isNotFavoriteActive ? "active" : ""
              }`}
              onClick={() => {
                if (!this.props.isNotFavoriteActive) {
                  this.props.handleIsNotFavoriteActive(true);
                  this.props.handleIsFavoriteActive(false);
                  this.props.handleIsCreateDogActive(false);
                } else {
                  this.props.handleIsNotFavoriteActive(false);
                }
              }}
            >
              unfavorited ({" "}
              {this.props.dogs.filter((dog) => !dog.isFavorite).length} )
            </div>
            <div
              className={`selector ${
                this.props.isCreateDogActive ? "active" : ""
              }`}
              onClick={() => {
                if (!this.props.isCreateDogActive) {
                  this.props.handleIsCreateDogActive(true);
                  this.props.handleIsFavoriteActive(false);
                  this.props.handleIsNotFavoriteActive(false);
                } else {
                  this.props.handleIsCreateDogActive(false);
                }
              }}
            >
              create dog
            </div>
          </div>
        </div>
        <div className="content-container">{this.props.children}</div>
      </section>
    );
  }
}
