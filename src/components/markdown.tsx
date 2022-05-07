import { h, FunctionalComponent } from "preact";
import { styled } from "goober";

interface PassedProps {
  html: string;
}

interface Props extends PassedProps {
  className?: string;
}

const Component = ({ className, html }: Props) => (
  // eslint-disable-next-line react/no-danger
  <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
);

const StyledComponent = styled(Component)`
  h2,
  h3,
  h4 {
    margin: 1.5rem auto 1rem;
    font-weight: 600;
    line-height: 1.25;
  }

  h2 {
    padding-bottom: 0.3rem;
    border-bottom: 1px solid var(--color-divider);
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.25rem;
  }

  li {
    margin-top: 1rem;
  }

  table {
    border-collapse: collapse;

    tr {
      background-color: #0d1117;
    }

    tr:nth-child(2n) {
      background-color: var(--color-background);
    }

    td,
    th {
      padding: 0.5rem 0.8em;
      border: 1px solid var(--color-divider);
    }
  }
`;

const ContainerComponent: FunctionalComponent<PassedProps> = (props) => <StyledComponent {...props} />;

export const DangerouslySetInnerHTML = ContainerComponent;
