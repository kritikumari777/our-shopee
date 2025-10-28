import { TEXTS } from "@/app/constants/texts"

const Search = ({ search, onChange }) => {
    return (
        <input
            type="text"
            placeholder={TEXTS.SEARCH_PLACEHOLDER}
            value={search}
            onChange={onChange}
            className="border p-2 rounded w-full sm:w-60"
        />
    )
}

export default Search