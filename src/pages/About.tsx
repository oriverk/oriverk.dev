import { h, FunctionalComponent } from "preact"
import { styled } from "goober"

import markdown from "../../resume.md?raw"
import { parseMarkdwon } from "../utils/markdown"
import DangerouslySetInnerHTML from '../components/markdown'

interface Props {
  className?: string;
}

const Component: FunctionalComponent<Props> = (props) => {
  const { html } = parseMarkdwon(markdown.replace(/\n#/g, "\n"))

  return (
    <main {...props}>
      <div className="content">
        <DangerouslySetInnerHTML html={html} />
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
  }
`

const ContainerComponent: FunctionalComponent = () => (
  <StyledComponent />
)

const About = ContainerComponent
export default About
