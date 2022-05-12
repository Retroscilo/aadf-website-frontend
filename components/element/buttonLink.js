import CustomLink from "./customLink"

const ButtonLink = ( { text, url, newTab, color, type,className,form }) => {
    const buttonColor = {
        "rouge": "buttonPrimary1",
        "jaune": "buttonSecondary2"
    }
    const buttonType = {
        "full": "buttonFull",
        "outlined": "buttonOutlined",
        "inverted": "buttonInverted"
    }
    const buttonForm = {
        "rounded": "buttonRounded",
        "squared": "buttonSquared"
    }
    return (
        <CustomLink url={url} newTab={newTab}>
            <div className={`button ${buttonColor[form]} ${buttonColor[color]} ${buttonType[type]} ${className} `}>
                {text}
            </div>
        </CustomLink>
    )
}

export default ButtonLink 