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
      <div className="bg-black bg-opacity-[17%] w-full h-full flex flex-col-reverse">
        <div className="w-full max-w-[1500px] mx-auto">
          <div className="w-full sm:w-[500px] lg:w-[60%] mb-32 px-10 md:px-32">
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
