import Action from "../element/oneAction"
import ArrowLink from "../element/arrowLink"

const Actions = ({ title, actions, arrowLink }) => {
  return (
    <section className="md:container">
      <h2>{title}</h2>
      <div className="w-full md:grid grid-cols-1 md:grid-cols-2 gap-y-0 gap-x-0 md:gap-x-[2rem] md:gap-y-[6.5rem]">
        {actions?.map((action) => (
          <Action {...action} />
        ))}
      </div>
      {arrowLink && (
        <div className="flex md:justify-center justify-start m-0">
          <ArrowLink {...arrowLink} />
        </div>
      )}
    </section>
  )
}

export default Actions
