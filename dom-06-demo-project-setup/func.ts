const toggleBackdrop = () => backdrop.classList.toggle("visible");

/**
 * Toggle add movie modal.
 */
const toggleMovieModalHandler = (): void => {
  if (!deleteMovieModal.classList.contains("visible")) {
    addMovieModal.classList.toggle("visible");
    toggleBackdrop();
  }
  return;
};
/**
 * Backdrop (dark background).
 */
const backDropHandler = () =>
  deleteMovieModal.classList.contains("visible")
    ? closeConfirmDeleteDialogHandler()
    : toggleMovieModalHandler();

const clearUserInputs = () => {
  for (let i = 0; i < userInputs.length; i++) {
    userInputs[i].value = "";
  }
};

const cancelAddMovieHandler = () => {
  toggleMovieModalHandler();
  clearUserInputs();
};

const showHideEntryTextSection = () =>
  movies.length
    ? (entryTextSection.style.display = "none")
    : (entryTextSection.style.display = "block");

const removeMovie = () => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  document.getElementById(movieId)?.remove();
  movieId = "";
  // movieListElement.children[movieIndex].remove();
  showHideEntryTextSection();
};
const removeMovieHandler = (id: string) => {
  deleteMovieModal.classList.add("visible");
  toggleBackdrop();
  movieId = id;
};

const generateId = (): string =>
  Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(0, 7);

const addMovie2screen = (newMovie: movie) => {
  const liElement = document.createElement("li");
  liElement.className = "movie-element";
  liElement.setAttribute("id", newMovie.id);

  const text: string = `
  <div class="movie-element__image"><img src="${newMovie.image}" alt="${newMovie.title}"/></div>
  <div class="movie-element__info">
    <h2>${newMovie.title}</h2>
    <p>${newMovie.rating}/5 stars</p>
  </div>
  `;
  liElement.innerHTML = text;
  liElement.addEventListener(
    "click",
    removeMovieHandler.bind(null, newMovie.id)
  );
  movieListElement.appendChild(liElement);
};

const addMovieHandler = () => {
  const [title, image, rating] = [
    userInputs[0].value.trim(),
    userInputs[1].value.trim(),
    parseInt(userInputs[2].value.trim()),
  ];

  if (!!!image || !!!rating || rating < 1 || rating > 5) {
    alert("Provide correct data");
    return;
  }
  let _title: string = "default";
  const newMovie: movie = {
    id: generateId(),
    image,
    rating,
    set title(title: string) {
      _title = !!!title ? _title : title;
    },
    get title(): string {
      return title;
    },
  };
  newMovie.title = title;
  movies.push(newMovie);
  toggleMovieModalHandler();
  clearUserInputs();
  addMovie2screen(newMovie);
  showHideEntryTextSection();
};

const closeConfirmDeleteDialogHandler = function () {
  const { classList } = deleteMovieModal;
  if (classList.contains("visible")) {
    toggleBackdrop();
    classList.remove("visible");
  }
  movieId = "";
};

const deleteMovieHandler = () => {
  removeMovie();
  closeConfirmDeleteDialogHandler();
};

startMovieBtn.addEventListener("click", toggleMovieModalHandler);
backdrop.addEventListener("click", backDropHandler);
cancelAddMovieBtn.addEventListener("click", cancelAddMovieHandler);
AddMovieBtn.addEventListener("click", addMovieHandler);
closeDeleteModalBtn.addEventListener("click", closeConfirmDeleteDialogHandler);
deleteModalBtn.addEventListener("click", deleteMovieHandler);
