import { useState } from "react";

const Search = () => {

    const [searchName, setSearchName] = useState('');

    console.log(searchName);

    return(
        <div>

            <input
            type="text"
            placeholder="Search City"
            className="border-2 border-gray-300 px-2 py-1 rounded"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            />

        </div>
    )
}

export default Search;