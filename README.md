Counter With Redux

- create react app and install the following things for running redux locally

```js
npm install redux
npm install react-redux
npm install --save @redux-devtools/extension
```

# store

The Redux store brings together the state, actions, and reducers that makes the app.store is created by passing in a reducer.

```js
const store = createStore(reducer);
```

## action

```js
export const INCREASE = "INCREASE";
```

## reducer

It takes state and action as an argument and returns newState.

```js
const initialState = {
   counter:0
};
const function=(state=initialState, action) => {
	  switch (action.type) {
    case actionTypes.INCREASE:
      return { ...state, counter: state.counter + 1 };

	default:
      return state;
}
```

# App

## useSelector

```js
const myState = useSelector((state) => state.counter);
```

## Dispatch

The only way to update the state is to call dispatch() and pass in an action object.

```js
const dispatch = useDispatch();
const plusHandler = (e) => {
  e.preventDefault();
  dispatch({
    type: actionTypes.INCREASE,
    playload: myState,
  });
};
```
