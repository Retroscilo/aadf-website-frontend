import PassedEvents from "../element/passedEvent"
import NextEvent from "../element/nextEvent"
import { v4 as uuidv4 } from "uuid"
import ArrowLink from "../element/arrowLink"

const Events = ({ title, passedEvents, nextEvent, arrowLink }) => {
  return (
    <section className="container w-full">
      <h2 className="text-center">{title}</h2>
      <div className="flex w-full justify-between flex-wrap">
        <article className="w-full md:w-full lg:w-1/2 mb-[72px] md:mb-[35px]">
          <h3 className="underlined-primary mb-[35px] md:mb-[72px]">À venir</h3>
          <NextEvent data={nextEvent.data.attributes} />
        </article>
        <article className="w-full lg:w-[40%]">
          <h3 className="underlined-primary mb-[35px] md:mb-[72px]">
            Évènements passés
          </h3>
          <div className="flex flex-col lg:gap-y-[72px]">
            {passedEvents.data.map((event) => (
              <div key={uuidv4()} className="lg:max-w-[500px]">
                <PassedEvents data={event.attributes} />
              </div>
            ))}
          </div>
        </article>
      </div>
      <div className="flex md:justify-center justify-start m-0">
        {arrowLink && <ArrowLink {...arrowLink} />}
      </div>
    </section>
  )
}

export default Events
