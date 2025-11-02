import { useState } from 'react';
import { Box } from '@mui/material';
import ContactForm from './components/ContactForm';
import SearchBar from './components/SearchBar';
import ContactList from './components/ContactList';
import SearchResultList from './components/SearchResultList';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <Box
        sx={{
          maxWidth: 1000,
        }}
      >
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
          📱 Phone Book
        </h1>

        {/* 위쪽: 추가 폼 */}
        <ContactForm />

        {/* 가운데: 검색창 */}
        <Box mt={3}>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </Box>

        {/* 아래쪽: 전체 리스트 + 검색 결과 (좌우 50%) */}
        <Box
          mt={3}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'stretch',
            width: '100%',
            gap: 3,
          }}
        >
          {/* 왼쪽: 전체 연락처 */}
          <Box
            sx={{
              width: '50%',
              borderRadius: '16px',
              p: 1,
              display: 'flex',
              flexDirection: 'column',
              overflowY: 'auto', // ✅ 스크롤 내부에서만
              scrollbarWidth: 'thin',
            }}
          >
            <ContactList />
          </Box>

          {/* 오른쪽: 검색 결과 */}
          <Box
            sx={{
              width: '50%',
              borderRadius: '16px',
              p: 1,
              display: 'flex',
              flexDirection: 'column',
              overflowY: 'auto', // ✅ 스크롤 내부에서만
              scrollbarWidth: 'thin',
            }}
          >
            <SearchResultList searchTerm={searchTerm} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
