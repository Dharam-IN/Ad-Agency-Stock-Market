import React, { Component } from "react";
import { NewsItem } from "./NewsItem";

export class News extends Component{
    constructor(){
        super();
        console.log("Hello iam a constructor from news components")
        this.state={
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=e1044516e091486892a3b049236c1a4c&page=1"
        let data = await fetch(url)
        let parsedata = await data.json()
        console.log(parsedata);
        this.setState({articles: parsedata.articles})
    }

    handlePrevClick = async()=>{
        console.log("Previews")
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e1044516e091486892a3b049236c1a4c&page=${this.state.page - 1}`
        let data = await fetch(url)
        let parsedata = await data.json()
        console.log(parsedata);
        this.setState({articles: parsedata.articles})
        this.setState({
            page: this.state.page - 1,
            articles: parsedata.articles
        })
    }
    handleNextClick = async()=>{
        console.log("Next")
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e1044516e091486892a3b049236c1a4c&page=${this.state.page + 1}`
        let data = await fetch(url)
        let parsedata = await data.json()
        console.log(parsedata);
        this.setState({articles: parsedata.articles})
        this.setState({
            page: this.state.page + 1,
            articles: parsedata.articles
        })
    }

    render(){
        console.log("Render")
        return(
            <>
            <div className="container my-5">
            <h2><marquee behavior="scroll" direction="left">News Daily - Cricket, Business, Technology, Stock Market, Money, Tranding Topics etc.</marquee></h2>
                <div className="row">
                {this.state.articles.map((element)=>{
                   return <div className="col-md-4 col-12" key={element.url}>
                   <NewsItem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
               </div>
                })}
                </div>
            </div>
            <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previews</button>
                <button className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
            </>
        )
    }
}
