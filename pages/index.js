import Head from 'next/head'
import Layout from '../components/layout';
const Home = () =>{
  return(
    <Layout>
      <Head>
        <title>
          Home Page
        </title>
      </Head>
        <h1>This is Home Page</h1>
    </Layout>
  );
}

export default Home