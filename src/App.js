import './App.css';
import GetData from './components/GetData';
// import Results from './containers/Results';
import Start from "./containers/Start";
import styles from "./App.module.scss";

const App = () => {
    return (
        <>
            <Start />
            <GetData />
        </>
    );
};

export default App;

