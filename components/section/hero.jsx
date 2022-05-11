import getMediaFromAttributes from "../../utils/getMediaFromAttributes"
import { getStrapiMedia } from "../../lib/media"
import Image from "next/image"

const Hero = ({ title, subtitle, background }) => {
  return (
    <div
      className="w-full mb-[100px]"
      style={{
        background: `url(${getStrapiMedia(background)})`,
        backgroundSize: "cover",
        minHeight: "478px",
        position: "relative",
      }}
    >
      <div className="ml-0 sm:ml-1 w-[80%] sm:w-[433px] pt-[150px]">
        <h1 className="text-white uppercase ">{title}</h1>
        <h3 className="text-white ">{subtitle}</h3>
      </div>
    </div>
  )
}

export default Hero
