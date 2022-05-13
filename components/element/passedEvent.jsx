import Image from "next/image"
import ArrowLink from "../element/arrowLink"
import CustomLink from "../element/customLink"
import { useMemo } from "react"
import { getStrapiMedia } from "../../lib/media"

const DataEvent = ({ data, ...props }) => {
  const date = useMemo(() => {
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
    const date = new Date(data.eventDate)
    return date.toLocaleDateString("fr-FR", options)
  }, [data])
  console.log("DATA IMAGE : ",data.image)
  return (
    <CustomLink url={data.url}>
      <div className="flex w-full relative flex-col md:flex-row items-center gap-y-[30px] md:gap-y-0 md:items-stretch  md:gap-x-[13px] justify-between mb-[35px] group-last-of-type:bg-purple-400 ">
        <div className={`lg:w-1/2 lg:h-auto lg:min-h-[139px] w-[209px] h-[139px] sm:w-[418px] sm:h-[278px] relative`}>
          <div className={`bg-black h-full flex justify-center items-center text-center transition-all ease-in-out duration-300  ${data?.image?.data ? 'text-transparent hover:text-white  ': 'text-white'}`}
            style={{
              backgroundImage: `url(${data.image ?  getStrapiMedia(data.image) : ''})`,
              backgroundPosition: "center",
              backgroundSize: "cover"
            }} 
          >
            {data.title}
          </div>
        </div>
        <div className="flex flex-col grow text-center gap-y-[30px] md:gap-y-0 md:text-left md:justify-between w-[290px] h-auto">
          <span className="max-3-lines">{data.description}</span>
          <span className="text-date detail">{date}</span>
        </div>
      </div>
      <div className="hidden md:flex justify-end mt-[13px]">
        <ArrowLink text="Voir les détails"/>
      </div>
    </CustomLink>
  )
}

export default DataEvent
