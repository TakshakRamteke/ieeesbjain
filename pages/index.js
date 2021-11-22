import Head from 'next/head';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css'

const Home = () =>{
  return(
    <div>
      <Head>
          <title>
            Home Page
          </title>
      </Head>
      <Layout>
        <div className={styles.container}>
          <div className={styles.heading}>
            <h1>IEEE S.B.Jain Student Branch</h1>
            <span className={styles.statement}> Tech for the benefit of humanity</span>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Home