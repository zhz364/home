// Styles
import React from 'react';
import ProjectCard from './ProjectCard'
// React component for form inputs
class CardInput extends React.Component {
    render() {
      return(
        <fieldset>
          <input name={this.props.name} id={this.props.id} type={this.props.type || 'text'} placeholder={this.props.placeholder} required />
        </fieldset>
      )
    }
  }
  
  // React component for textarea
  class CardTextarea extends React.Component {
    render() {
      return(
        <fieldset>
          <textarea name={this.props.name} id={this.props.id} placeholder={this.props.placeholder} required ></textarea>
        </fieldset>
      )
    }
  }
  
  // React component for form button
  class CardBtn extends React.Component {
    render() {
      return(
        <fieldset>
          <button className={this.props.className} type={this.props.type} value={this.props.value}>{this.props.value}</button>
        </fieldset>
      )
    }
  }

  
  // React component for the front side of the card
  const CardFront = ({imgLink,liveLink}) => {
    return(
        <a className="liveLink" href={liveLink} target="_blank" >
            <div className='card-side side-front' style={{backgroundImage: `url(${imgLink})`, backgroundPositionX:'center',backgroundPositionY:'center', position:'absolute',left:'0', top:'0', backgroundSize:'100% 100%'}}>
                {/* <img src={imgLink} style={{objectFit: 'fill', width: '100%', maxHeight:'100%'}}></img> */}
            {/* <div className='container-fluid'>
                <div className='row'>
                <div className='col-xs-6'>
                    
                </div>
                </div>
            </div> */}
            </div>
        </a>
      )
  }
  
  // React component for the back side of the card
  const CardBack = ({title,desc,liveLink}) => {
    return(
        <a className="liveLink" href={liveLink} target="_blank" style={{ color: 'inherit', textDecoration: 'inherit'}} >
            <div className='card-side side-back'>
            
                <div className='container-fluid'>
                    <h1>{title}</h1>
                </div>
                <div>
                    <p>
                        <h3>{desc}</h3>
                    </p>
                </div>
            </div>
        </a>
        )
  }
  
  // React component for the card (main component)
  const Card = ({title,desc,imgLink,liveLink}) => {
    return(
        <div className='card-container'>
          <div className='card-body'>
            <CardBack title={title} desc={desc} liveLink={liveLink}/>
            <CardFront imgLink={imgLink} liveLink={liveLink}/>
          </div>
        </div>
    )
  }
export default Card