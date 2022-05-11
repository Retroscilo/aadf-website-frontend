import Image from "next/Image"
import { getStrapiMedia } from "../../lib/media"

const StyledImage = ({ data, width, height, ...props }) => (
  <div
    style={{
      position: "relative",
      boxShadow: "13px 14px 0px 1px #000000",
      overflow: "visible",
    }}
    {...props}
  >
    <Image
      src={getStrapiMedia(data)}
      alt={data.alt}
      layout="fill"
      objectFit="cover"
      placeholder="blur"
      blurDataURL={getStrapiMedia(data)}
    />
  </div>
)

export default StyledImage
