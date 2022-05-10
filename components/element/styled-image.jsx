import ButtonLink from "./buttonLink"

const StyledImage = ({ buttonLinks }) => {
  console.log(buttonLinks)
  return (
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
  )
}

export default StyledImage
