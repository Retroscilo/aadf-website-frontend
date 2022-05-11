import PassedEvents from "../element/passedEvent"
import NextEvent from "../element/nextEvent"
import { v4 as uuidv4 } from "uuid"
import ArrowLink from "../element/arrowLink"

const Events = ({ title, passedEvents, nextEvent }) => {
  return (
    // <section className="max-w-[1500px] m-auto">
    <section className="container">
      <h2 className="text-center mb-10">{title}</h2>
      <div className="flex justify-between flex-wrap gap-10">
        <article className="w-full lg:w-fit">
          <h3 className="underlined-primary mb-10">À venir</h3>
          <NextEvent data={nextEvent.data.attributes} />
        </article>
        <article className="w-full md:w-fit">
          <h3 className="underlined-primary mb-10">Évènements passés</h3>
          <div className="flex flex-col">
            {passedEvents.data.map((event) => (
              <div key={uuidv4()} className="w-[500px]">
                <PassedEvents url="/evenements" data={event.attributes} />
              </div>
            ))}
          </div>
        </article>
      </div>
      <ArrowLink
        text="Voir tout les évènements"
        style={{
          justifyContent: "center",
          marginTop: "20px",
        }}
      />
    </section>
  )
}

export default Events
