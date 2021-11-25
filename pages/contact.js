import Head from 'next/head'
import Layout from '../components/layout';
import commonStyle from '../styles/Common.module.css';
import styles from '../styles/Contact.module.css';
import { LinkedinOutlined, InstagramOutlined, FacebookOutlined, TwitterOutlined} from '@ant-design/icons'

const Contact = () =>{
  return(
    <Layout>
      <Head>
        <title>
          Contact Page
        </title>
      </Head>
      <div className={commonStyle.verticalContainer}>
        <h2 className={styles.H2}>Wanna Get in Touch !</h2>
        <div className={styles.socials}>
          <h3 className={styles.H3}>Follow us on</h3>
          <LinkedinOutlined className={styles.icons}/>
          <InstagramOutlined className={styles.icons}/>
          <FacebookOutlined className={styles.icons}/>
          <TwitterOutlined className={styles.icons}/>
        </div>
        <div className={styles.contactForm}>
          <h3 className={styles.H3}>Drop A Hello !</h3>
          <form className={styles.form}>
            <div>
              <h3 >Your Name:</h3>
              <input type="text" name="fname" />
            </div>
            <div>
              <h3 >Your E-mail:</h3>
              <input type="email" name="lname" />
              </div>
            <div>
              <h3 >Your Message:</h3>
              <input type="email" name="lname" />
            </div>
            <input type="submit" value="Send" className={styles.submit}/>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Contact