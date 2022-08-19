import SearchIcon from "@mui/icons-material/Search";

const Search = ({
  value,
  handleChange,
  handleSearchFocusChange,
  isFocused,
}) => {
  return (
    <div>
      <div
        className={`absolute right-4 h-10 overflow-hidden transition-width duration-300 ${
          isFocused ? "w-64" : "w-60"
        }`}
      >
        <input
          type="text"
          placeholder="Search Facebook"
          className={`bg-gray-100 w-full h-full rounded-full pr-4 text-sm placeholder-gray-500 transition-all duration-300
            ${isFocused ? "pl-4" : "pl-10"}
          `}
          value={value}
          onFocus={() => handleSearchFocusChange(true)}
          onBlur={() => handleSearchFocusChange(false)}
          onChange={(event) => handleChange(event.target.value)}
        />

        <SearchIcon
          className={`absolute top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-300
            ${isFocused ? "-left-10" : "left-2.5"}
          `}
          style={{ fontSize: "22px" }}
        />
      </div>
    </div>
  );
};

export default Search;
