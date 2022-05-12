import MarkdownToJsx from "../../utils/markdownToJsx"
import ArrowLink from "../element/arrowLink"
import CustomImage from "../element/customImage"
import { useRouter } from "next/router"

const PresentationSection = ({
  title,
  content,
  image,
  imageFirst,
  arrowLink,
}) => {
  return (
    <section className="container">
      <h2 className="text-center">{title}</h2>
      <div className={`flex flex-col lg:flex-row gap-y-[35px] lg:gap-y-[0px] lg:gap-x-[172px]`}>
        <div className={`w-full sm:w-[60%] lg:w-full  ${imageFirst ? "md:px-[35px] m-auto lg:m-0 order-first" : "order-last"}`}>
          <CustomImage {...image} />
        </div>
        <div className={`w-full`}>
          <MarkdownToJsx>{content}</MarkdownToJsx>
        </div>
      </div>
      <div className="flex lg:justify-center">
        <ArrowLink {...arrowLink} />
      </div>
    </section>
  )
}

export default PresentationSection
