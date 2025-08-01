
import React, {useState} from "react";

function SearchBar({ onSearch }){
    const [query, setQuery] = useState("");

    const handleSearch = () =>{
        if(query.trim () !== ""){
            onSearch(query);
        }
    }

    return(
        <div className="search-bar">
<input type="text" placeholder="Search for a movie..."
value={query}
onChange={(e) => setQuery(e.target.value)}/>

<button onClick={handleSearch}>Search</button>

        </div>
    )
}

export default SearchBar;