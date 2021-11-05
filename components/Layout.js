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
        <meta property="og:type" content="website" />
        <meta property="og:title" content="3D TEST" />
        <meta property="og:description" content="3D TEST" />
        <meta property="og:url" content="https://3-d-test.vercel.app/" />
        <title>3D TEST</title>
        <link rel="shortcut icon" href={favicon} />
      </Head>

      <main className="main-content">{props.children}</main>
    </div>
  );
};

export default Layout;
