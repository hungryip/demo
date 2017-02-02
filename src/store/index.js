import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

const composeEnhancers = composeWithDevTools({
    name: 'Demo', actionsBlacklist: ['REDUX_STORAGE_SAVE']
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
));


// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// const store = createStoreWithMiddleware(rootReducer);

export default store;
