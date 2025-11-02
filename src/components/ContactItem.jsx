import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import usePhoneBookStore from '../stores/usePhoneBookStore';

function ContactItem({ item }) {
  const { deleteContact, updateContact } = usePhoneBookStore();
  const [editMode, setEditMode] = useState(false);
  const [editName, setEditName] = useState(item.name);
  const [editPhone, setEditPhone] = useState(item.phoneNumber);

  const handleUpdate = () => {
    if (!editName.trim() || !editPhone.trim()) return;
    updateContact(item.id, editName, editPhone);
    setEditMode(false);
  };

  return (
    <Box
      sx={{
        border: '1px solid #ccc',
        borderRadius: 2,
        p: 2,
        mt: 1.5,
        mb: 1,
        backgroundColor: '#f9f9f9',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {editMode ? (
        <>
          <TextField
            label="이름 수정"
            variant="outlined"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            fullWidth
            sx={{ mb: 1 }}
          />
          <TextField
            label="전화번호 수정"
            variant="outlined"
            value={editPhone}
            onChange={(e) => setEditPhone(e.target.value)}
            fullWidth
            sx={{ mb: 1 }}
          />
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              variant="contained"
              color="success"
              onClick={handleUpdate}
              sx={{ flex: 1 }}
            >
              저장
            </Button>
            <Button
              variant="outlined"
              onClick={() => setEditMode(false)}
              sx={{ flex: 1 }}
            >
              취소
            </Button>
          </Box>
        </>
      ) : (
        <>
          <Typography sx={{ mb: 2, textAlign: 'left' }}>
            <strong>이름:</strong> {item.name}
          </Typography>
          <Typography sx={{ mb: 1.5, textAlign: 'left' }}>
            <strong>전화번호:</strong> {item.phoneNumber}
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => setEditMode(true)}
              sx={{ flex: 1 }}
            >
              수정
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => deleteContact(item.id)}
              sx={{ flex: 1 }}
            >
              삭제
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}

export default ContactItem;
