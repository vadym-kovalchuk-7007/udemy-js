"use strict";
var addMovieModal = document.getElementById("add-modal");
var backdrop = document.getElementById("backdrop");
var startMovieBtn = document.querySelector("header button");
var cancelAddMovieBtn = addMovieModal.querySelector(".modal__actions .btn--passive");
var AddMovieBtn = cancelAddMovieBtn.nextElementSibling;
var userInputs = document.querySelectorAll("input");
var movies = [];
var movieListElement = document.getElementById("movie-list");
var entryTextSection = document.getElementById("entry-text");
var deleteMovieModal = document.getElementById("delete-modal");
var closeDeleteModalBtn = deleteMovieModal.querySelector(".btn--passive");
var deleteModalBtn = deleteMovieModal.querySelector(".btn--danger");
var movieId = "";
var toggleBackdrop = function () { return backdrop.classList.toggle("visible"); };
var toggleMovieModalHandler = function () {
    if (!deleteMovieModal.classList.contains("visible")) {
        addMovieModal.classList.toggle("visible");
        toggleBackdrop();
    }
    return;
};
var backDropHandler = function () {
    return deleteMovieModal.classList.contains("visible")
        ? closeConfirmDeleteDialogHandler()
        : toggleMovieModalHandler();
};
var clearUserInputs = function () {
    for (var i = 0; i < userInputs.length; i++) {
        userInputs[i].value = "";
    }
};
var cancelAddMovieHandler = function () {
    toggleMovieModalHandler();
    clearUserInputs();
};
var showHideEntryTextSection = function () {
    return movies.length
        ? (entryTextSection.style.display = "none")
        : (entryTextSection.style.display = "block");
};
var removeMovie = function () {
    var _a;
    var movieIndex = 0;
    for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
        var movie = movies_1[_i];
        if (movie.id === movieId) {
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1);
    (_a = document.getElementById(movieId)) === null || _a === void 0 ? void 0 : _a.remove();
    movieId = "";
    showHideEntryTextSection();
};
var removeMovieHandler = function (id) {
    deleteMovieModal.classList.add("visible");
    toggleBackdrop();
    movieId = id;
};
var generateId = function () {
    return Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substr(0, 7);
};
var addMovie2screen = function (newMovie) {
    var liElement = document.createElement("li");
    liElement.className = "movie-element";
    liElement.setAttribute("id", newMovie.id);
    var text = "\n  <div class=\"movie-element__image\"><img src=\"" + newMovie.image + "\" alt=\"" + newMovie.title + "\"/></div>\n  <div class=\"movie-element__info\">\n    <h2>" + newMovie.title + "</h2>\n    <p>" + newMovie.rating + "/5 stars</p>\n  </div>\n  ";
    liElement.innerHTML = text;
    liElement.addEventListener("click", removeMovieHandler.bind(null, newMovie.id));
    movieListElement.appendChild(liElement);
};
var addMovieHandler = function () {
    var _a = [
        userInputs[0].value.trim(),
        userInputs[1].value.trim(),
        parseInt(userInputs[2].value.trim()),
    ], title = _a[0], image = _a[1], rating = _a[2];
    if (!!!image || !!!rating || rating < 1 || rating > 5) {
        alert("Provide correct data");
        return;
    }
    var _title = "";
    var newMovie = {
        id: generateId(),
        image: image,
        rating: rating,
        set title(title) {
            _title = !!!title ? "default" : title;
        },
        get title() {
            return _title;
        },
    };
    newMovie.title = title;
    movies.push(newMovie);
    toggleMovieModalHandler();
    clearUserInputs();
    addMovie2screen(newMovie);
    showHideEntryTextSection();
};
var closeConfirmDeleteDialogHandler = function () {
    var classList = deleteMovieModal.classList;
    if (classList.contains("visible")) {
        toggleBackdrop();
        classList.remove("visible");
    }
    movieId = "";
};
var deleteMovieHandler = function () {
    removeMovie();
    closeConfirmDeleteDialogHandler();
};
startMovieBtn.addEventListener("click", toggleMovieModalHandler);
backdrop.addEventListener("click", backDropHandler);
cancelAddMovieBtn.addEventListener("click", cancelAddMovieHandler);
AddMovieBtn.addEventListener("click", addMovieHandler);
closeDeleteModalBtn.addEventListener("click", closeConfirmDeleteDialogHandler);
deleteModalBtn.addEventListener("click", deleteMovieHandler);
