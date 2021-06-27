import styles from "./Book.module.scss";

const Book = ({ item }) => {

    return (
        <section className={styles.Book}>
            <img src={item.volumeInfo.imageLinks.smallThumbnail} alt='' />
            <h2>{item.volumeInfo.title}</h2>
            <p>{item.volumeInfo.authors}</p>
            <p>{item.volumeInfo.description}</p>
        </section>
    );
};

export default Book;
