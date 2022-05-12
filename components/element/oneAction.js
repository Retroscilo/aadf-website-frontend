import { getStrapiMedia } from "../../lib/media"

const Action = ({ title, subtitle, image }) => {
    return (
        <div className={`w-full h-[22rem] md:h-[29rem] flex flex-col`}
            style={{
                background: `no-repeat center url(${getStrapiMedia(image)})`,
                backgroundSize: "cover",
            }} >
            <div className="inline-block bg-default py-[.6rem] px-[3rem] ml-auto">
                {subtitle}
            </div>
            <div className="mt-auto text-white bg-black bg-opacity-[41%] p-[2.6rem]">
                {title}
            </div>
        </div>
    )
}

export default Action