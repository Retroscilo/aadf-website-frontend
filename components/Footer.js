import { useContext } from "react"
import { GlobalContext } from "../pages/_app"
import { getStrapiMedia } from "../lib/media"
import Image from "next/image"
import { v4 } from "uuid"

const Footer = () => {
  const { Footer, logoSite } = useContext(GlobalContext)

  const { FooterLink, title: titleFooterLink } = Footer[0]
  const { SocialMedia, title: titleSocialMedia } = Footer[1]

  return (
    <footer className="min-h-[150px]  bg-primary-2  py-5  text-center lg:text-left md:px-[6%]">
      <div className="text-white   flex   flex-col lg:flex-row   p-6   ">
        <div className="lg:w-1/4">
          {titleFooterLink ? (
            <h5 className="text-white text-center lg:text-left  min-h-[30px] w-full  font-bold  mb-4  ">
              {titleFooterLink}
            </h5>
          ) : (
            ""
          )}
          <ul className="lg:mr-8 ">
            {FooterLink?.map((item) => (
              <li key={v4()} className="mb-2 w-full ">
                <a className="hover:text-white hover:underline" href={item.url}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col  items-start lg:w-1/4">
          {titleSocialMedia ? (
            <h5 className="text-white text-center lg:text-left min-h-[30px] w-full mb-4 font-bold">
              {titleSocialMedia}
            </h5>
          ) : (
            ""
          )}

          <ul
            className={` inline-block  ${
              titleSocialMedia ? " mt-[0px] " : "mt-2"
            } w-full flex`}
          >
            {SocialMedia?.map((item) => (
              <li key={v4()} className="inline-block    mr-[8px]">
                <a href={item.url}>
                  <Image
                    src={getStrapiMedia(item.logo)}
                    alt=""
                    width={30}
                    height={30}
                    className="w-[30px] h-[30px] rounded-lg"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <hr className="bg-white px-5 mt-16  mb-5" />
        <div className=" p-5 w-full flex justify-evenly    flex-col lg:flex-row text-center whitespace-nowrap">
          <div className=" flex lg:justify-start w-full lg:w-1/6 mb-8">
            <Image
              className="w-[25px] h-[25px] z-0"
              src={getStrapiMedia(logoSite)}
              alt=""
              width={25}
              height={25}
            />
          </div>
          <ul className="inline-block text-white flex flex-col lg:flex-row w-full lg:w-5/6  lg:justify-end">
            <li className="mx-[28px] mb-4 ">
              <a href="#" className="hover:text-white hover:underline">
                Mentions légales
              </a>{" "}
            </li>
            <li className="mx-[28px] mb-4 ">
              <a href="#" className="hover:text-white hover:underline">
                Cookies
              </a>{" "}
            </li>
            <li className="mx-[28px] mb-4 ">
              <a href="#" className="hover:text-white hover:underline">
                @ Copyright 2022 Association des Analystes Digitaux Francophones
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
