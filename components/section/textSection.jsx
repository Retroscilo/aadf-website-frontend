import MarkdownToJsx from "../../utils/markdownToJsx"
import ButtonLink from "../element/buttonLink"

const textSection = (props) => {
  const paragraph = props.paragraph
  const style = {
    backgroundColor: props.couleur_de_fond === "rouge" ? "crimson" : "inherit",
    color: props.couleur_de_fond === "rouge" ? "white" : "black",
  }

  return (
    <section
      className={`w-full max-width-[1500px] mx-auto py-10 ${
        props.couleur_de_fond === "rouge" ? "textSectionRed" : ""
      }`}
      style={style}
    >
      <p className="max-w-[890px] mx-auto sm:px-40 px-10 textSection">
        {<MarkdownToJsx>{paragraph}</MarkdownToJsx>}
      </p>
      {/* {props.button && (
        <ButtonLink
          text={props.button.text}
          color={props.button.color}
          url={props.button.url}
        />
      )} */}
    </section>
  )
}

export default textSection
