import StyledImage from "../components/element/styled-image"
import Hero from "../components/section/hero"
import NotFound from "../components/NotFound"
import Events from "../components/section/events"
import LogoWrapper from "../components/section/logoWrapper"
import { v4 as uuidv4 } from "uuid"
import Mission from "../components/section/mission"
import GridContent from "../components/element/GridContent"
import Articles from "../components/section/articles"
import PricingSection from "../components/section/pricingSection"
import TextSection from "../components/section/textSection"
import MissionCard from "../components/element/missionCard"
import SingleImageSection from "../components/section/singleImageSection"

const Components = {
  section: {
    hero: Hero,
    events: Events,
    "logo-wrapper": LogoWrapper,
    mission: Mission,
    articles: Articles,
    "pricing-section": PricingSection,
    "text-section": TextSection,
    "single-image-section": SingleImageSection,
  },
  element: {
    "styled-image": StyledImage,
    "grid-content": GridContent,
    "mission-card": MissionCard,
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
