import React, {createContext, useContext, useReducer} from 'react';

//prepares the data layer
export const StateContext = createContext();

//wrap our app and provide the data layer inside of our app
export const Stateprovider =({reducer, initialState, children}) =>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//be able to pull information from the data layer
export const useStateValue = () => useContext(StateContext); 