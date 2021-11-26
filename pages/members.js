import Head from 'next/head';
import Layout from '../components/layout';
import commonStyle from '../styles/Common.module.css';
import styles from '../styles/Members.module.css';

const Members = () =>{
  return(
    <Layout>
      <Head>
        <title>
          Members Page
        </title>
      </Head>
        <div className={commonStyle.container}>
          <div className={styles.container}>
            <h3 className={styles.H3}>Our Members</h3>
            <div className={styles.officeBearers}>
              Office Bearers
            </div>
            <div className={styles.societies}>
              <div>
                Computer Society
              </div>
              <div>
                Power and Energy Society
              </div>
            </div>
          </div>
        </div>
    </Layout>
  );
}

export default Members