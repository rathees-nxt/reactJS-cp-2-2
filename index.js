const Notification = props => {
  //  Write your code here.
  const {className, children, imageUrl} = props
  const containerClassName = `notification-container ${className}`
  return (
    <div className={containerClassName}>
      <img className='icon-img' src={imageUrl} />
      <p className='para'>{children}</p>
    </div>
  )
}

const element = (
  //  Write your code here.
  <div className='notifications-container'>
    <h1 className='heading'>Notifications</h1>
    <div className='notification-card-container'>
      <Notification
        className='info-msg'
        children='Information Message'
        imageUrl='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
      />
      <Notification
        className='succ-msg'
        children='Success Message'
        imageUrl='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
      />
      <Notification
        className='warn-msg'
        children='Warning Message'
        imageUrl='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
      />
      <Notification
        className='err-msg'
        children='Error Message'
        imageUrl='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
