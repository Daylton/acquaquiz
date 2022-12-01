import Layout from "../components/Layout";
import { QuizProvider } from "../context/quiz";
import Jogo from "../components/Jogo";

export default function Quiz() {
  return (
    <>
      <Layout>
        <QuizProvider>
          <Jogo />
        </QuizProvider>
      </Layout>
    </>
  );
}
