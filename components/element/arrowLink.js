import CustomLink from "./customLink"

const ArrowLink = ({ text, url, newTab, ...props }) => {
  return (
    <CustomLink url={url} newTab={newTab}>
      <div className="flex items-center arrowLink cursor-pointer" {...props}>
        <p className="mr-[21px]">{text}</p>
        <img src="/assets/arrow.png" className="h-[18px] lg:h-[20px] w-auto arrow ease-in-out duration-300" />
      </div>
    </CustomLink>
  )
}

export default ArrowLink
