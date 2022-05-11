import Link from "next/link"

const CustomLink = ({ url, newTab, children }) => {
    if (!url) {
        return <>{children}</>
    }
    if (newTab) {
        return (
            <a href={url} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        )
    }
    if (url?.startsWith("/")) {
        return (
            <Link href={url}>
                <a>{children}</a>
            </Link>
        )
    }
    if (newTab) {
        return (
            <a href={url} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        )
    }

    return (
        <a href={url} target="_self">
            {children}
        </a>
    )

}

export default CustomLink