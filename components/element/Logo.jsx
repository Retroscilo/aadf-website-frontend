import { getStrapiMedia } from "../../lib/media"
import Image from "next/image"

const Logo = ({ data }) => {
  return (
    <div className="flex flex-col">
      <Image
        src={getStrapiMedia(data.logo)}
        width={50}
        height={50}
        layout="fixed"
        alt={data.logo.data.attributes.alternativeText}
      />
      <p>{data.title}</p>
    </div>
  )
}

export default Logo
