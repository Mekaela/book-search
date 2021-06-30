import { useState } from "react";
import styles from './Search.module.scss';

const Search = ({ onSubmit }) => {
    const [text, setText] = useState('')

    const handleChange = (q) => setText(q.target.value);
    

    const handleClick = (q) => {
        onSubmit(text);
    }
    
    return (
        <section>
            <div className={styles.Search}>
                <input 
                    type="text" 
                    className={styles.Search__input} 
                    placeholder="Search here"
                    value={text}
                    onChange={handleChange}
                    >
                </input>
                <button 
                    className={styles.Search__button}
                    onClick={handleClick}
                    >
                        Search</button>
            </div>
        </section>
    );
};

export default Search;