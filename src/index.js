import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { SignUpModal } from './components';
import { GlobalStyle, defaultTheme, darkTheme } from './utils';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [useDarkTheme, setUseDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button
        onClick={() => setUseDarkTheme(true)}
        style={{ margin: '0 16px 24px', padding: '8px', background: 'none' }}
      >
        Dark theme
      </button>
      <button
        onClick={() => setUseDarkTheme(false)}
        style={{ margin: '0 16px 24px', padding: '8px', background: 'none' }}
      >
        Default theme
      </button>
      <button
        onClick={() => setShowModal(!showModal)}
        style={{ margin: '0 16px 24px', padding: '8px', background: 'none' }}
      >
        ShowModal
      </button>

      <div
        style={{
          background: useDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <SignUpModal showModal={showModal} setShowModal={setShowModal} />
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
