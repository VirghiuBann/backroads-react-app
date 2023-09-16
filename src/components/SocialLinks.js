import { socialLinks } from '../data'

const SocialLinks = ({ parentClass, childClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map(({ id, href, icon }) => {
        return (
          <li key={id}>
            <a
              href={href}
              target='_blank'
              className={childClass}
              rel='noreferrer'
            >
              <i className={icon}></i>
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default SocialLinks
