import getMediaFromAttributes from "../../utils/getMediaFromAttributes"
import { getStrapiMedia } from "../../lib/media"
import Image from "next/image"

const Hero = ({ title, subtitle, background }) => {
  const media = getMediaFromAttributes(background)
  console.log(getStrapiMedia(background))
  return (
    <div className="w-full" style={{ background: "crimson" }}>
      <Image src={getStrapiMedia(background)} width={100} height={100} alt="" />
    </div>
  )
}

export default Hero
