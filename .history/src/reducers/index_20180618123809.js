import { combineReducers } from 'redux';
import BooksReducer from './book_reducer';
import ActiveBook

const rootReducer = combineReducers({
  books:BooksReducer
});

export default rootReducer;
