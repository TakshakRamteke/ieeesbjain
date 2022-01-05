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
          width
          height
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

    console.log(response)

  return {
    props : {
      events : response.data.eventCollection.items,
    },
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
              <>
              <Image
              src = {event.poster.url}
              height = {event.poster.height}
              width = {event.poster.width}
              />
              </>
            ))}
        </div>
      </div>
    </Layout>
  );
}

export default Events