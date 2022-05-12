import Image from "../image"

const CustomImage = ({ image, color }) => {
  console.log(image)
  const bgColor = {
    rouge: "shadow-primary-1",
    noir: "shadow-primary-2",
  }
  return (
    <div className={`w-full shadow-[10px_10px] ${bgColor[color]}`}>
      <Image image={image} />
    </div>
  )
}

export default CustomImage
