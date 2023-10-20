import React, { Component } from "react";
import { NewsItem } from "./NewsItem";

export class TechnologyNews extends Component{
    constructor(){
        super()
        console.log("india")
        this.state={
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=e1044516e091486892a3b049236c1a4c&page=1"
        let data = await fetch(url)
        let parsedata = await data.json()
        this.setState({articles: parsedata.articles})
    }

    render(){
        return(
            <>
                <h2>Top - Technology News</h2>
                <div className="row">
                    {this.state.articles.map((element)=>{
                        return <div className="col-md-4 col-sm-6 col-12">
                        <NewsItem title={element.title?element.title.slice(0,50):""} description={element.description?element.description.slice(0,120):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>
                    })}
                </div>
            </>
        )
    }
}
