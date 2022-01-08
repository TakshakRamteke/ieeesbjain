import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout';
import commonStyle from '../styles/Common.module.css';
import styles from '../styles/Events.module.css';

export async function getStaticProps(){

  const query = `{
    eventCollection{
      items{
        name
        poster{
          url
        }
      }
    }
  }`

  const response = await fetch (
    `https://graphql.contentful.com/content/v1/spaces/${process.env.SPACE}/environments/master`,
    {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        Authorization : `Bearer ${process.env.ACCESSTOKEN}`,
      },
      body : JSON.stringify({query}),
    }
    ).then((res) => res.json());

  return {
    props : {
      events : response.data.eventCollection.items,
    },
    revalidate: 5,
  }
}


const Events = ({events}) =>{
  return(
    <Layout>
      <Head>
        <title>
          Events Page
        </title>
      </Head>
      <div className={commonStyle.centerContainer}>
        <div className={styles.eventContainer}>
            {events.map((event) => (
              <div className={styles.event}>
                <h3>{event.name}</h3>
              <Image
              src = {event.poster.url}
              height = {194.5}
              width = {314}
              />
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
}

export default Events