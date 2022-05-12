import Image from "next/image"
import ArrowLink from "../element/arrowLink"
import CustomLink from "../element/customLink"
import { useMemo } from "react"
import { getStrapiMedia } from "../../lib/media"

const DataEvent = ({ data, url, ...props }) => {
  const date = useMemo(() => {
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
    const date = new Date(data.eventDate)
    return date.toLocaleDateString("fr-FR", options)
  }, [data])

  return (
    <CustomLink url={url} newTab={false}>
      <div className="flex flex-col md:flex-row items-center gap-y-[30px] md:gap-y-0 md:items-stretch  md:gap-x-[13px] mb-4 justify-between">
        <Image
          src={getStrapiMedia(data.image)}
          width={199}
          height={127}
          alt={data.image.data.attributes.alternativeText}
          placeholder="blur"
          blurDataURL={getStrapiMedia(data.image)}
          className="w-[199px] h-[127px] object-cover object-left-top flex-none"
        />
        <div className="flex flex-col text-center gap-y-[30px] md:gap-y-0 md:text-left md:justify-between w-[290px] h-[137px]">
          <p>{data.title}</p>
          <p className="text-date detail">{date}</p>
        </div>
      </div>
      <div className="hidden md:flex justify-end mt-[13px] mb-10">
        <ArrowLink text="Voir les détails" url={url} />
      </div>
    </CustomLink>
  )
}

export default DataEvent
