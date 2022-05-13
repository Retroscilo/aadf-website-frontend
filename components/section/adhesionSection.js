import MarkdownToJsx from "../../utils/markdownToJsx"
import ButtonLink from "../element/buttonLink"
import CustomImage from "../element/customImage"
import { v4 as uuidv4 } from "uuid"


const AdhesionSection = ({
  title,
  images,
  buttonLink,
  description,
  ...props
}) => {
  return (
    <section className="container">
      <h1 className="text-center">{title}</h1>
      <div className="flex flex-col gap-y-[5.5rem] sm:flex-row sm:justify-between">
        <article className="sm:w-1/2">
          <MarkdownToJsx>{description}</MarkdownToJsx>
          {buttonLink && (
            <div className="hidden sm:inline-block ml-[1.4rem] mt-[4rem]">
              <ButtonLink className={""} {...buttonLink} />
            </div>
          )}
        </article>
        <article className="w-full sm:w-1/4 flex flex-col gap-y-[5rem]">
          {images?.map((image) => (
            <CustomImage key={uuidv4()} {...image} />
          ))}
        </article>
        {buttonLink && (
          <div className="flex justify-center sm:hidden ml-[1.4rem] mt-[4rem]">
            <ButtonLink className={""} {...buttonLink} />
          </div>
        )}
      </div>
    </section>
  )
}
export default AdhesionSection
