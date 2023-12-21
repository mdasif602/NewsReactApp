import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className='my-3'>
        <div className="card">
        <div style = {{
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'absolute',
          right: '0'
        }}>
            <span className="badge rounded-pill bg-danger">
              {source}
            </span>
          </div>
          <img src={imageUrl != null ? imageUrl : "https://images.news18.com/ibnlive/uploads/2023/12/sabarimala-massive-rush-kerala-cm-vijayan-2023-12-56f6aa6a29fdfe4dd72b711ae188f288-16x9.png?impolicy=website&width=1200&height=675"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title != null ? title : ""}</h5>
            <p className="card-text">{description != null ? description : ""}</p>
            <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
}

export default NewsItem