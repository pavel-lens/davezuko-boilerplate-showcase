import React from 'react'

export const Swapi = (props) => {
  const renderPeople = (data) => data.map((item, idx) => <li key={'people-'+idx}>{item.name}</li>)
  const renderSpaceships = (data) => data.map((item, idx) => <li key={'spaceship-'+idx}>{item.name}</li>)

  return (
  <div>
    <div style={{ margin: '0 auto' }} >
      <h2>Swapi: {props.counter}</h2>
      <button className='btn btn-default' onClick={props.onListPeople}>
        List people
      </button>
      {' '}
      <button className='btn btn-default' onClick={props.onListSpaceships}>
        List spaceships
      </button>
    </div>
    <div>
      <ul>
        {renderPeople(props.people)}
        {renderSpaceships(props.spaceships)}
      </ul>
    </div>
  </div>
  )
}

Swapi.propTypes = {
  people          : React.PropTypes.array.isRequired,
  spaceships      : React.PropTypes.array.isRequired,
  onListPeople    : React.PropTypes.func.isRequired,
  onListSpaceships: React.PropTypes.func.isRequired
}

export default Swapi
