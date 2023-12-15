import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        console.log("hello i am a constructor from news Component");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        console.log("cdm");
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=f4c8a0809a084bc0a5edd306c154496a&page=1&pageSize=20";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
    }

    handlePreviousClick = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=f4c8a0809a084bc0a5edd306c154496a&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }
    
    handleNextClick = async ()=>{
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

        } else {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=f4c8a0809a084bc0a5edd306c154496a&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({articles: parsedData.articles})
            this.setState({
                page: this.state.page + 1
            })
        }  
    }
  render() {
    console.log("render");
    return (
      <div className='container my-3'>
        <h2>NewsApp - Top Headlines</h2>
        <div className="row">
            {this.state.articles.map((element) =>{
                return <div className="col-md-4" key = {element.url}>
                <NewsItem title = {element.title} description = {element.description} imageUrl = {element.urlToImage} newsUrl = {element.url}/>
            </div>
            })}
            
        </div>
        <div className="d-flex justify-content-between">
            <button disabled = {this.state.page <= 1} type="button" class="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
            <button  disabled = {this.state.page < 1} type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News