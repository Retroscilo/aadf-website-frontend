import MemberCard from "../element/MemberCard"
import { v4 } from "uuid"

const MemberSection = ({ memberCar }) => {
  return (
    <div className="width-full max-w-[1500px] my-32 px-20 mx-auto grid grid-cols-[1fr_1fr_1fr] gap-20">
      {memberCar.map((member) => (
        <MemberCard key={v4()} member={member} />
      ))}
    </div>
  )
}

export default MemberSection
