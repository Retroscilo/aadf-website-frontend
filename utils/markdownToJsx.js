import Markdown from "markdown-to-jsx"

const MarkdownToJsx = ({ children }) => {
  return (
    <div className="markdown">
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
    </div>
  )
}

export default MarkdownToJsx
