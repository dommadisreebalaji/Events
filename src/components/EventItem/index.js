// Write your code here
import './index.css'

const EventItem = props => {
  const {event, changeTheStatus} = props
  const {id, imageUrl, name, location} = event
  const updateStatus = () => {
    changeTheStatus(id)
  }
  return (
    <li className="list-item">
      <button className="button-image" type="button" onClick={updateStatus}>
        <img src={imageUrl} alt="event" className="image" />
      </button>
      <p className="heading-2" onClick={updateStatus}>
        {name}
      </p>
      <p className="location" onClick={updateStatus}>
        {location}
      </p>
    </li>
  )
}

export default EventItem
