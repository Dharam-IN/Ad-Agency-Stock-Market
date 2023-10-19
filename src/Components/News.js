import React, { Component } from "react";
import { NewsItem } from "./NewsItem";

export class News extends Component{
    constructor(){
        super();
        console.log("Hello iam a constructor from news components")
        this.state={
            articles: [],
            loading: false
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=e1044516e091486892a3b049236c1a4c"
        let data = await fetch(url)
        let parsedata = await data.json()
        console.log(parsedata);
        this.setState({articles: parsedata.articles})
    }
    render(){
        console.log("Render")
        return(
            <>
            <div className="container">
                <h2>News Daily - Top Heading</h2>
                <div className="row">
                {this.state.articles.map((element)=>{
                   return <div className="col-md-4 col-12" key={element.url}>
                   <NewsItem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
               </div>
                })}
                </div>
            </div>
            </>
        )
    }
}
