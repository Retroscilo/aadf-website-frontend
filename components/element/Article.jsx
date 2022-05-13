import Image from "next/image"
import { getStrapiMedia } from "../../lib/media"
import ArrowLink from "./arrowLink"
import { useMemo } from "react"

const ArticleCard = ({ data, highlight, ...props }) => {
  const article = data.attributes
  console.log(article)

  const publishedDate = useMemo(() => {
    return new Date(article.publishedAt).toLocaleDateString("fr-FR")
  }, [article])

  return (
    <article className="article" {...props}>
      <div
        className={`relative w-full ${highlight ? "h-[400px]" : "h-[200px]"}`}
      >
        <Image
          layout="fill"
          objectFit="cover"
          src={getStrapiMedia(article.image)}
          alt={"article.image.data.attributes.altText"}
        />
      </div>
      <h3 className="my-6">{article.title}</h3>
      <p className="absolute bottom-0 translate-y-[75%]">{publishedDate}</p>
      <ArrowLink
        text="lire la suite"
        url={"test"}
        style={{ justifyContent: "end" }}
      />
    </article>
  )
}

export default ArticleCard
