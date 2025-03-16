import { createStore, applyMiddleware } from 'redux';
import logger from "redux-logger";

// Pass it as a middleware
const middlewares = [logger];

// Action types
const ADD_TASK = 'task/add';
const REMOVE_TASK = 'task/remove';

// Step 1 : Create a reducer function
const initialState = {
    tasks: [],
}

// Reducer function to handle task actions
const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            }
        case REMOVE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((task, index) => index !== action.payload),
            }
        default:
            return state;
    }
}

// Step 2 : Create a Redux store with the taskReducer
/**
 * Creates a Redux store that holds the state tree.
 * The store is created with the taskReducer and applies the specified middlewares.
 *
 * @constant {Store} store - The Redux store.
 */
const store = createStore(taskReducer, applyMiddleware(...middlewares));
console.log(store)


// Log the initial state of the store
console.log('Initial store state:', store.getState())


// Dispatch an action to add a task
// store.dispatch({
//     type: ADD_TASK,
//     payload: 'Learn Redux',
// })


// store.dispatch({
//     type: ADD_TASK,
//     payload: 'Learn React',
// })


const addTask = (inputTask) => {
    return {
        type: ADD_TASK,
        payload: inputTask,
    }
}
store.dispatch(addTask('Learn React'))
store.dispatch(addTask('Learn Redux'))

console.log("After adding tasks", store.getState())

// store.dispatch({
//     type: REMOVE_TASK,
//     payload: 1,
// })


const deleteTask = (taskIndex) => {
    return {
        type: REMOVE_TASK,
        payload: taskIndex,
    }
}

store.dispatch(deleteTask(1))

console.log("After task removed", store.getState())

