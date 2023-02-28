import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {status} = props

  const yetToRegisterView = () => (
    <div className="event-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="event-image-status"
      />
      <p>A live performance brings so much to your relationship with dance</p>
      <button type="button">Register Here</button>
    </div>
  )

  const registeredView = () => (
    <div className="event-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="event-image-status"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  const registrationClosed = () => (
    <div className="event-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="event-image-status"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. we will reopen the registrations soon</p>
    </div>
  )

  switch (status) {
    case 'YET_TO_REGISTER':
      return yetToRegisterView()

    case 'REGISTERED':
      return registeredView()
    case 'REGISTRATIONS_CLOSED':
      return registrationClosed()
    default:
      return <p>Click on an event, to view its registration details</p>
  }
}

export default ActiveEventRegistrationDetails
