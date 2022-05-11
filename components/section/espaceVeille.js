import ArrowLink from "../element/arrowLink"
import Veille from "../element/veille"

const EspaceVeilles = ({ title, arrowLink, veilles }) => {
  return (
    <section className="flex flex-col">
      <h2 className="ml-[2rem] lg:text-center">{title}</h2>
      <div className="flex w-full overflow-auto my-[36px] lg:my-[72px]  py-[20px] gap-x-[35px] lg:gap-x-[126px]">
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
