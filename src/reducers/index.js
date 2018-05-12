import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import MovieReducer from './reducer_movies';
import ActiveBook from './reducer_active_book';
import ActiveMovie from './reducer_active_movie';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook,
  movies: MovieReducer,
  activeMovie: ActiveMovie
});
//any key added to combineReducers will be a key on the global application state

export default rootReducer;
