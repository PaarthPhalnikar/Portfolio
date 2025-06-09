import React, {useContext} from 'react'
import { Verdict, ColorReducer, ColorState } from './hooks/colorCombo'
import ScrollProgress from './hooks/useScrollProgress'
import { Pcontext } from './hooks/Context'
export default function Remaining() {
    const { ColorDispatch, colorState } = useContext(Pcontext);
    const [status, toggle, setFalse] = Verdict();
    return (
        <div>
            <div className={status ? 'style_switcher plate' : 'style_switcher'} onClick={toggle} id="switchs">
                <a className='backgroundd'>
                    <i className="fa-solid fa-gear fa-spin"></i>
                </a>
                <h2>Color</h2>
                <div className="color-head">
                    {
                        ["blue", "black", "green", "violet", "red", "orange"].map((color,idx) => (
                            <span key={color} id={`color${idx+1}`} onClick={() => ColorDispatch({ color })}></span>
                        ))
                    }
                </div>
            </div>
            <div id="progress" className='scroll-top'>
                <span id="progress-value" className="pror">
                    <ScrollProgress />
                </span>
            </div>
        </div>
    )
}
