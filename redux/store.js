import { createStore } from 'redux'
import rootReducer from './reducers';

export default function configureStore(initialStore){
    const store = createStore(rootReducer, initialStore);
    return store;
}