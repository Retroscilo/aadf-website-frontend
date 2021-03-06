import { getStrapiMedia } from "../../lib/media"
import CustomLink from "./customLink"

const Action = ({ title, subtitle, image, url }) => {
  return (
    <CustomLink url={url} newTab={false}>
      <div
        className={`w-full h-[22rem] md:h-[29rem] flex flex-col actionImage`}
        style={{
          backgroundImage: `url(${getStrapiMedia(image)})`,
        }}
      >
        <div className="inline-block bg-default py-[.6rem] px-[3rem] ml-auto">
          {subtitle}
        </div>
        <div className="mt-auto text-white bg-black bg-opacity-[41%] p-[2.6rem]">
          {title}
        </div>
      </div>
    </CustomLink>
  )
}

export default Action
