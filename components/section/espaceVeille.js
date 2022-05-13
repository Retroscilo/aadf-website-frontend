import ArrowLink from "../element/arrowLink"
import Veille from "../element/veille"

const EspaceVeilles = ({ title, arrowLink, veilles }) => {
  return (
    <section>
      <h2 className="container m-0 lg:m-auto lg:text-center">{title}</h2>
      <div className="flex w-full overflow-auto py-[2rem] gap-x-[35px] lg:gap-x-[126px]">
        {veilles?.data?.sort((a, b) => {
          if (b.attributes?.date && a.attributes?.date)
            return new Date(b.attributes.date) - new Date(a.attributes.date)
          else a
        }).map((veille) => (
          <Veille {...veille.attributes} />
        ))}
      </div>
      <div className="inline-block m-auto">
        {arrowLink && <ArrowLink {...arrowLink} />}
      </div>
    </section>
  )
}

export default EspaceVeilles
