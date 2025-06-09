import { useState } from 'react'

function useToggle(intialVal = false) {
  //call useState, 'reserve piece of state'
  const [ state,setState] = useState(intialVal);
  const toggle = () => {
    setState(!state);
  }
  //return peice of state AND a functionto toggle it
  return [state,toggle]
}

export default useToggle
