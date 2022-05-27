import './App.css';
import { HomeView } from './view/HomeView';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { GameView } from './view/GameView';



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route 
            path="/"
            index
            element={<HomeView />}>

          </Route>
          <Route 
            path="/game" 
            element={<GameView />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
