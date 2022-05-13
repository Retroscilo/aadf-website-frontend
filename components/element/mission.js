import MarkdownToJsx from "../../utils/markdownToJsx"
import Image from "../image"

const OneMission = ({ content, icon, isLast }) => {
  console.log({isLast})
  return (
    <div className="flex flex-row gap-x-[20px] items-center lg:flex-col lg:justify-center lg:items-center lg:gap-y[24px]">
      <div className={`w-[38px] lg:after:hidden relative flex-none md:w-[96px] ${!isLast ? "underlined-black": ''}`}>
        <Image image={icon} />
      </div>
      <div className="h-auto lg:h-[139px] text-center lg:w-[325px] lg:pt-[41px]">
        <MarkdownToJsx>{content}</MarkdownToJsx>
      </div>
    </div>
  )
}

export default OneMission
