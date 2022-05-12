import CustomLink from "./customLink"

const ButtonLink = ( { text, url, newTab, color, type }) => {
    const buttonColor = {
        "rouge": "buttonPrimary1",
        "jaune": "buttonSecondary2"
    }
    const buttonType = {
        "full": "buttonFull",
        "outlined": "buttonOutlined",
        "inverted": "buttonInverted"
    }
    return (
        <CustomLink url={url} newTab={newTab}>
            <div className={` buttonRounded ${buttonColor[color]} ${buttonType[type]} `}>
                {text}
            </div>
        </CustomLink>
    )
}

export default ButtonLink 