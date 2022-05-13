const GridContent = ({
  title1,
  title2,
  title3,
  title4,
  image1,
  image2,
  image3,
  image4,
  props,
}) => {
  console.log(image4)

  return (
    <div className="wrapper">
      <ul className="grid">
        <li>
          <span>{title1}</span>
        </li>
        <li>
          <span></span>
        </li>
      </ul>
    </div>
  )
}

export default GridContent
