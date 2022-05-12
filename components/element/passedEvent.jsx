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
      <div className="flex w-full relative flex-col md:flex-row items-center gap-y-[30px] md:gap-y-0 md:items-stretch  md:gap-x-[13px] justify-between mb-[35px] group-last-of-type:bg-purple-400 ">
        <div className="lg:w-1/2 lg:h-auto lg:min-h-[139px] w-[209px] h-[139px] sm:w-[418px] sm:h-[278px] relative">
          <Image
            src={getStrapiMedia(data.image)}
            layout="fill"
            alt={data.image.data.attributes.alternativeText}
            placeholder="blur"
            blurDataURL={getStrapiMedia(data.image)}
            className="w-[199px] h-[127px] object-cover object-left-top flex-none"
          />
        </div>
        <div className="flex flex-col grow text-center gap-y-[30px] md:gap-y-0 md:text-left md:justify-between w-[290px] h-auto">
          <span className="max-3-lines">{data.title}</span>
          <span className="text-date detail">{date}</span>
        </div>
      </div>
      <div className="hidden md:flex justify-end mt-[13px]">
        <ArrowLink text="Voir les détails" url={url} />
      </div>
    </CustomLink>
  )
}

export default DataEvent
