import React from 'react'

const Search = ({search, onChange }) => {
    return (
        <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={onChange}
            className="border p-2 rounded w-full sm:w-60"
        />
    )
}

export default Search