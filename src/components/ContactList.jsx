import { Box, Typography } from '@mui/material';
import usePhoneBookStore from '../stores/usePhoneBookStore';
import ContactItem from './ContactItem';

function ContactList() {
  const { phoneBook } = usePhoneBookStore();

  return (
    <Box sx={{ flex: 1, overflowY: 'auto' }}>
      <Typography variant="h8" gutterBottom>
        전체 연락처
      </Typography>
      {phoneBook.length > 0 ? (
        phoneBook.map((item) => <ContactItem key={item.id} item={item} />)
      ) : (
        <Typography color="text.secondary" fontSize={13} pt={2}>
          등록된 연락처가 없습니다.
        </Typography>
      )}
    </Box>
  );
}

export default ContactList;
