import UnderlinedText from "../element/UnderlinedTest"
import { v4 } from "uuid"

const JobTitles = ({ underlinedTextList }) => {
  console.log(underlinedTextList)
  return (
    <div className="container grid grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr_1fr]">
      {underlinedTextList.map((title) => (
        <UnderlinedText
          key={v4()}
          text={title.underlinedText}
          description={title.description}
        />
      ))}
    </div>
  )
}

export default JobTitles
