import MarkdownToJsx from "../../utils/markdownToJsx"

const textSection = ({ paragraph }) => {
  return (
    <section className="container">
      <p className="max-w-[890px] mx-auto sm:px-40 px-10 textSection">
        {<MarkdownToJsx>{paragraph}</MarkdownToJsx>}
      </p>
    </section>
  )
}

export default textSection
