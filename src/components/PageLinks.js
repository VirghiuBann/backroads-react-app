import { pageLinks } from '../data'
import PageLink from './PageLink'

const PageLinks = ({ parentClass, childClass }) => {
  return (
    <ul className={parentClass} id='nav-links'>
      {pageLinks.map((page) => {
        return <PageLink {...page} childClass={childClass} key={page.id} />
      })}
    </ul>
  )
}

export default PageLinks
