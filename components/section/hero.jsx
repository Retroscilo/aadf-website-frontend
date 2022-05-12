import getMediaFromAttributes from "../../utils/getMediaFromAttributes"
import { getStrapiMedia } from "../../lib/media"
import Image from "next/image"

const Hero = ({ title, subtitle, background }) => {
  return (
    <div
      className="w-full mb-[100px] flex flex-col align-middle justify-end"
      style={{
        background: `url(${getStrapiMedia(background)})`,
        backgroundSize: "cover",
        minHeight: "478px",
        position: "relative",
      }}
    >
      <div className="ml-0 md:ml-1 w-[433px] sm:w-[50%] py-32 max-w-[1500px]">
        <h1 className="text-white uppercase ">{title}</h1>
        <h3 className="text-white ">{subtitle}</h3>
      </div>
    </div>
  )
}

export default Hero
