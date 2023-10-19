import React, { Component } from "react";

export class NewsItem extends Component{
    
    render(){
        let {title, description, imageUrl, newsUrl} = this.props;
        return(
            <div className="my-3">
                <div className="card">
                    <img src={!imageUrl?"https://www.hindustantimes.com/ht-img/img/2023/10/17/1600x900/Screenshot_2023-10-18_011528_1697571947440_1697571956584.png":imageUrl} className="card-img-top" alt="img"/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
