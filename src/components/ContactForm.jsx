import { useState } from 'react';
import { Grid, TextField, Button, Alert, Box } from '@mui/material';
import usePhoneBookStore from '../stores/usePhoneBookStore';

function ContactForm() {
  const { addContact } = usePhoneBookStore();
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const validatePhoneNumber = (num) => {
    const onlyNumbers = num.replace(/[^0-9]/g, '');
    return /^010\d{7,8}$/.test(onlyNumbers);
  };

  const handleAddContact = () => {
    if (!name.trim() || !phoneNumber.trim()) {
      setError('이름과 전화번호를 모두 입력해주세요.');
      return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      setError('올바른 전화번호 형식이 아닙니다.');
      return;
    }

    addContact(name.trim(), phoneNumber.trim());
    setName('');
    setPhoneNumber('');
    setError('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAddContact();
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Grid
        container
        spacing={2}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 2,
          '@media (max-width:550px)': {
            flexDirection: 'column',
          },
        }}
      >
        <Grid item xs={12} sm={6}>
          <TextField
            label="이름"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={handleKeyDown}
            fullWidth
            InputProps={{ sx: { padding: '4px 8px', fontSize: '0.9rem' } }}
            InputLabelProps={{ sx: { fontSize: '0.85rem', top: '-2px' } }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="전화번호"
            variant="outlined"
            placeholder="010-1234-5678"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            onKeyDown={handleKeyDown}
            fullWidth
            InputProps={{ sx: { padding: '4px 8px', fontSize: '0.9rem' } }}
            InputLabelProps={{ sx: { fontSize: '0.85rem', top: '-2px' } }}
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddContact}
            fullWidth
            sx={{ padding: '10px 15px' }}
          >
            추가
          </Button>
        </Grid>
      </Grid>

      {error && (
        <Box mt={2}>
          <Alert severity="error">{error}</Alert>
        </Box>
      )}
    </Box>
  );
}

export default ContactForm;
