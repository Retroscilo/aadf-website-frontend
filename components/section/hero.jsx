import getMediaFromAttributes from "../../utils/getMediaFromAttributes"
import Image from "next/image"
const Hero = ({ title, subtitle, background }) => {
  const media = getMediaFromAttributes(background)
  console.log(media)
  return (
    <div className="w-full" style={{ background: "crimson" }}>
      Hero
    </div>
  )
}

export default Hero
