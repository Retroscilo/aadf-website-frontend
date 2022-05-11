import StyledImage from "../components/element/styled-image"
import Hero from "../components/section/hero"
import NotFound from "../components/NotFound"
import Events from "../components/section/events"
import LogoWrapper from "../components/section/logoWrapper"
import { v4 as uuidv4 } from "uuid"
import Mission from "../components/section/mission"
import Navbar from "../components/element/navbar/Navbar"
import AdhesionSection from "../components/section/adhesionSection"
import Actions from "../components/section/actions"

const Components = {
  section: {
    hero: Hero,
    events: Events,
    "logo-wrapper": LogoWrapper,
    mission: Mission,
    "adhesion-section": AdhesionSection,
    actions: Actions
  },
  element: {
    "styled-image": StyledImage,
    navbar: Navbar,
  },
  notFound: NotFound,
}

function getComponent(component) {
  console.log({component})
  const [type, name] = component.split(".")
  
  return Components[type]?.[name] || Components.notFound
}

function mapToComponent(element) {
  const Component = getComponent(element.__component)
  return <Component key={uuidv4()} {...element} />
}

export default mapToComponent
