import './App.css';
import {Card , Button} from "antd";
import axios from "axios";
import React,{ useEffect, useState } from 'react';

const {Meta} = Card ;
function App() {
  const [news, setNews] = useState([]);

  useEffect ( ()=> {
    const loadNews = async()=>{
      const response = await axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=dcf25d889b7b49fc9066776bc15a6dee")
      setNews(response.data.articles);
    };

    loadNews();
  },[]);

  console.log("news", news);
  return (
    <div className="App">
              {news && news.map((item , index)=> {
                return(
                  <Card 
                  key={index}
                  hoverable
                  style={{width : "100%"}}
                  cover = {<img alt = "images" src= {item.urlToImage}/>} >
                  <Meta title= {item.title} description = {item.content}/>
                  <a href={item.url} target="_blank" rel="noopnner">
                  <Button type='primary' style={{marginTop: "10px"}}>Read More</Button>
                  </a>
                  </Card>

                )
              }
              )}
    </div>
  );
}

export default App;
