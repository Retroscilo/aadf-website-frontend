import StyledImage from "../components/element/styled-image"
import Hero from "../components/section/hero"
import NotFound from "../components/NotFound"
import Events from "../components/section/events"
import LogoWrapper from "../components/section/logoWrapper"
import { v4 as uuidv4 } from "uuid"

const Components = {
  section: {
    hero: Hero,
    events: Events,
    "logo-wrapper": LogoWrapper,
  },
  element: {
    "styled-image": StyledImage,
  },
  notFound: NotFound,
}

function getComponent(component) {
  const [type, name] = component.split(".")

  return Components[type]?.[name] || Components.notFound
}

function mapToComponent(element) {
  const Component = getComponent(element.__component)
  return <Component key={uuidv4()} {...element} />
}

export default mapToComponent
