import React, { Component } from "react";
import Joi from "joi-browser";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Form from "./form";
import { getGenresData } from "../../sevices/fakeGenreService";
import { getMoviesData } from "../../sevices/fakeMovieService";
import { saveMovie } from "../../sevices/fakeMovieService";
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let navigate = useNavigate();
    let location = useLocation();
    let params = useParams();
    return (
      <Component
        {...props}
        navigate={navigate}
        location={location}
        params={params}
      />
    );
  }

  return ComponentWithRouterProp;
}
class MovieForm extends Form {
  debugger;
  state = {
    allMovies: getMoviesData(),
    data: {
      Title: "",
      genreId: "",
      numberInstock: "",
      dailyRentalRate: "",
    },
    genres: getGenresData(),
    errors: {},
  };

  schema = {
    id: Joi.string(),
    Title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("GenreID").min(0).max(100),
    numberInstock: Joi.string()

      .required()
      .label("NumberInStock")
      .min(0)
      .max(60),
    dailyRentalRate: Joi.string().required().min(4).max(10).label("Rate"),
  };

  componentDidMount() {
    debugger;

    const movieId = this.props.params.id;
    if (movieId === "new") return;
    const movie = this.getMovie(movieId);
    if (!movie) return this.props.navigate("/not-Found", { replace: true });
    this.setState({ data: this.mapToViewModel(movie) });
    console.log(this.props.location.pathname);
  }

  getMovie = (movieId) => {
    debugger;
    console.log(movieId);
    const movie = this.state.allMovies.find((item) => item.id === movieId);

    return movie;
  };

  mapToViewModel = (movie) => {
    debugger;

    return {
      id: movie.id,
      Title: movie.Title,
      genreId: movie.genre._id,
      numberInstock: movie.numberInstock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  };

  doSubmit = () => {
    debugger;
    const data = saveMovie(this.state.data);
    this.setState({ data });
    this.props.navigate(`/movies`);
  };

  render() {
    debugger;
    const movieId = this.props.params.id;
    return (
      <>
        <div className="container">
          <div className="row mx-md-n5">
            <div className="col-2"></div>
            <div className="col-8">
              <h1>{movieId === "new" ? "Add New-Movie" : "Edit Movie"}</h1>

              <form onSubmit={this.handleSubmit}>
                {this.renderInput("Title", "Title")}
                {this.renderSelect("genreId", "Genre", this.state.genres)}
                {this.renderInput("numberInstock", "Number In Stock")}
                {this.renderInput("dailyRentalRate", "Daily Rental Rate")}
                <div className="mt-2">
                  {this.renderButton(movieId === "new" ? "Add" : "Update")}

                  <button
                    type="button"
                    className="btn btn-primary mt-3 mx-2"
                    onClick={() => this.props.navigate(`/movies`)}
                  >
                    Back
                  </button>
                </div>
              </form>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(MovieForm);
