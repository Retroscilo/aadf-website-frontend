import { getStrapiMedia } from "../../lib/media"
import CustomImage from "../element/customImage"

const SingleImageSection = ({ image, title, text, imageOnLeft }) => {
  console.log(image, title, text, imageOnLeft)
  return (
    <section className="max-w-[1500px] m-auto grid lg:grid-cols-[40%_50%] justify-between lg:grid-rows-[300px_300px] px-10 md:px-24 grid-rows-[200px_300px_200px] grid-cols-[1fr] container">
      <h2 className="h-fit">{title}</h2>
      <div className="w-[400px] lg:w-full justify-self-center">
        <CustomImage image={image.image} color={image.color} />
      </div>
      <p>{text}</p>
    </section>
  )
}

export default SingleImageSection
