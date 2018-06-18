import { combineReducers } from 'redux';
import BooksReducer from './book_reducer';
import A

const rootReducer = combineReducers({
  books:BooksReducer
});

export default rootReducer;
