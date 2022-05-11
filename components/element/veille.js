import { getStrapiMedia } from "../../lib/media"
import CustomLink from "./customLink"

const Veille = ({ title, image, date, url, newTab }) => {
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  }
  console.log({ title, image, date })
  const dateParsed = new Date(date).toLocaleDateString("fr-FR", options)
  return (
    <div className="flex-none first-of-type:ml-[100px] w-[400px] h-[400px] flex flex-col bg-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
      <CustomLink url={url} newTab={newTab}>
        <div
          className="h-[236px] w-full"
          style={{
            background: `no-repeat center url(${getStrapiMedia(image)})`,
            backgroundSize: "cover",
          }}
        />
        <div className="px-[21px] py-[12px] grow">
          <span className="detail text-date">{dateParsed}</span>
          <h4 className="font-bold max-3-lines">{title}</h4>
        </div>
      </CustomLink>
    </div>
  )
}

export default Veille
