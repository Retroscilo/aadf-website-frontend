import { useMemo } from "react"
import StyledImage from "./styled-image"
import Link from "next/Link"
import CustomImage from "./customImage"
import ButtonLink from "./buttonLink"

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
      <>
        <CustomImage
          image={data.image}
        />
        <h4>{`${data.title} : le ${eventDate}`}</h4>
      <p className="text-date detail">{publishedDate}</p>
      <ButtonLink text={"S'inscrire à l'évènement"} url={data.url} type={"outlined"} form={"squared"}  newTab={ false }/>
      </>
  )
}

export default NextEvent
