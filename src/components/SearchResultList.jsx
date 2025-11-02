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
      <Typography sx={{ fontSize: { xs: '0.85rem', md: '1rem' }, mb: 1 }}>
        검색 결과
      </Typography>
      {!searchTerm.trim() ? (
        <Typography
          color="text.secondary"
          sx={{ fontSize: { xs: '0.75rem', md: '0.85rem' } }}
        ></Typography>
      ) : filteredList.length > 0 ? (
        filteredList.map((item) => <ContactItem key={item.id} item={item} />)
      ) : (
        <Typography
          color="text.secondary"
          sx={{ fontSize: { xs: '0.75rem', md: '0.85rem' }, pt: 1 }}
        >
          검색 결과가 없습니다.
        </Typography>
      )}
    </Box>
  );
}

export default SearchResultList;
