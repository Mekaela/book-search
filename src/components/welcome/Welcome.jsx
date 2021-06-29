import styles from './Welcome.module.scss';

const Welcome = () => {
    return (
        <section>
            <h1 className={styles.Header}>Welcome to Book Search</h1>
            <p className={styles.SubHeader}>
                Search your favourite books!
            </p>
        </section>
    );
};

export default Welcome;