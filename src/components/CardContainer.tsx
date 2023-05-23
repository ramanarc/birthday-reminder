

const CardContainer = () => {
  return (
    <div className='card-container'>
      {/* Card Title Dynamic */}
      <h1>5 Birthdays Today</h1>
      {/* Card */}
      <div className='card-wrap'>
        <img src="https://www.course-api.com/images/people/person-1.jpeg" alt="" />
        <div className='card-content'>
          <h2>Name</h2>
          <h4>Age</h4>
        </div>
      </div>
      <button>Clear All</button>
    </div>
  )
}

export default CardContainer
