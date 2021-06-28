import Welcome from "../../components/Welcome";
import Search from "../../components/Search";
import styles from "./Start.module.scss";
import GetData from "../../components/GetData";

const Start = () => {
    return (
        <main>
            <article className={styles.Start}>
                <Welcome />
                {/* <Search getQuery={(q) => GetData.setQuery(q)}/> */}
            </article>
        </main>
    );
};

export default Start; 
