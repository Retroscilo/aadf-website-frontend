import MarkdownToJsx from "../../utils/markdownToJsx"

const textSection = ({ paragraph }) => {
  return (
    <p className="max-w-[890px] mx-auto sm:px-40 px-10 textSection container">
      {<MarkdownToJsx>{paragraph}</MarkdownToJsx>}
    </p>
  )
}

export default textSection
