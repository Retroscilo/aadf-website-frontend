import Markdown from "markdown-to-jsx"

const MarkdownToJsx = ({ children }) => {
  return (
    <Markdown
      options={{
        overrides: {
          rouge: {
            component: ({ children }) => (
              <span className=" text-primary-1 ">{children}</span>
            ),
          },
        },
      }}
    >
      {children}
    </Markdown>
  )
}

export default MarkdownToJsx
