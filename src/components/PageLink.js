const PageLink = ({ href, childClass, text }) => {
  return (
    <li>
      <a href={href} className={childClass}>
        {text}
      </a>
    </li>
  )
}

export default PageLink
