import MarkdownToJsx from "../../utils/markdownToJsx"
import ArrowLink from "../element/arrowLink"
import CustomImage from "../element/customImage"

const PresentationSection = ({
  title,
  content,
  image,
  imageFirst,
  arrowLink,
}) => {
  return (
    <section className="">
      <h2 className="text-center">{title}</h2>
      <div className={`flex w-full container justify-between gap-x-[172px]`}>
        <div className={`w-full  ${imageFirst ? "order-first" : "order-last"}`}>
          <CustomImage {...image} />
        </div>
        <div className={`w-full`}>
          <MarkdownToJsx>{content}</MarkdownToJsx>
        </div>
      </div>
      <div className="flex justify-center">
        <ArrowLink {...arrowLink} />
      </div>
    </section>
  )
}

export default PresentationSection
