import React, { Component } from 'react'

export class NewsItems extends Component {
  
  render() {


    let { title, description , imgUrl, newsUrl} = this.props;

    //default values
    const defaultUrl = "https://i.pinimg.com/originals/d1/a6/2a/d1a62a6d8969170025f279115470e34b.jpg"



    return (
     <div className="card" >
      <img src={!imgUrl?defaultUrl:imgUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read more</a>
      </div>
    </div>
    )

  }
}

export default NewsItems