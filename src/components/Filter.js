import React from 'react'

const Filter = ({selectedCategory, onChange ,categories }) => {
    return (
        <select
            value={selectedCategory}
            onChange={onChange}
            className="border p-2 rounded w-full sm:w-48"
        >
            {categories.map((cat) => (
                <option key={cat} value={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
            ))}
        </select>
    )
}

export default Filter