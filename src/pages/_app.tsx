import ReactGA from 'react-ga';
import theme from '../config/theme/theme';
import 'antd/dist/antd.css';

import { ThemeProvider } from 'styled-components';

ReactGA.initialize('UA-108478785-1', { debug: true });

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme} value={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
