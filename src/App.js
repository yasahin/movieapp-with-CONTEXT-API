
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import WatchList from "./components/WatchList"
import "./lib/fontawesome/css/all.min.css"
import './App.css';
import Header from './components/Header';
import Watched from "./components/Watched";
import Add from "./components/Add";
import { GlobalProvider } from "./components/context/GlobalState";



function App() {
  return (
<GlobalProvider>
<Router>
<Header/>
<Routes>
  <Route path="/" element={<WatchList/>}/>
  <Route path="/watched" element={<Watched/>}/>
  <Route path="/add" element={<Add/>}/>

</Routes>
</Router>
</GlobalProvider>
  
  );
}

export default App;
