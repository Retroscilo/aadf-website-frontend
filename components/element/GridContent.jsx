import { getStrapiMedia, GetStrapiMedia } from "../../lib/media"
import Image from "next/image"

const GridContent = (props) => {
  return (
    <div className="my-32">
      <h2 className="my-20 text-center">{props.sectionTitle}</h2>
      <div className="lg:width-[80%] max-w-[900px] mx-auto my-32 grid gap-5 lg:grid-rows-[1fr_1fr_1fr] lg:grid-cols-[215px_215px_215px_215px] grid-rows-[1fr_1fr_1fr_1fr] grid-cols-[0.2fr_1fr_0.2fr] w-[80%] overflow-hidden">
        <BlackSquare
          text={props.title1}
          className="lg:row-start-1 lg:col-start-1 col-start-1 row-start-1"
        />
        <BlackSquare
          text={props.title2}
          className="lg:row-start-1 lg:col-start-4 col-start-3 row-start-2"
        />
        <BlackSquare
          text={props.title3}
          className="lg:row-start-2 lg:col-start-3 col-start-1 row-start-3"
        />
        <BlackSquare
          text={props.title4}
          className="lg:row-start-3 lg:col-start-1 col-start-3 row-start-4"
        />
        <ImageSquare
          image={props.img1}
          className="row-start-1 lg:col-span-2 lg:col-start-2 col-start-2 col-span-2"
        />
        <ImageSquare
          image={props.img2}
          className="lg:row-start-2 lg:col-span-2 lg:col-start-1 col-start-1 row-start-2 col-span-2"
        />
        <ImageSquare
          image={props.img3}
          className="lg:row-start-2 lg:row-span-2 lg:col-start-4 col-start-2 row-start-3 col-span-2"
        />
        <ImageSquare
          image={props.img4}
          className="lg:row-start-3 lg:col-span-2 lg:col-start-2 col-start-1 row-start-4 col-span-2"
        />
      </div>
    </div>
  )
}

const BlackSquare = ({ text, className }) => (
  <div
    className={`bg-black text-white lg:w-[215px] lg:h-[215px] w-[150px] h-[150px] ${className} flex justify-center`}
    style={{ alignItems: "center" }}
  >
    {text}
  </div>
)

const ImageSquare = ({ image, className }) => (
  <div className={`relative ${className}`}>
    <Image
      layout="fill"
      objectFit="cover"
      src={getStrapiMedia(image)}
      alt={image.data.attributes.alternativeText}
      blurDataURL={getStrapiMedia(image)}
    />
  </div>
)

export default GridContent
