import Image from "next/image";

export async function getStaticPaths() {
    const query = `{
        eventCollection{
          items{
            slug
          }
        }
      }`;
      const response = await fetch (
        `https://graphql.contentful.com/content/v1/spaces/${process.env.SPACE}/environments/master`, {
          method : "POST",
          headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${process.env.ACCESSTOKEN}`,
          },
          body : JSON.stringify({ query }),
        }
        )
        .then((res) => res.json());
        const slugs = response.data.eventCollection.items;
        const paths = slugs.map((event) => ({ params: { slug: event.slug } }));
        return {
            paths,
            fallback: false,
        }
}

export async function getStaticProps({ params }) {
    const query = `query getEvent($slug : String!){
        eventCollection (where : {slug: $slug}){
            items{
              name
              slug
              poster{
                url
                description
                width
                height
              }
            }
          }
      }`
    const variables = { slug: params.slug };
    const response = await fetch (
        `https://graphql.contentful.com/content/v1/spaces/${process.env.SPACE}/environments/master`, {
          method : "POST",
          headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${process.env.ACCESSTOKEN}`,
          },
          body : JSON.stringify({ query, variables }),
        }
        )
        .then((res) => res.json());

    return{
        props: {
            event : response.data.eventCollection.items[0],
        }
    }
}

export default function Event({ event }) {
    return(
      <div>
        <h2>{event.name}</h2>
        <Image
          src={event.poster.url}
          width={event.poster.width}
          height={event.poster.height}
          layout="intrinsic"
          alt={event.poster.description}
        />
        <br/>
        <h3>{event.poster.description}</h3>
      </div>
    );
}