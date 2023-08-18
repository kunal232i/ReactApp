import "../style/searchBar.styles.css";

type SearchbarProp = {
  setSearchNotes: (search: string) => void;
}

const SearchBar: React.FC<SearchbarProp> = (props) => {
  const { setSearchNotes } = props;
  return (
    <div className="search-bar">
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchNotes(e.target.value)}
        type="text"
        placeholder="🔍   Search Notes...."
      />
    </div>
  );
};
export default SearchBar;
