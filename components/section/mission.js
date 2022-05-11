import OneMission from "../element/mission"

const MissionWithDivider = ({mission}) => (
    <>
        <OneMission {...mission} />
        <div className="last-of-type:hidden w-[85.6px] h-[1px] lg:w-[1px] lg:h-[139px] lg:inline-block mt-auto justify-self-end bg-primary-2 lg:bg-primary-1" />
    </>
)

const Mission = ({ title, missions }) => {
    return (
        <div className="container">
            <h2 className="mb-[73px] text-center">{title}</h2>
            <div className="flex flex-col lg:justify-between lg:flex-row gap-y-10 flex-wrap">
                {
                    missions?.map((mission) => <MissionWithDivider key={mission.id} mission={mission} />)
                }
            </div>
        </div>
    )
}

export default Mission