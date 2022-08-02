import "../style/searchBar.styles.css";
const SearchBar = ({ setSearchNotes }) => {
  return (
    <div className="search-bar">
      <input
        onChange={(e) => setSearchNotes(e.target.value)}
        type="text"
        placeholder="🔍   Search Notes...."
      />
    </div>
  );
};
export default SearchBar;
