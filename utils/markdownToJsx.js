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
            noir: {
              component: ({ children }) => (
                <span className=" text-primary-2 ">{children}</span>
              ),
            },
            bleu: {
              component: ({ children }) => (
                <span className=" text-secondary-1 ">{children}</span>
              ),
            },
            orange: {
              component: ({ children }) => (
                <span className=" text-secondary-2 ">{children}</span>
              ),
            },
            gris: {
              component: ({ children }) => (
                <span className=" text-date ">{children}</span>
              ),
            },
            center: {
              component: ({ children }) => (
                <span className="text-center">{children}</span>
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
