import Image from "../image"

const OneMission = ({content,icon}) => {
    return (
        <div>
            <div className="w-[96px]">
                <Image image={icon}/>
            </div>
            <div>
                {content}
            </div>
        </div>
    )
}

export default OneMission