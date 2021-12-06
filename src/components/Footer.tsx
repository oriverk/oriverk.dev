import { h, FunctionalComponent } from "preact"
import { styled } from "goober"

interface Props {
  className?: string;
}

const year = new Date().getFullYear()
const preactjs = "https://preactjs.com/"
const cloudflarePages = "https://pages.cloudflare.com/"

const Component: FunctionalComponent<Props> = (props) => {
  return (
    <footer {...props}>
      <small>@{year} Kawano Yudai</small><br />
      <small>
        This site is built with{" "}
        <a href={preactjs} target="_blank" rel="noopener noreferrer">
          Preact
        </a>{" "}
        and hosting on{" "}
        <a href={cloudflarePages} target="_blank" rel="noopener noreferrer">
          Cloudflare Pages
        </a>.
      </small>
    </footer>
  )
}

const StyledComponent = styled(Component)`
  padding: 1rem;
  text-align: center;
  & > small {
    margin: 0 auto;
    max-width: var(--max-width);
    font-size: 1rem;
    color: var(--color-gray);
    a {
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  }
`

const ContainerComponent: FunctionalComponent = () => (
  <StyledComponent />
)

const Footer = ContainerComponent
export default Footer
