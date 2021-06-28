import { useState, useEffect } from "react";
import axios from 'axios';
import Results from "../../containers/Results";
import Search from "../../components/Search";

const GetData = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState('');

    useEffect (() => {
        const fetchItems = async () => {
            setIsLoading(true);
            const result = await axios(`https://books.googleapis.com/books/v1/volumes?q=${query}&maxResults=18`
            );
            setItems(result.data.items);
            setIsLoading(false);
        }
        fetchItems();
    }, [query]);
    // console.log(items);
    return (
        <>
            <Search getQuery={(q) => setQuery(q)}/>
            <Results isLoading={isLoading} items={items} />
        </>
    )
}

// return fetch("'https://books.googleapis.com/books/v1/volumes?q={searchTerm}&maxResults=20'")


//from the API I need: an image, author, title and description
//"volumeInfo": {
    // "title": "The Invisible String",
    //x.items[i].volumeInfo.title
    // "authors": [
    //   "Patrice Karst"
    // ],
    // x.items[i].volumeInfo.authors
    //"description":
    //x.items[i].volumeInfo.description;
    // "imageLinks": {
    //     "smallThumbnail": "http://books.google.com/books/content?id=9STVDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //     "thumbnail": "http://books.google.com/books/content?id=9STVDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    //   },
    //x.items[i].imageLinks.smallThumbnail


    export default GetData;