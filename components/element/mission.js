import MarkdownToJsx from "../../utils/markdownToJsx"
import Image from "../image"

const OneMission = ({ content, icon }) => {
  return (
    <div className="flex flex-row lg:flex-col justify-center lg:items-center lg:gap-y-[24px]">
      <div className="w-[38px] md:w-[96px]">
        <Image image={icon} />
      </div>
      <div className="md:h-[139px] md:w-[325px] text-center pt-[41px]">
        <MarkdownToJsx>{content}</MarkdownToJsx>
      </div>
    </div>
  )
}

export default OneMission
