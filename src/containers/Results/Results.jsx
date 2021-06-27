import Book from "../../components/Book";
import styles from "./Results.module.scss";

const Results = ({ items, isLoading }) => {
    return isLoading ? (<h1>Loading...</h1>) : (<section className={styles.Card}>
            {items.map((item) => (
                <Book key={item.id} item={item} />
            ))}
            </section>
    )};

export default Results;