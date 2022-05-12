import { getStrapiMedia } from "../lib/media"
import { useContext } from "react"
import { GlobalContext } from "../pages/_app"
import ButtonLink from "./element/buttonLink"
import Image from "next/image"
import { useMemo } from "react"

const Navbar = () => {
  const Data = useContext(GlobalContext)
  const Navbar = useMemo(() => Data.Navbar, [])
  const menu = Navbar.menus
  const btns = Navbar.Cta

  const closeMenu = () => {
    const el = document.getElementById("menu-content")
    el.classList.add("hidden")
  }
  const openMenu = () => {
    const el = document.getElementById("menu-content")
    el.classList.remove("hidden")
  }

  return (
    <header>
      <nav
        className="h-[8.9rem] xl:hidden"
        style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
      >
        <div className="wrapper h-full">
          <div className="h-full flex items-center justify-between">
            <figure>
              <Image
                src={getStrapiMedia(Navbar.logo)}
                alt={Navbar.logo.data.attributes.alternativeText}
                width={68}
                height={68}
              />
            </figure>

            <button type="button" className="py-4" onClick={openMenu}>
              <svg
                width="35"
                height="23"
                viewBox="0 0 35 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  y1="1.25"
                  x2="35"
                  y2="1.25"
                  stroke="black"
                  strokeWidth="1.5"
                />
                <line
                  y1="12.25"
                  x2="25"
                  y2="12.25"
                  stroke="black"
                  strokeWidth="1.5"
                />
                <line
                  y1="22.25"
                  x2="14"
                  y2="22.25"
                  stroke="black"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
          </div>
          <div
            className="py-[3rem] fixed inset-[0] m-[0] bg-[#ffffff] hidden"
            id="menu-content"
          >
            <div className="wrapper">
              <button type="button" onClick={closeMenu}>
                <svg
                  width="17"
                  height="18"
                  viewBox="0 0 17 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.5728 1L1.91016 17M15.5728 17L1.91016 1L15.5728 17Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <ul>
                {menu.data?.map((item, key) => (
                  <li key={key} className="mt-[3.2rem] ml-[.5rem] font-medium">
                    <a
                      href={item.attributes.url}
                      target={item.attributes.newTab ? "_blank" : "_self"}
                      rel={item.attributes.newTab ? "noreferrer" : ""}
                    >
                      {item.attributes.label}
                    </a>
                  </li>
                ))}
              </ul>
              <ul>
                {btns.map((item, key) => (
                  <li key={key} className="mt-[3.2rem] ml-[.5rem]">
                    <ButtonLink
                      text={item.text}
                      type={item.type}
                      url={item.url}
                      newTab={item.newTab}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Nav Desktop */}
      <nav
        className="hidden xl:block h-[8.9rem]"
        style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
      >
        <div className="wrapper h-full flex items-center justify-between">
          <a href="/">
            <Image
              src={getStrapiMedia(Navbar.logo)}
              alt={Navbar.logo.data.attributes.alternativeText}
              width={68}
              height={68}
            />
          </a>

          <div className="flex gap-x-[6rem]">
            <ul className="flex items-center gap-x-[4rem] hove">
              {menu.data?.map((item, key) => (
                <li key={key} className="font-medium hover:decoration-2">
                  <a
                    href={item.attributes.url}
                    target={item.attributes.newTab ? "_blank" : "_self"}
                    rel={item.attributes.newTab ? "noreferrer" : ""}
                  >
                    {item.attributes.label}
                  </a>
                </li>
              ))}
            </ul>

            <ul className="flex gap-x-[3rem]">
              {btns.map((item, key) => (
                <li key={key}>
                  <ButtonLink
                    text={item.text}
                    type={item.type}
                    url={item.url}
                    newTab={item.newTab}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
