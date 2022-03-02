import './App.css';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Howto from './Pages/Howto';
import Tellus from './Pages/Tellus';
import Workexperience from './Pages/Workexperience';
import Workinfo from './Pages/Workinfo';
import Education from './Pages/Education';
import Educationinfo from './Pages/Educationinfo';
import Skills from './Pages/Skills';
import Skillsinfo from './Pages/Skillsinfo';
import Summary from './Pages/Summary';
import Summaryinfo from './Pages/Summaryinfo';
import End from './Pages/End';
import store from './Store';
import {Provider} from 'react-redux';
import firebaseConfig from './Pages/Config';
import { initializeApp } from 'firebase/app';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

const app = initializeApp(firebaseConfig);
function App() {
  return (
    <Router>
      <Layout>
        <Provider store={store}>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/howto" element={<Howto/>} />
        <Route path="/tellus" element={<Tellus/>} />
        <Route path="/workexperience" element={<Workexperience/>} />
        <Route path="/workinfo" element={<Workinfo/>} />
        <Route path="/education" element={<Education/>} />
        <Route path="/educationinfo" element={<Educationinfo/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/skillsinfo" element={<Skillsinfo/>} />
        <Route path="/summary" element={<Summary/>} />
        <Route path="/summaryinfo" element={<Summaryinfo/>} />
        <Route path="/end" element={<End/>} />
        </Routes>
        </Provider>
      </Layout>
    </Router>
  );
}

export default App;
