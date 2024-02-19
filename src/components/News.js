import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 12,
        category: 'general',
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    // it is used to initialize the state of the component
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
    }

    
    // async fetchData() {
    //     this.setState({ loading: true })
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    //     let data = await fetch(url);
    //     let parsedData = await data.json()
    //     this.setState({
    //         articles: parsedData.articles,
    //         totalResults: parsedData.totalResults,
    //         loading: false
    //     })
    // }


// it is used to fetch more data when we scroll down
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false
        })
    };
//  it is used to fetch data from the api
    // it is used to fetch data when the component is mounted for initial data
    async componentDidMount() {
        this.props.setProgress(10);
        this.setState({ loading: true })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json()
        this.props.setProgress(70);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100);
    }

    // use for pervious and next button

    // handlePrevClick = async () => {
    //     this.setState({
    //         page: this.state.page - 1,
    //     })
    //     this.fetchData();

    // }

    // handleNextClick = async () => {
    //     this.setState({
    //         page: this.state.page + 1,
    //     })
    //     this.fetchData();
    // }

    // it is used to render the component
    render() {
        return (
            <>
                <h2 className='text-center  my-4' style={{ textTransform: "capitalize" }} >Taaza Khabar - Top {this.props.category} Headlines</h2>
                {this.state.loading && <Spinner />}
                {/* it is used to infinite scroll */}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={this.state.loading &&<Spinner />}
                    
                >
                    <div className="container my-3">
                        <div className='row'>
                            {this.state.articles.map((element) => {
                                return <div className='col-md-3 my-2' key={element.url}>
                                    <NewsItem title={element.title ? element.title.slice(0, 45) : "Unknown Title...."} description={element.description ? element.description.slice(0, 80) : "Unknown Description..."}
                                        author={element.author ? element.author : "Unkonwn"} date={element.publishedAt ? element.publishedAt : "Unknown"} source={element.source.name}
                                        imageUrl={element.urlToImage} newsUrl={element.url} />
                                </div>
                            })}

                        </div>
                    </div>

                    {/* Previous and next button */}
                    {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-success" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-success" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}
                </InfiniteScroll>
            </>

        )
    }
}

export default News