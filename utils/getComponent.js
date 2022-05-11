import StyledImage from "../components/element/styled-image"
import Hero from "../components/section/hero"
import Navbar from "../components/element/navbar/Navbar"

const Components = {
  section: {
    hero: Hero,
  },
  element: {
    "styled-image": StyledImage,
    navbar: Navbar,
  },
}

function getComponent(component) {
  const [type, name] = component.split(".")
  return Components[type][name]
}

export default getComponent
