import { socialLinks } from '../data'
import SocialLink from './SocialLink'

const SocialLinks = ({ parentClass, childClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map((link) => {
        return <SocialLink {...link} childClass={childClass} key={link.id} />
      })}
    </ul>
  )
}

export default SocialLinks
