import { Observable } from 'rxjs/Observable';
import { push } from 'react-router-redux';
import * as ActionTypes from '../ActionTypes';
import { todo } from '../actions/todo';

export default function todo(action$) {
    return action$.ofType(ActionTypes.ADD_TODO)
        .delay(2000)
        .mergeMap(() => Observable.merge(
            Observable.of(addTodo(todo)),
            Observable.timer(2000).map(() => push(todo))
        ));
}