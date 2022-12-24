import Pagination from '@mui/material/Pagination';
import { createTheme, ThemeProvider } from '@mui/material';
import { PaginationContainer } from './styles';


const theme = createTheme({
  palette: {
    color: {
      main: '#fff',
      contrastText: '#000000',
    },
  },
});



export default function PaginationComponent({ characterData, handlePagination, page }) {

  const totalPages = characterData?.info.pages
  return (
    <ThemeProvider theme={theme}>
      <PaginationContainer>
        <Pagination page={page} count={totalPages} color="color" onChange={handlePagination} size='medium' sx={{ button: { color: '#fff' } }} />
      </PaginationContainer>
    </ThemeProvider>
  );
}