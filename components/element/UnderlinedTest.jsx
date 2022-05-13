const UnderlinedText = ({ text, description }) => (
  <div>
    <h4 className="underlinedText text-center my-12">{text}</h4>
    <p className="text-center max-w-[200px] mx-auto">{description}</p>
  </div>
)

export default UnderlinedText
