import { combineEpics } from 'redux-observable';
import todo from './todo';

export default combineEpics(
    todo
);