import Head from 'next/head';
import Layout from '../components/layout';
import commonStyle from '../styles/Common.module.css';
import styles from '../styles/Events.module.css';

const Events = () =>{
  return(
    <Layout>
      <Head>
        <title>
          Events Page
        </title>
      </Head>
      <div className={commonStyle.centerContainer}>
        <div className={styles.eventContainer}>
          <div className={styles.event}>
            Event 1
          </div>
          <div className={styles.event}>
            Event 2
          </div>
          <div className={styles.event}>
            Event 3
          </div>
          <div className={styles.event}>
            Event 4
          </div>
          <div className={styles.event}>
            Event 5
          </div>
          <div className={styles.event}>
            Event 6
          </div>
          <div className={styles.event}>
            Event 7
          </div>
          <div className={styles.event}>
            Event 8
          </div>
          <div className={styles.event}>
            Event 9
          </div>
          <div className={styles.event}>
            Event 10
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Events