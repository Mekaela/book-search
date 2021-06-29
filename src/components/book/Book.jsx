import styles from "./Book.module.scss";

const Book = ({ item }) => {

    return (
        <section className={styles.Book}>
            <a className={styles.Book__title} href={item.volumeInfo?.previewLink}>{item.volumeInfo.title}</a>
            <img src={item.volumeInfo?.imageLinks?.smallThumbnail} alt='book cover unavailable' />
            <p>{item.volumeInfo.authors}</p>
            <p>{item.volumeInfo.description}</p>
        </section>
    );
};

export default Book;
