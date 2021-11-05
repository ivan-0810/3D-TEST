import { useEffect } from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import favicon from '../public/onebeer-favicon-black.svg'
  const Layout = props => {
  const { bg_color,menu_text, menu_icons, single_beer_logo } = props;
  const spinner = useSelector(state => state.spinner.is_spinner_loading);
  const dispatch = useDispatch();
  const router = useRouter();


  return (
    <div className={`content-wrapper m-0 p-0`}>
      <Head>
        <meta name="description" content="Une Bière, Six Saveurs, Histoires Infinies" />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="One Beer" />
        <meta property="og:description" content="Une Bière, Six Saveurs, Histoires Infinies" />
        <meta property="og:url" content="https://onebeer.fr/" />
        <title>3D TESTr</title>
        <link rel="shortcut icon" href={favicon} />
      </Head>

      <main className="main-content">{props.children}</main>
    </div>
  );
};

export default Layout;
