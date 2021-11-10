import Head from 'next/head';
import favicon from '../public/model.svg'
import image from '../public/Untitled-1.jpg'
  const Layout = props => {

  return (
    <div className={`content-wrapper m-0 p-0`}>
      <Head>
        <meta name="description" content="Une Bière, Six Saveurs, Histoires Infinies" />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        
        <meta property="og:image:secure_url" 
              content={image}
             />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tomorrow Lab" />
        <meta property="og:description" content="DIGITAL - ALTERNATIVE - CURATION" />
        <meta property="og:url" content="https://3-d-test.vercel.app/" />
        <meta
          property="twitter:image"
          content={image}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://3-d-test.vercel.app/" />

        <meta property="fb:pages" content="196280740558278" />
        <meta property="fb:app_id" content="843133229548398" />

        <title>3D TEST</title>
        <link rel="shortcut icon" href={favicon} />
      </Head>
   
      <main className="main-content">{props.children}</main>
    </div>
  );
};

export default Layout;
