import { h, FunctionalComponent } from "preact"
import { styled } from "goober"

import markdown from "../../resume.md?raw"
import { parseMarkdwon } from "../utils/markdown"

interface Props {
  className?: string;
}

const Component: FunctionalComponent<Props> = (props) => {
  const { html } = parseMarkdwon(markdown.replace(/\n#/g, "\n"))

  return (
    <main {...props}>
      <div className="content">
        <div className="markdown"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </main>
  )
}

const StyledComponent = styled(Component)`
  padding: 1rem;
  display: flex;
  justify-content: center;

  .content {
    max-width: var(--max-width);

    .markdown {
      font-size: 1rem;
      h1, h2 {
        border-bottom: 1px solid var(--color-divider);
      }
      h1, h2, h3, h4 {
        margin: 1.5rem auto 1rem;
        font-weight: 600;
        line-height: 1.25;
      }
      h1 {
        padding-bottom: 0.3em;
        font-size: 2rem;
      }
      h2 {
        padding-bottom: 0.3rem;
        font-size: 1.5rem;
      }
      h3 {
        font-size: 1.25rem;
      }
      li {
        text-align: left;
      }
      li+li {
        margin-top: 0.25em;
      }
      table {
        border-collapse: collapse;
        tr {
          background-color: #0d1117;
        }
        tr:nth-child(2n) {
          background-color: var(--color-background);
        }
        td, th {
          padding: 6px 13px;
          border: 1px solid var(--color-divider);
        }
      }
    }
  }

  
`

const ContainerComponent: FunctionalComponent = () => (
  <StyledComponent />
)

const About = ContainerComponent
export default About
