import CustomImage from "./customImage"

const MissionCard = ({ missionTitle, image, description }) => {
  return (
    <div className="grid-rows-[100px_200px_1fr] xl:w-[50%]  w-[100%] inline-grid">
      <div className="h-[300px] w-[200px] mx-auto">
        <CustomImage image={image.image} color={image.color} />
      </div>
      <h2 className="text-center">{missionTitle}</h2>
      <p className="max-w-[500px] text-center justify-self-center">
        {description}
      </p>
    </div>
  )
}

export default MissionCard
