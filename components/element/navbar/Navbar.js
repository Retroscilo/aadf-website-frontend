import { getStrapiMedia } from "../../../lib/media"

const Navbar = ({ NavLink, logoSrc }) => {
  return (
    <header>
      <nav className="h-[8.9rem]">
        <div className="wrapper h-full flex items-center justify-between">
          <figure>
            <img src={getStrapiMedia(logoSrc)} alt="" width={68} />
          </figure>
          <ul className="flex gap-x-16">
            {NavLink.map((item, key) => (
              <li key={key}>
                <a href={item.url}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
/*
Navbar.propTypes = {

} */

export default Navbar
