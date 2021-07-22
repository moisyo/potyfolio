// CSSファイルのインポート classesやstylesといった名前がよくつけられる
import classes from "src/components/About/About.module.css";

import { SectionTitle } from "../SectionTitle";


const ITEMS = [
  {
    text: `テキスト
    改行`,
  },
]

export const About = () => {
  return (
    <section id="about" className={`${classes.bg} py-20 h-screen`}>
      <SectionTitle title="私たちについて" lead="ABOUT" Position="center"/>

    <div>
    {
    ITEMS.map((item) => {
      return (
        <div className="parent1">
          <p className="text-left whitespace-pre-wrap">{item.text}</p>
          </div>
      );
    })}
      </div>
      </section>

  )
}