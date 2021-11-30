import GithubIcon from "./Github"
import TwitterIcon from "./Twitter"
import PenIcon from "./Pen"
import ContactIcon from "./Contact"
import RSSIcon from "./RSS"

export interface SvgIconProps {
  color: string;
  size: number;
  label?: string;
  title?: string;
  role?: "presentation" | "img"
}

export { GithubIcon, TwitterIcon, PenIcon, ContactIcon, RSSIcon }