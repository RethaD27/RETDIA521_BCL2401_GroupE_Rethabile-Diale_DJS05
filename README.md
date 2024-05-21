# Counter App - Redux-like State Management
This project is a simple implementation of a state management system inspired by Redux.

## Features
* Initial state setup
* Action types and action creators
* Reducer function to handle state transitions
* Store creation with getState, dispatch, and subscribe methods

## Files
* index.js

## Usage
1. Actions:
* INCREMENT: Increment the counter by 1.
* DECREMENT: Decrement the counter by 1.
* RESET: Reset the counter to 0.
* ADD: Increment the counter by 1 (same as INCREMENT).
* SUBTRACT: Decrement the counter by 1 (same as DECREMENT).

2. Reducer:
* Handles the state transitions based on the dispatched actions.

3. Store:
* getState(): Returns the current state.
* dispatch(action): Dispatches an action to change the state.
* subscribe(listener): Subscribes a listener to state changes.
