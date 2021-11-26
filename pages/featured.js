import Head from 'next/head'
import Layout from '../components/layout';
import commonStyle from '../styles/Common.module.css'
import styles from '../styles/Featured.module.css';

const Featured = () =>{
  return(
    <Layout>
      <Head>
        <title>
          Featured Page
        </title>
      </Head>
      <div className={commonStyle.verticalContainer}>
        <h3 className={styles.H3}>Some Things we are Proud of !</h3>
        <div className={styles.featuredProjects}>
          <h3>Featured Projects</h3>
        </div>
        <div className={styles.featuredStudent}>
          <h3>Featured Students</h3>
        </div>
      </div>
    </Layout>
  );
}

export default Featured