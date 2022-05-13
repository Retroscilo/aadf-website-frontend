import ArrowLink from "./arrowLink"
import Image from "next/image"
import { getStrapiMedia } from "../../lib/media"

const actionCard = ({ title, image, description, link }) => {
  return (
    <div className="grid-rows-[auto_200px_1fr] xl:w-[50%] w-[100%] inline-grid gap-20 my-20">
      <h2 className="text-center">{title}</h2>
      <div className="justify-self-center">
        <Image
          src={getStrapiMedia(image)}
          alt={image.data.attributes.alternativeText}
          blurDataURL={getStrapiMedia(image)}
          width={350}
          height={200}
          layout="fixed"
          objectFit="cover"
        />
      </div>
      <p className="max-w-[380px] text-center justify-self-center">
        {description}
      </p>
      <ArrowLink
        text={`En savoir plus sur ${title}`}
        url={link}
        style={{ justifyContent: "center" }}
      />
    </div>
  )
}

export default actionCard
