import Welcome from "../../components/Welcome";
import Search from "../../components/Search";
import styles from "./Start.module.scss";


const Start = () => {
    return (
        <main>
            <article className={styles.Start}>
                <Welcome />
                <Search />
            </article>
        </main>
    );
};

export default Start; 
