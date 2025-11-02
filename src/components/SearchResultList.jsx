import { Box, Typography } from '@mui/material';
import usePhoneBookStore from '../stores/usePhoneBookStore';
import ContactItem from './ContactItem';

function SearchResultList({ searchTerm }) {
  const { phoneBook } = usePhoneBookStore();

  const filteredList = phoneBook.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.phoneNumber.includes(searchTerm)
  );

  return (
    <Box sx={{ flex: 1, overflowY: 'auto' }}>
      <Typography variant="h8" gutterBottom>
        검색 결과
      </Typography>
      {!searchTerm.trim() ? (
        <Typography color="text.secondary"></Typography>
      ) : filteredList.length > 0 ? (
        filteredList.map((item) => <ContactItem key={item.id} item={item} />)
      ) : (
        <Typography color="text.secondary" fontSize={13} pt={2}>
          검색 결과가 없습니다.
        </Typography>
      )}
    </Box>
  );
}

export default SearchResultList;
