import { getStrapiMedia } from "../../lib/media"

const Hero = ({ title, subtitle, background }) => {
  return (
    <div
      className="w-full h-[478px]"
      style={{
        background: `url(${getStrapiMedia(background)})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div className="bg-black h-full w-full bg-opacity-[17%]">
        <div className="container">
            <div className="w-full sm:w-[80%] md:w-[433px] pt-[150px]">
              <h1 className="text-white font-DosisSemiBold sm:font-DosisBold uppercase ">{title}</h1>
              <h3 className="text-white font-KarlaMedium text-[24px] sm:text-[28px] font-normal leading-[28px] sm:leading-[33px] mt-[10px] sm:mt-[0px]">{subtitle}</h3>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
