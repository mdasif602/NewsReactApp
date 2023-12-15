import React, { Component } from 'react'

export class NewsItem extends Component {
    

  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: '18rem'}}>
            <img src={imageUrl != null ? imageUrl : "https://images.news18.com/ibnlive/uploads/2023/12/sabarimala-massive-rush-kerala-cm-vijayan-2023-12-56f6aa6a29fdfe4dd72b711ae188f288-16x9.png?impolicy=website&width=1200&height=675"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title != null ? title : ""}...</h5>
                <p className="card-text">{description != null ? description : ""}...</p>
                <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem