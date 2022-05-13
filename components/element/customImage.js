import Image from "../image"

const CustomImage = ({ image, color, className, ...props }) => {
  const bgColor = {
    rouge: "shadow-primary-1",
    noir: "shadow-primary-2",
  }
  return (
    <div
      className={` shadow-[10px_10px] paddingCustomImage mb-[10px] ${bgColor[color]} ${className}`}
      {...props}
    >
      <Image image={image} />
    </div>
  )
}

export default CustomImage
