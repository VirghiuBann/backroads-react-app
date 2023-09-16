import { services } from '../data'

const Service = () => {
  return (
    <div className='section-center services-center'>
      {services.map((item) => {
        return (
          <article className='service' key={item.id}>
            <span className='service-icon'>
              <i className={item.icon}></i>
            </span>
            <div className='service-info'>
              <h4 className='service-title'>{item.title}</h4>
              <p className='service-text'>{item.text}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Service
