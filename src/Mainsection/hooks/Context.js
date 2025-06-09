import React,{createContext,useReducer} from 'react'
import {ColorReducer} from './colorCombo'

export const Pcontext = createContext();

export default function ContextProv(props) {
  const [colorState,ColorDispatch]=useReducer(ColorReducer,{color: (JSON.parse(window.localStorage.getItem('color')) || ["dark-blue-backgroundColor",'#008fff','#c0c0ff'])});
  // console.log(ColorDispatch)
  return (
        <Pcontext.Provider value={{colorState,ColorDispatch}}>
            {props.children}
        </Pcontext.Provider>
  )
}
