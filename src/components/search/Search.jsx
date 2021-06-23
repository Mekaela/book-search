const callAPI = async () => {
    
}
//with google api, q: input
// https://www.googleapis.com/books/v1/volumes?q={search terms}
//https://www.googleapis.com/books/v1/volumes?q=input - input from above are the search terms


const Search = () => {
    return (
        <section>
            {/* button needed if not dynamic */}
            <input class="search-input" placeholder="Search here"></input>
            {/* render search results to "book" component */}
        </section>
    );
};



export default Search;