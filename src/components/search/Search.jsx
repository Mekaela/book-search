import { useState } from "react";
import styles from './Search.module.scss';

const Search = ({ getQuery }) => {
    const [text, setText] = useState('')
    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }
    
    return (
        <section>
            <form className={styles.Search}>
                <input 
                    type="text" 
                    className={styles.Search__input} placeholder="Search here"
                    value={text}
                    onChange={(e) => onChange(e.target.value)}
                    autoFocus
                    >
                </input>
                {/* <button 
                    className={styles.Search__button}
                    onClick={}>
                        Search</button> */}
            </form>
        </section>
    );
};

export default Search;