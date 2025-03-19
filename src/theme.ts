import { createTheme } from '@mui/material/styles';

const theme = (darkMode: boolean) => {
  return createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#90caf9' : '#1976d2', 
      },
      background: {
        default: darkMode ? '#121212' : '#f5f5f5', 
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
  });
};

export default theme;
