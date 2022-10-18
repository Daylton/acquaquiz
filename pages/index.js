import Head from "next/head";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css";
import {QuizProvider} from "../context/quiz"
import Jogo from "../components/Jogo";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Acqua Quiz</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <QuizProvider>
        <Jogo/>
      </QuizProvider>
    </div>
  );
}
