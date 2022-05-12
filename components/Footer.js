import { useContext } from "react"
import { GlobalContext } from "../pages/_app"
import { getStrapiMedia } from "../lib/media"

const Footer = () => {
  const { Footer } = useContext(GlobalContext)
  const { FooterLink } = Footer[0]
  const { SocialMedia } = Footer[1]

  console.log(FooterLink)
  return (
    <footer>
      <ul>
        {FooterLink?.map((item) => (
          <li>
            <a href={item.url}>{item.label}</a>
          </li>
        ))}
      </ul>

      <ul>
        {SocialMedia?.map((item) => (
          <li>
            <a href={item.url}>
              <img src={getStrapiMedia(item.logo)} alt="" />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default Footer
