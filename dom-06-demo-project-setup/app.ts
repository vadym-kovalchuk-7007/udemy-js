const addMovieModal = document.getElementById("add-modal")!;
const backdrop = document.getElementById("backdrop")!;
const startMovieBtn = document.querySelector("header button")!;
const cancelAddMovieBtn = addMovieModal.querySelector(
  ".modal__actions .btn--passive"
)!;
const AddMovieBtn = cancelAddMovieBtn.nextElementSibling!;
const userInputs = document.querySelectorAll("input");
type movie = {
  id: string;
  image: string;
  rating: number;
  title: string;
};
const movies: movie[] = [];
const movieListElement = document.getElementById("movie-list")!;
const entryTextSection = document.getElementById("entry-text")!;
const deleteMovieModal = document.getElementById("delete-modal")!;
const closeDeleteModalBtn = deleteMovieModal.querySelector(".btn--passive")!;
const deleteModalBtn = deleteMovieModal.querySelector(".btn--danger")!;
let movieId: string = "";
