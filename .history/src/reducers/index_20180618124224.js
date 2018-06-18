import { combineReducers } from 'redux';
import BooksReducer from './book_reducer';
import ActiveBook from './acvtiveBookReducer';

const rootReducer = combineReducers({
  books:BooksReducer,
  activeBook: ActiveBook
});



export default rootReducer;
