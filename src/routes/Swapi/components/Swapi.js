import React from 'react'

export const Swapi = (props) => {
  const renderPeople = (data) => data.map((item, idx) => <li key={'people-'+idx}>{item.name}</li>)
  const renderSpaceships = (data) => data.map((item, idx) => <li key={'spaceship-'+idx}>{item.name}</li>)

  return (
  <div>
    <div style={{ margin: '0 auto' }}>
      <h2>Swapi: {props.counter}</h2>
      <button className='btn btn-default' onClick={props.onListPeople}>
        List people
      </button>
      {' '}
      <button className='btn btn-default' onClick={props.onListSpaceships}>
        List spaceships
      </button>
    </div>
    <div className='row' style={{ margin: '0 auto', textAlign: 'left' }}>
      <div className='col-md-6'>
        <h3>People</h3>
        <ul>
          {renderPeople(props.people)}
          { (props.people.length !== 0) &&
            <a onClick={props.onPeoplePrev}>Prev</a>
          }
          {' · '}
          { (props.people.length !== 0) &&
            <a onClick={props.onPeopleNext}>Next</a>
          }
        </ul>
      </div>
      <div className='col-md-6'>
        <h3>Spaceships</h3>
        <ul>
          {renderSpaceships(props.spaceships)}
          { (props.spaceships.length !== 0) &&
            <a onClick={props.onListSpaceshipsPrev}>Prev</a>
          }
          {' · '}
          { (props.spaceships.length !== 0) &&
            <a onClick={props.onListSpaceshipsNext}>Next</a>
          }
        </ul>
      </div>
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
