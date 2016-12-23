import React from 'react'

export const Swapi = (props) => {
  const renderPeople = (data) => data.map((item, idx) => <li key={'people-'+idx}>{item.name}</li>)
  const renderSpaceships = (data) => data.map((item, idx) => <li key={'spaceship-'+idx}>{item.name}</li>)
  const renderNav = (nav, prevCB, nextCB) => {
    return (
      <div>
        { !!nav.prev ? <a onClick={prevCB}>Prev</a> : <span>Prev</span> }
        <span> · </span>
        { !!nav.next ? <a onClick={nextCB}>Next</a> : <span>Next</span> }
      </div>
    )
  }

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
          { (props.people.length !== 0) && renderNav(props.nav.people, props.onPeoplePrev, props.onPeopleNext) }
          {renderPeople(props.people)}
        </ul>
      </div>
      <div className='col-md-6'>
        <h3>Spaceships</h3>
        <ul>
          { (props.spaceships.length !== 0) && renderNav(props.nav.spaceships, props.onListSpaceshipsPrev, props.onListSpaceshipsNext) }
          {renderSpaceships(props.spaceships)}
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
