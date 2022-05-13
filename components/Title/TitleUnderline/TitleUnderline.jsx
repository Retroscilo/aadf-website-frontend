const TitleUnderline = ({ title, position }) => (
  <h3 className={`${position ? `title-${position}` : "title-underline"}`}>
    {title}
  </h3>
)

export default TitleUnderline
