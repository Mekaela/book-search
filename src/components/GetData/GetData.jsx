import { useState, useEffect } from "react";
import axios from 'axios';
import Results from "../../containers/Results";



const GetData = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect (() => {
        const fetchItems = async () => {
            setIsLoading(true);
            const result = await axios('https://books.googleapis.com/books/v1/volumes?q=string&maxResults=20'
            );
            // console.log(result.data.items);
            setItems(result.data.items);
            setIsLoading(false);
            // console.log(isLoading);
            //only logs the first time:
            // console.log(items);
        }
        fetchItems();
    }, []);
    // console.log(items);
    return (
        <>
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