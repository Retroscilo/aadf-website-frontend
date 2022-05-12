import OneMission from "../element/mission"

const MissionWithDivider = ({mission,isLast}) => (
    <>
        <OneMission {...mission} isLast={isLast} />
        <div className="hidden last-of-type:hidden lg:w-[1px] lg:h-[139px] lg:inline-block mt-auto justify-self-end lg:bg-primary-1" />
    </>
)

const Mission = ({ title, missions }) => {
    return (
        <section className="container">
            <h2 className="text-left lg:text-center">{title}</h2>
            <div className="flex flex-col lg:justify-between lg:flex-row gap-y-10 flex-wrap">
                {
                    missions?.map((mission,index) => <MissionWithDivider key={mission.id} isLast={index === missions.length - 1} mission={mission} />)
                } 
            </div>
        </section>
    )
}

export default Mission