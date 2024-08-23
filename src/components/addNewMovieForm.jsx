import Form from "./common/form";
import Joi from "joi-browser";
import { getGenresData } from "../sevices/fakeGenreService";
import { getMoviesData } from "../sevices/fakeMovieService";
import { useLocation, useNavigate, useParams } from "react-router-dom";
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
class AddNewMovieForm extends Form {
  state = {
    data: {
      Title: "",
      genreId: "",
      numberInstock: "",
      dailyRentalRate: "",
    },
    genres: [],
    errors: {},
  };

  schema = {
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
    const genres = getGenresData();
    const movies = getMoviesData();
    this.setState({ genres });
    console.log(this.props.location.pathname);
  }

  render() {
    return (
      <div className="container">
        <div className="row mx-md-n5">
          <div className="col-2"></div>
          <div className="col-8">
            <h1>Add New Movie</h1>

            <form onSubmit={this.handleSubmit}>
              {this.renderInput("Title", "Title")}
              {this.renderInput("genreId", "Genre")}
              {this.renderInput("numberInstock", "Number In Stock")}
              {this.renderInput("dailyRentalRate", "Daily Rental Rate")}
              {this.renderButton("Add")}
            </form>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    );
  }
}

export default withRouter(AddNewMovieForm);
