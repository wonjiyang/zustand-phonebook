import { useState } from 'react';
import { Grid, TextField, Button, Alert, Box } from '@mui/material';
import usePhoneBookStore from '../stores/usePhoneBookStore';

function ContactForm() {
  const { addContact } = usePhoneBookStore();
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  // 전화번호 유효성 검사 함수
  const validatePhoneNumber = (num) => {
    const onlyNumbers = num.replace(/[^0-9]/g, '');
    return /^010\d{7,8}$/.test(onlyNumbers); // 010으로 시작 + 10~11자리
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
    if (e.key === 'Enter') {
      handleAddContact();
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="이름"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={handleKeyDown}
            fullWidth
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
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddContact}
            sx={{ padding: '15px 16px' }}
            fullWidth
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
