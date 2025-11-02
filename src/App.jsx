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
        px: { xs: 2, md: 4 },
        py: { xs: 4, md: 6 },
      }}
    >
      <Box sx={{ width: '100%', maxWidth: 1000 }}>
        <h1
          style={{
            textAlign: 'center',
            marginBottom: '2rem',
            fontSize: '1.7rem',
          }}
        >
          Phone Book
        </h1>

        <ContactForm />

        <Box mt={3}>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </Box>

        <Box
          mt={3}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 3,
            width: '100%',
          }}
        >
          <Box
            sx={{
              width: { xs: '100%', md: '50%' },
              borderRadius: 2,
              p: 1,
              display: 'flex',
              flexDirection: 'column',
              overflowY: 'auto',
              height: { xs: 300, md: 400 },
              scrollbarWidth: 'thin',
              backgroundColor: '#f5f5f5',
            }}
          >
            <ContactList />
          </Box>

          <Box
            sx={{
              width: { xs: '100%', md: '50%' },
              borderRadius: 2,
              p: 1,
              display: 'flex',
              flexDirection: 'column',
              overflowY: 'auto',
              height: { xs: 300, md: 400 },
              scrollbarWidth: 'thin',
              backgroundColor: '#f5f5f5',
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
