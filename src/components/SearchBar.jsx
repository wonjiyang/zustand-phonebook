import { TextField } from '@mui/material';

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <TextField
      label="이름 또는 전화번호 검색"
      variant="outlined"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      fullWidth
      InputProps={{
        sx: {
          padding: '4px 8px',
          fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
        },
      }}
      InputLabelProps={{
        sx: {
          fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' },
          top: '-2px',
        },
      }}
    />
  );
}

export default SearchBar;
