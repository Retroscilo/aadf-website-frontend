import MarkdownToJsx from "../../utils/markdownToJsx"
import Image from "../image"

const OneMission = ({ content, icon }) => {
  return (
    <div>
      <div className="w-[96px]">
        <Image image={icon} />
      </div>
      <MarkdownToJsx>{content}</MarkdownToJsx>
    </div>
  )
}

export default OneMission
