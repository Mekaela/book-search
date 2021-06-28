import styles from "./Book.module.scss";

const Book = ({ item }) => {

    return (
        <section className={styles.Book}>
            <h2>{item.volumeInfo.title}</h2>
            {/* <img src={item.volumeInfo.imageLinks.smallThumbnail} alt='' /> */}
            <p>{item.volumeInfo.authors}</p>
            <p>{item.volumeInfo.description}</p>
        </section>
    );
};

export default Book;
