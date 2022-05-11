import Logo from "../element/logo"
import { v4 } from "uuid"

const LogoWrapper = ({ title, logo }) => {
  console.log(title, logo)
  return (
    <section className="w-full">
      <h2 className="text-center">{title}</h2>
      <div className="flex">
        {logo.map((logo) => (
          <Logo key={v4()} data={logo} />
        ))}
      </div>
    </section>
  )
}

export default LogoWrapper
