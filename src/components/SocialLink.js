const SocialLink = ({ href, childClass, icon }) => {
  return (
    <li>
      <a href={href} target='_blank' className={childClass} rel='noreferrer'>
        <i className={icon}></i>
      </a>
    </li>
  )
}

export default SocialLink
