import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div>
                <div className="card" >
                    <img src={!imageUrl ? "https://c.ndtvimg.com/2024-02/ut2p2a1o_lake-generic-unsplash_625x300_20_February_24.jpeg?ver-20240117.06" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ left: "90%", zIndex: "1" }}>
                            {source}
                        </span><span className='badge bg-secondary'>New</span></h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toLocaleString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
