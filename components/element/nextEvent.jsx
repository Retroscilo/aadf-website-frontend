import { useMemo } from "react"
import StyledImage from "./styled-image"
import Link from "next/link"

const NextEvent = ({ data }) => {
  const { publishedDate, eventDate } = useMemo(() => {
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
    const publishedDate = new Date(data.publishedAt).toLocaleDateString(
      "fr-FR",
      options
    )
    const eventDate = new Date(data.eventDate).toLocaleDateString(
      "fr-FR",
      options
    )
    return {
      publishedDate,
      eventDate,
    }
  }, [data])
  return (
    <Link href="/evenements">
      <>
        <StyledImage
          data={data.image}
          width={600}
          height={350}
          className="mb-8 w-[400px] h-[225px] md:w-[600px] md:h-[350px]"
        />
        <h4>{`${data.title} : le ${eventDate}`}</h4>
        <p className="text-date detail">{publishedDate}</p>
      </>
    </Link>
  )
}

export default NextEvent
