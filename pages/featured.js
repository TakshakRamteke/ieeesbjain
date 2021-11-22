import Head from 'next/head'
import Layout from '../components/layout';

const Featured = () =>{
  return(
    <Layout>
      <Head>
        <title>
          Featured Page
        </title>
      </Head>
      <h1>Featured Page</h1>
    </Layout>
  );
}

export default Featured