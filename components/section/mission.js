import OneMission from "../element/mission"

const Mission = ({ title, missions }) => {
    console.log("section : ", missions)
    return (
        <div>
            <h2 className="text-center">{title}</h2>
            {
                missions?.map((mission) => {
                    return (
                        <div key={mission.id}>
                            <OneMission {...mission}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Mission