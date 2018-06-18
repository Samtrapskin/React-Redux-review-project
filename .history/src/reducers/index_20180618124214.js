import { combineReducers } from 'redux';
import BooksReducer from './book_reducer';
import ActiveBookReducer from './acvtiveBookReducer';

const rootReducer = combineReducers({
  books:BooksReducer,
  activeBook
});



export default rootReducer;
