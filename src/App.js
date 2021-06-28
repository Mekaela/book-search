import './App.css';
import GetData from './components/GetData';
// import Results from './containers/Results';
import Start from "./containers/Start";
import styles from "./App.module.scss";

const App = () => {
    return (
        <>
            <Start />
            <article className={styles.App}>
                <GetData />
                {/* <Results items={GetData.items} isLoading={GetData.isLoading} /> */}
            </article>
        </>
    );
};

export default App;

