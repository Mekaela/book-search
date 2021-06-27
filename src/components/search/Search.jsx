// import { useState } from "react";

const Search = ({ getQuery }) => {
    // const [text, setText] = useState('')
    // const onChange = (q) => {
    //     setText(q)
    //     getQuery(q)
    // }
    
    return (
        <section>
            <form>
                <input 
                    type="text" 
                    className="search-input" placeholder="Search here"
                    // value={text}
                    // onChange={(e) => onChange(e.target.value)}
                    // autoFocus
                    >
                </input>
            </form>
        </section>
    );
};

// const searchInput = document.querySelector(".search-input");

export default Search;