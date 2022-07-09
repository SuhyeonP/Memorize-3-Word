import normalize from 'emotion-normalize';
import { css, Global } from '@emotion/react';
import { GlobalPortal } from './GlobalPortal';
import { Router } from 'pages/Routes';
import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './style/sass/app.scss';
import Text from 'atom/Text';
import { colors } from 'style/colors';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalPortal.Provider>
        <Global
          styles={css`
            ${normalize}
            h1, h2, h3, h4, h5, h6 {
              font-size: 1em;
              font-weight: normal;
              margin: 0; /* or ‘0 0 1em’ if you’re so inclined */
            }
            * {
              box-sizing: border-box;
              padding: 0;
              margin: 0;
              font-family: SUIT-Medium;
            }

            html,
            body,
            #root {
              height: 100%;
            }
          `}
        />
        <Layout>
          <Router />
        </Layout>
      </GlobalPortal.Provider>
    </BrowserRouter>
  );
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      css={css`
        max-width: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
        height: auto;
      `}
    >
      <div css={css``}>
        <Text typography="main_title" fontWeight="bold" color={colors.main_blue}>
          Frontend 암기
        </Text>
        {children}
      </div>
    </div>
  );
}
