import StyledImage from "../components/element/styled-image"
import Hero from "../components/section/hero"

const Components = {
  section: {
    hero: Hero,
  },
  element: {
    "styled-image": StyledImage,
  },
}

function getComponent(component) {
  const [type, name] = component.split(".")
  return Components[type][name]
}

export default getComponent
