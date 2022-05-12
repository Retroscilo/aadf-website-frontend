import { getStrapiMedia } from "../../lib/media"

const Hero = ({ title, subtitle, background }) => {
  return (
    <div
      className="w-screen h-[478px]"
      style={{
        background: `url(${getStrapiMedia(background)})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div className="bg-black bg-opacity-[17%] w-screen h-full flex flex-col-reverse">
        <div className="max-w-[1500px] mx-auto">
          <div className="w-[70%] mb-32 px-32 xl:px-0">
            <h1 className="text-white font-DosisSemiBold sm:font-DosisBold uppercase ">
              {title}
            </h1>
            <h3 className="text-white font-KarlaMedium text-[24px] sm:text-[28px] font-normal leading-[28px] sm:leading-[33px] mt-[10px] sm:mt-[0px]">
              {subtitle}
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
