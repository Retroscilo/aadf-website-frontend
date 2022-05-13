import CustomImage from "./customImage"

const MissionCard = ({ missionTitle, image, description }) => {
  return (
    <div className="grid-rows-[auto_auto_1fr] xl:w-[50%]  w-[100%] inline-grid gap-12 my-20 lg:px-20">
      <h2 className="text-center lg:text-left lg:row-start-2">
        {missionTitle}
      </h2>
      <div className="w-[200px] mx-auto lg:row-start-1 lg:mx-0">
        <CustomImage image={image.image} color={image.color} />
      </div>
      <p className="max-w-[500px] justify-self-center lg:justify-self-start lg:row-start-3">
        {description}
      </p>
    </div>
  )
}

export default MissionCard
