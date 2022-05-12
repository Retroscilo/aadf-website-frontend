import PricingCard from "../element/pricingCard"
import { v4 } from "uuid"

const pricingSection = ({ title, cards }) => {
  return (
    <section className="max-w-[1500px] mx-auto my-60">
      <h2 className="text-center mb-20">{title}</h2>
      <div className="flex flex-wrap flex-col lg:align-center xl:flex-row max-w-[1500px] m-auto justify-between px-10 sm:px-40 gap-12">
        {cards.map((card) => (
          <PricingCard key={v4()} data={card} />
        ))}
      </div>
    </section>
  )
}

export default pricingSection
