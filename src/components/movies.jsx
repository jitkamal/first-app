import React, { Component } from "react";
import _ from "lodash";
import ListGroup from "./common/listGroup";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import {
  Link,
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { getMoviesData } from "../sevices/fakeMovieService";
import { getGenresData } from "../sevices/fakeGenreService";
import SearchBox from "./common/searchBox";
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
class Movies extends Component {
  state = {
    selectedGenre: null,
    searchQuery: "",
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: "", order: "" },
    allMovies: getMoviesData(),
    geners: getGenresData(),
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleLike = (movie) => {
    console.log("Like Clicked", movie);
    const movies = [...this.state.allMovies];
    const index = movies.indexOf(movie);

    if (movies[index].liked === "true") {
      movies[index].liked = "false";
      return this.setState({ allMovies: movies });
    }
    movies[index].liked = "true";
    this.setState({ allMovies: movies });
  };

  handleDelete = (movie) => {
    debugger;
    const movies = this.state.allMovies.filter((m) => m.id !== movie.id);
    this.setState({ allMovies: movies });
    console.log(movie);
  };

  handleGenreSelect = (genre) => {
    debugger;
    this.setState({ selectedGenre: genre });
    this.setState({ currentPage: 1, searchQuery: "" });

    console.log(genre);
  };

  handleSort = (sortColumn) => {
    debugger;
    this.setState({ sortColumn });
    console.log(sortColumn);
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      allMovies,
      selectedGenre,
      sortColumn,
      searchQuery,
    } = this.state;
    let filtered = allMovies;
    if (searchQuery)
      filtered = allMovies.filter((m) =>
        m.Title.toLocaleLowerCase().startsWith(searchQuery.toLocaleLowerCase())
      );
    else if (selectedGenre && selectedGenre._id)
      filtered = allMovies.filter(
        (item) => item.genre.name === selectedGenre.name
      );

    const sorted = sortColumn.path
      ? _.orderBy(filtered, [sortColumn.path], [sortColumn.order])
      : filtered;

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };
  handleAddNewMovie = () => {
    this.props.history.push("/add-new");
  };

  handleSearch = (event) => {
    debugger;
    const query = event.currentTarget.value;
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  handleBack = () => {
    debugger;
    return window.location.reload();
  };

  render() {
    debugger;

    const { pageSize, currentPage, selectedGenre, sortColumn } = this.state;
    const { totalCount, data: movies } = this.getPagedData();

    if (totalCount === 0)
      return (
        <>
          <p>There is no movie in database!</p>
          <button
            type="button"
            className="btn btn-primary mt-3 mx-2"
            onClick={this.handleBack}
          >
            Back
          </button>
        </>
      );

    return (
      <React.Fragment>
        <div className="row mt-6">
          <div className="mt-6">
            <h5>Showing {totalCount} movies in the database. </h5>
          </div>

          <div className="col-3">
            <ListGroup
              items={this.state.geners}
              onItemSelect={this.handleGenreSelect}
              selectedItem={selectedGenre}
            ></ListGroup>
          </div>

          <div className="col">
            <Link className="btn btn-primary" to={`/movies/${"new"}`}>
              Add-New-Movie
            </Link>
            <SearchBox
              value={this.state.searchQuery}
              onChange={this.handleSearch}
            ></SearchBox>
            <MoviesTable
              movies={movies}
              sortColumn={sortColumn}
              onSort={this.handleSort}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
            ></MoviesTable>
            <div>
              <Pagination
                itemCount={totalCount}
                pageSize={pageSize}
                onPageChange={this.handlePageChange}
                currentPage={currentPage}
              ></Pagination>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Movies);
