import Head from "next/head";
import styles from "../styles/Card.module.css";
import Layout from "../components/Layout";

const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";

export async function getServerSideProps() {
  const res = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=PL7jXiHIZusCASqJ0tXad5nHr1eImjTx0D&key=AIzaSyCBcEkpOmNxPHFU9R_GGQgC8IX0dUkYhGc`,
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default function Cards({ data }) {
  return (
    <>
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h2 className={styles.title}>Vídeos sobre a água</h2>

          <ul className={styles.grid}>
            {data.items.map(({ id, snippet = {} }) => {
              const { title, thumbnails = {}, resourceId = {} } = snippet;
              const { medium } = thumbnails;
              return (
                <li key={id} className={styles.card}>
                  <a
                    href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
                  >
                    <p>
                      <img
                        width={medium.width}
                        height={medium.height}
                        src={medium.url}
                        alt=""
                      />
                    </p>
                    <h3>{title}</h3>
                  </a>
                </li>
              );
            })}
          </ul>
        </main>

        <footer className={styles.footer}>
          <h1>Fatec Franca - PI 2º DSM</h1>
        </footer>
      </div>
      </Layout>
    </>

  );
}
