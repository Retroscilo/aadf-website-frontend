import Image from "../image"
import ArrowLink from "./arrowLink"
import CustomLink from "./customLink"

const PastEvent = ({ image, date, title, arrowLink }) => {
    const months = [
        "janvier",
        "février",
        "mars",
        "avril",
        "mai",
        "juin",
        "juillet",
        "août",
        "septembre",
        "octobre",
        "novembre",
        "décembre",
    ]
    const [annee, mois, jour] = date.split("-")
    const dateFormated = `${jour} ${months[parseInt(mois) - 1]} ${annee}`

    return (
        <CustomLink url={arrowLink?.url} newTab={arrowLink?.newTab}>
            <div className="flex flex-col md:flex-row items-center gap-y-[30px] md:gap-y-0 md:items-stretch md:justify-between md:gap-x-[13px]">
                <div className="w-[199px] h-[127px] object-cover object-left-top md:flex-none">
                    <Image image={image} />
                </div>

                <div className="flex flex-col text-center gap-y-[30px] md:gap-y-0 md:text-left md:justify-between">
                    <p>{title}</p>
                    <p className="text-date detail">{dateFormated}</p>
                </div>
            </div>
            <div className="hidden md:flex justify-end mt-[13px]">
                <ArrowLink
                    text={arrowLink?.text}
                />
            </div>
        </CustomLink>
    )
}

export default PastEvent