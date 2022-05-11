import ArrowLink from "./arrowLink"
import ButtonLink from "./buttonLink"
import CustomImage from "./customImage"
import PastEvent from "./pastEvent"

const StyledImage = (data) => {
  console.log({data})
  const { buttonLinks, customImages, arrowLink,pastEvents } = data
  return (
    <div className="flex flex-col gap-y-5 mt-10">
    <div className="flex gap-x-3">
      {buttonLinks?.map(({id,text,url,newTab,color,type}) => {
        return (
          <ButtonLink
            key={id}
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
        {customImages?.map(({id, image, color }) => <div key={id} className="w-[500px]">
          <CustomImage image={image} color={color} />
        </div>)}
      </div>
      {arrowLink && <ArrowLink url={arrowLink.url} text={arrowLink.text} newTab={arrowLink.newTab} />}
      {
        pastEvents?.map(({ id, arrowLink, image, newTab, url, title,date }) => {
          return <div key={id} className="md:w-[472px]">
            <PastEvent
              arrowLink={arrowLink}
              image={image}
              newTab={newTab}
              url={url}
              title={title}
              date={date}
            />
          </div>
        })
      }
    </div>
  )
}

export default StyledImage
