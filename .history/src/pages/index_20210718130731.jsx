import {Header} from "../components/Header"
import { About } from "../components/About"
import { Skills } from "src/components/Skills"

const Home = () => {
  return (
// returnの中が実際に表示される部分になり、複数行になる場合は一つのタグ（sectionタグ推奨？）でwrapされている必要がある。
<section>
    {/* Headerを読み込む */}
      <Header />

      <About />

      <Skills />
  </section>
  );
};
export default Home;
