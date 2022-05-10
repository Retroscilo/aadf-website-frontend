import ButtonLink from "./buttonLink"
import CustomImage from "./customImage"

const StyledImage = (data) => {
  console.log({data})
 const { buttonLinks, customImages } = data
  return (
    <div className="flex flex-col gap-y-5 mt-10">
    <div className="flex gap-x-3">
      {buttonLinks?.map(({text,url,newTab,color,type}) => {
        return (
          <ButtonLink
            text={text}
            url={url}
            newTab={newTab}
            color={color}
            type={type}
        />
        )
      })}
      </div>
      <div className="mt-5 flex flex-wrap gap-x-8">
        {customImages?.map(({ image, color }) => <div className="w-[500px]">
          <CustomImage image={image} color={color} />
        </div>)}
      </div>
    </div>
  )
}

export default StyledImage
