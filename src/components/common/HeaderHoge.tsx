import { useRouter } from 'next/router'
import Link from 'next/link'
import css from 'styled-jsx/css'
import { CustomImg, CustomImgProps } from './Image'
import { HomeIcons } from '../icons'


const style = css`
.header {
  position: relative;
  height: 30vh;
}

:global(.headerImg) {
  object-fit: cover;
  height: 100%;
  filter: brightness(90%);
}

.headerContent {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.title {
  margin: 1rem;
  text-align: center;
  color: var(--colorTextDefault);
}

.titleLink {
  color: var(--colorTextDefault);
}
.titleLink:hover {
  text-decoration: none;
  color: var(--colorTextGray);
}
`

// type ImgProps = Omit<CustomImgProps, 'className'> // same with below
type ImgProps = Pick<CustomImgProps, 'src' | 'alt'>

type HeaderProps = {
  className?: string,
  pageLink?: string,
  title?: string,
  subTitle?: string,
}

const Icons: React.FC = () => {
  const path = useRouter().pathname
  const isRoot = path === '/'

  if (isRoot) {
    return <HomeIcons />
  } else {
    return null
  }
}

export const Header: React.FC<HeaderProps & ImgProps> = (
  {
    children,
    className,
    pageLink,
    src = '/assets/home/sunrise.jpg',
    alt = '',
    title = 'Kawano Yudai',
    subTitle = 'B.Agr'
  }
) => {
  
  
  return (
    <>
      <div className={className}>
        <div className='header'>
          <CustomImg src={src} alt={alt} className='headerImg' />
          <div className='headerContent'>
            <div className='title'>
              <h1>
                <Link href={pageLink}>
                  <a className='titleLink'>{title}</a>
                </Link>
              </h1>
              <div className='subTitle'>
                {subTitle}
              </div>
            </div>
            <Icons />
          </div>
        </div>
      </div>
      <style jsx>{style}</style>
    </>
  )
}