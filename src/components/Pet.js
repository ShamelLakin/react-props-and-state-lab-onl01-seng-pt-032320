import React from 'react'

class Pet extends React.Component {
  handleAdoptPet = (event) => {

    this.props.onAdoptPet(this.props.pet.id)
  }

  showButton = () => {
    if(this.props.pet.isAdopted){
      return <button className="ui disabled button" >Already adopted</button>
    } else {
      return <button onClick={event => this.handleAdoptPet(event)} className="ui primary button" >Adopt pet</button>
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.name}{' '}
            {
              {
                male: '♂',
                female: '♀'
              }[this.props.pet.gender]
            }
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
          <p>Age: {this.props.pet.age}</p>
          <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
        {this.showButton()}
          {/* <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button">Adopt pet</button> */}
        </div>
      </div>
    )
  }
}

export default Pet
