import ArrowLink from "../element/arrowLink"
import Veille from "../element/veille"

const EspaceVeilles = ({ title, arrowLink, veilles }) => {
  return (
    <section>
      <h2 className="ml-[2rem] lg:text-center">{title}</h2>
      <div className="flex w-full overflow-auto py-[2rem] gap-x-[35px] lg:gap-x-[126px]">
        {veilles?.data?.map((veille) => (
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
