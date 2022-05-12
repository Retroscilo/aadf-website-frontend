import Image from "next/Image"
import { getStrapiMedia } from "../../lib/media"

const StyledImage = ({ data, width, height, ...props }) => (
    <div  
       className={`relative overflow-visible shadow-[13px_14px] ${bgColor[color]} ${className}`}
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
