import { getStrapiMedia } from "../../lib/media"
import Image from "next/image"

const MemberCard = ({ member }) => {
  return (
    <div className="grid grid-rows-[4fr_.8fr_.5fr] justify-self-center shadow-lg max-w-[300px]">
      <div className="h-[320px] w-full relative">
        <Image
          src={getStrapiMedia(member.image)}
          blurDataURL={getStrapiMedia(member.image)}
          alt="member photo"
          objectFit="cover"
          layout="fill"
        />
      </div>
      <h3 className="px-8 flex items-center">{member.name}</h3>
      <p className="px-8">{member.title}</p>
    </div>
  )
}

export default MemberCard
