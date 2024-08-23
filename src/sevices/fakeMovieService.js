import { getGenresData } from "./fakeGenreService";

 
 const movies=[
   {
     id: "12122655750422",
     Title: "Terminator",
     genre: { _id: "234834", name: "Action" },
     numberInstock: 7,
     liked: false,
     dailyRentalRate:"10",
   },
   {
     id: "636326223",
     Title: "Alexa",
     genre: { _id: "698798", name: "Drama" },
     numberInstock: 5,
     liked: "false",
     dailyRentalRate:"76",
   },
   {
     id: "3287289472",
     Title: "Jenna",
     genre: { _id: "88778978", name: "Horror" },
     numberInstock: 3,
     liked: "true",
     dailyRentalRate:"0",
   },
   {
     id: "12122654220023",
     Title: "Deddda",
     genre: { _id: "234834", name: "Action" },
     numberInstock: 2,
     liked: "true",
     dailyRentalRate:"31",
   },
   {
     id: "121226542233",
     Title: "JKL",
     genre: { _id: "234834", name: "Action" },
     numberInstock: 12,
     liked: "true",
     dailyRentalRate:"1",
   },
   {
     id: "1212269995422",
     Title: "GHOST",
     genre: { _id: "678569", name: "Thriller" },
     numberInstock: 22,
     liked: "true",
     dailyRentalRate:"2",
   },
   {
     id: "121226580422",
     Title: "LEEMA",
     genre: { _id: "698798", name: "Drama" },
     numberInstock: 7,
     liked: "false",
     dailyRentalRate:"5",
   },
   {
     id: "12122655e75422",
     Title: "Terminator",
     genre: { _id: "234834", name: "Action" },
     numberInstock: 1,
     liked: false,
     dailyRentalRate:"6",
   },
   {
     id: "1212265464642th2",
     Title: "Terminator",
     genre: { _id: "234834", name: "Action" },
     numberInstock: 13,
     liked: false,
     dailyRentalRate:"7",
   },
   {
     id: "12122654thr2980ee2",
     Title: "Terminator",
     genre: { _id: "234834", name: "Action" },
     numberInstock: 4,
     liked: false,
     dailyRentalRate:"4",
   },
   {
     id: "121226rhr54646422",
     Title: "Terminator",
     genre: { _id: "234834", name: "Action" },
     numberInstock: 14,
     liked: false,
     dailyRentalRate:"8",
   },
   {
     id: "1212265464rttr6422",
     Title: "Terminator",
     genre: { _id: "234834", name: "Action" },
     numberInstock: 10,
     liked: false,
     dailyRentalRate:"9",
   },
   {
     id: "12122654646t422",
     Title: "Terminator",
     genre: { _id: "234834", name: "Action" },
     numberInstock: 6,
     liked: false,
     dailyRentalRate:"8",
},
{
     id: "121226546464rre22",
     Title: "Terminator",
     genre: { _id: "234834", name: "Action" },
     numberInstock: 5,
     liked: false,
     dailyRentalRate:"3",
   },
 ]
 export function getMoviesData() {
  return movies;
};
export function saveMovie(movie){
  debugger
 let movieInDb=movies.find(m =>m.id ===movie.id) || {};
 
movieInDb.Title=movie.id;
movieInDb.Title=movie.Title;
movieInDb.genre=getGenresData().find(g =>g._id ===movie.genreId);
movieInDb.numberInstock=movie.numberInstock;
movieInDb.liked=false;
movieInDb.dailyRentalRate=movie.dailyRentalRate;
if(!movie.id){
  movieInDb.id=Date.now().toString(); 
  movieInDb.liked=true;
  movies.push(movieInDb);
}
return movieInDb
}