import styles from "./GetData.module.scss";
import { useState, useEffect } from "react";
import axios from 'axios';
import Results from "../../containers/Results";
import Search from "../../components/Search";

const GetData = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState('');

    // console.log(items);

    useEffect (() => {
        const fetchItems = async () => {
            setIsLoading(true);
            //the search string is not being put in to {query};
            const result = await axios(`https://books.googleapis.com/books/v1/volumes?q=${query}&maxResults=18`
            );
            setItems(result.data.items);
            setIsLoading(false);
        }
        fetchItems();
    }, [query]);
    console.log(items);

    const handleSearchChange = (searchString) => {
            setQuery(searchString);
            console.log(query)
        };

    return (
        <>
            <div className={styles.Search}>
                <Search onSubmit={handleSearchChange}/>
            </div>
            <article className={styles.App}>
                <Results isLoading={isLoading} items={items} /> 
            </article>
        </>
    )
}

    export default GetData;