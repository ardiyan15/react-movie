import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import moviesReducer from "./stores/reducers/movies";

import Home from "./pages/Home";
import Detail from "./pages/Detail";

const rootReducer = combineReducers({
  movies: moviesReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/detail" component={Detail}></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
