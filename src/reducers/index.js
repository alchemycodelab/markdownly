import { combineReducers } from 'redux';
import editor from './markdownReducer';
import saves from './pageReducer';



export default combineReducers({ editor, saves });
