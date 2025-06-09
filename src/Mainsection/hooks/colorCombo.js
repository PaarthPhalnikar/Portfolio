import React, { useState} from "react";
function ColorState() {
    const [ColorState, ColorUpdate] = useState('')
    const Change =(color) =>{
        ColorUpdate(color)
    }
    return [ColorState, Change]
}
export { ColorState }
function Verdict() {
    const [status, update] = useState(false)
    const toggle = () => {
        update(!status);
    }
    const setFalse = () => {
        update(false);
    }
    return [status, toggle, setFalse];
}
export { Verdict };
const colorThemes = {
  blue: ["dark-blue-backgroundColor", "#008fff", "#c0c0ff"],
  black: ["dark-backgroundColor", "#495057", "#ced4da"],
  green: ["dark-green-backgroundColor", "#00a896", "#ced4da"],
  violet: ["violet-backgroundColor", "#5a189a", "#ced4da"],
  red: ["dark-red-backgroundColor", "#ff0a54", "#ced4da"],
  orange: ["dark-orange-backgroundColor", "#FD7F20", "#ced4da"],
};

const ColorReducer = (state, action) => {
  if (colorThemes[action.color]) {
    window.localStorage.setItem("color", JSON.stringify(colorThemes[action.color]));
    return { color: colorThemes[action.color] };
  }
  return state;
};

export { ColorReducer }