import '../styles/globals.css'
import Layout from '../components/Layout'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';
import NameProvider from '../context/NameContext';
import ClassProvider from '../context/ClassContext';
import DobProvider from '../context/DobContext';
  
//Three state trackers
// Name state
//Class state
//DOB state  


  const customTheme = createTheme({
      palette: {
        primary: {
          main: '#eceff4',
        },
      }
    });


function MyApp({ Component, pageProps }) {
  return (
    <DobProvider>
    <ClassProvider>
    <NameProvider>
      <ThemeProvider theme={customTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </NameProvider>
    </ClassProvider>
    </DobProvider>
  )
}

export default MyApp
