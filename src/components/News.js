import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category: 'general',
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,

    }
    constructor(props) {
        super(props);
        console.log("hello i am a constructor from news Component");
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.props.category.charAt(0).toUpperCase() + this.props.category.substring(1)} - NewsApp`;
    }

    async componentDidMount() {
        console.log("cdm");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f4c8a0809a084bc0a5edd306c154496a&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles, 
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    // handlePreviousClick = async ()=>{
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f4c8a0809a084bc0a5edd306c154496a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    //     this.setState({loading: true})
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     this.setState({loading: false})
    //     console.log(parsedData);
    //     this.setState({
    //         page: this.state.page - 1,
    //         articles: parsedData.articles
    //     })
    // }
    
    // handleNextClick = async ()=>{
    //     if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
    //         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f4c8a0809a084bc0a5edd306c154496a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //         this.setState({loading: true})
    //         let data = await fetch(url);
    //         let parsedData = await data.json();
    //         this.setState({loading: false})
    //         this.setState({articles: parsedData.articles})
    //         this.setState({
    //             page: this.state.page + 1
    //         })
    //     }  
    // }

    fetchMoreData = async() => {
        this.setState({page: this.state.page + 1})
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f4c8a0809a084bc0a5edd306c154496a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({loading: false})
        this.setState({articles: this.state.articles.concat(parsedData.articles)})
        this.setState({
            page: this.state.page + 1,
            totalResults: parsedData.totalResults
        })
      };
  render() {
    console.log("render");
    return (
      <>
        <h1 className="text-center" style = {{margin: "25px 0px"}}>NewsApp - Top Headlines from {this.props.category.charAt(0).toUpperCase() + this.props.category.substring(1)} category</h1>
        {this.state.loading && <Spinner/>}
        {/* {this.state.loading && <Spinner/>} */}
        {/* <div className="row">
            {!this.state.loading && this.state.articles.map((element) =>{
                return <div className="col-md-4" key = {element.url}>
                <NewsItem title = {element.title} description = {element.description} imageUrl = {element.urlToImage} newsUrl = {element.url} author = {!element.author ? "Unknown" : element.author} date ={element.publishedAt} source = {element.source.name}/>
            </div> */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
          
          <div className="container">
            <div className="row">
                {this.state.articles.map((element) =>{
                return <div className="col-md-4" key = {element.url}>
                <NewsItem title = {element.title} description = {element.description} imageUrl = {element.urlToImage} newsUrl = {element.url} author = {!element.author ? "Unknown" : element.author} date ={element.publishedAt} source = {element.source.name}/>
                </div>
                   })}
            </div>
        </div>
        </InfiniteScroll>
        {/* <div className="d-flex justify-content-between">
            <button disabled = {this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
            <button  disabled = {this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
      </>
    )
  }
}

export default News




// import NewsItem from './NewsItem'
// import Spinner from './Spinner';
// import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {
//     static defaultProps = {
//         pageSize: PropTypes.number,
//         category: PropTypes.string,
//     }
//     capitalizeFirstLetter = (string) => {
//         return string.charAt(0).toUpperCase() + string.slice(1);
//     }
//     constructor(props) {
//         super(props);
//         this.state = {
//             articles: [],
//             loading: true,
//             page: 1,
//             totalResults: 0
//         }
//         document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
//     }

//     async updateNews() {
//         const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f4c8a0809a084bc0a5edd306c154496a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
//         this.setState({ loading: true });
//         let data = await fetch(url);
//         let parsedData = await data.json()
//         this.setState({
//             articles: parsedData.articles,
//             totalResults: parsedData.totalResults,
//             loading: false, 
//         })

    
//         this.updateNews()
//     }

//     fetchMoreData = async () => {  
//         this.setState({page: this.state.page + 1})
//         const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f4c8a0809a084bc0a5edd306c154496a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
//         let data = await fetch(url);
//         let parsedData = await data.json()
//         this.setState({
//             articles: this.state.articles.concat(parsedData.articles),
//             totalResults: parsedData.totalResults
//         })
//       };

//     render() {
//         return (
//             <>
//                 <h1 className="text-center" style={{ margin: '35px 0px' }}>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
//                 {this.state.loading && <Spinner />}
//                 <InfiniteScroll
//                     dataLength={this.state.articles.length}
//                     next={this.fetchMoreData}
//                     hasMore={this.state.articles.length !== this.state.totalResults}
//                     loader={<Spinner/>}
//                 > 
//                     <div className="container">

//                     <div className="row">
//                         {this.state.articles.map((element) => {
//                             return <div className="col-md-4" key={element.url}>
//                                 <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
//                             </div>
//                         })}
//                     </div>
//                     </div> 
//                 </InfiniteScroll>

//             </>
//         )
//     }
// }

// export default News
	