import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider} from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { theme } from './config/theme';






const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);



