import { TextField } from '@mui/material';

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <TextField
      label="이름 또는 전화번호 검색"
      variant="outlined"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      fullWidth
    />
  );
}

export default SearchBar;
