import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import { produce } from 'immer';
import productReducer from '../compoment/reducer/productReducer';
const composeEnhancers =
    typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
        })
        : compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
);
const rootreducer = combineReducers({
    Product: productReducer   
})
const store = createStore(rootreducer,enhancer);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;