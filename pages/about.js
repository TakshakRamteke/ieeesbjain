import Head from 'next/head'
import Layout from '../components/layout';
import common from '../styles/Common.module.css'
import styles from '../styles/About.module.css'

const About = () =>{
  return(
    <Layout>
      <Head>
        <title>
          About Page
        </title>
      </Head>
      <div className={common.verticalContainer}>
        <div className={styles.container}>
            <div className={styles.image}>
              Image
            </div>
            <div className={styles.quesContainer}>
            <h2>What is a Student Branch ?</h2>
            <span>An IEEE Student Branch provides opportunities to meet and 
              learn from fellow IEEE Student and Graduate Student Members
              and engage with professional IEEE members locally</span>
            </div>
        </div>
        <div className={styles.containerEven}>
            <div className={styles.imageEven}>
              Image
            </div>
            <div className={styles.quesContainer}>
            <h2>What a Student Branch does ?</h2>
            <span>An IEEE Student Branch provides opportunities to meet and 
              learn from fellow IEEE Student and Graduate Student Members
              and engage with professional IEEE members locally</span>
            </div>
        </div>
        <div className={styles.container}>
            <div className={styles.image}>
              Image
            </div>
            <div className={styles.quesContainer}>
            <h2>How are we any different ?</h2>
            <span>An IEEE Student Branch provides opportunities to meet and 
              learn from fellow IEEE Student and Graduate Student Members
              and engage with professional IEEE members locally</span>
            </div>
        </div>
      </div>
    </Layout>
  );
}

export default About