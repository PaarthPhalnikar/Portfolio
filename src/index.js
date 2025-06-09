import React, { useLayoutEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Elearning from './E-learningB/E-learning'
import Mobirise from './mobirise/mobi'
import Pokedex from './Pokedex/Pokegame'
import Coin from './Coin/CoinContainer'
import TodoApp from './TodoList/TodoApp'
// import TodoList from './TodoList/TodoApp'
import RollDice from './RollDice/RollDice'
import './index.css';
import { BrowserRouter, Routes, Route, useLocation ,HashRouter} from "react-router";
import App from './App';
import reportWebVitals from './reportWebVitals';
import Main from './main'
// import Swip from './swip'
const root = ReactDOM.createRoot(document.getElementById('root'));

const Wrapper = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return children;
};

root.render(
  <React.StrictMode>
    <HashRouter>
      <Wrapper>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Main />} />
            <Route path="/Home" element={<Main/>}/>
            <Route path="/About" element={<Main/>}/>
            <Route path="/Skills" element={<Main/>}/>
            <Route path="/Education" element={<Main/>}/>
            <Route path="/Projects" element={<Main/>}/>
            <Route path="/Contact" element={<Main/>}/>
            <Route path="Projects/E-learning" element={<Elearning />} />
            <Route path="Projects/Mobirise" element={<Mobirise />} />
            <Route path="/Projects/Pokedex" element={<Pokedex/>}/>
            <Route path="/Projects/Coin" element={<Coin/>}/>
            <Route path='/Projects/TodoApp' element={<TodoApp/>}/>
            <Route path='/Projects/RollingDice' element={<RollDice/>}/>
          </Route>
        </Routes>
      </Wrapper>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
