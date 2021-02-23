import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Lost from "./components/Lost";
import Found from "./components/Found";
import Matches from "./components/Matches";
import Nav from "./components/Nav";
import Popup from "./components/Popup";

function App() {

  const [itemData, setData] = React.useState(
    [
      {
        _id: 'lost',
        items: [
          { 
            imgSrc: "https://hips.hearstapps.com/vidthumb/images/delish-credit-card-water-bottle-002-1523389699.jpeg?crop=1.00xw%3A1.00xh%3B0%2C0&resize=480%3A270",
            title: 'Blue Water bottle',
            time: '3:00 pm',
            date: '01/27/2021',
            location: 'CULC',
            decription: "It's a blue water bottle.",
            found: false,
          },
          { 
            imgSrc: "https://hips.hearstapps.com/vidthumb/images/delish-credit-card-water-bottle-002-1523389699.jpeg?crop=1.00xw%3A1.00xh%3B0%2C0&resize=480%3A270",
            title: 'Blue Water bottle',
            time: '3:00 pm',
            date: '01/27/2021',
            location: 'CULC',
            decription: "It's a blue water bottle.",
            found: false,
          },
          { 
            imgSrc: "https://hips.hearstapps.com/vidthumb/images/delish-credit-card-water-bottle-002-1523389699.jpeg?crop=1.00xw%3A1.00xh%3B0%2C0&resize=480%3A270",
            title: 'Blue Water bottle',
            time: '3:00 pm',
            date: '01/27/2021',
            location: 'CULC',
            decription: "It's a blue water bottle.",
            found: false,
          },
          { 
            imgSrc: "https://hips.hearstapps.com/vidthumb/images/delish-credit-card-water-bottle-002-1523389699.jpeg?crop=1.00xw%3A1.00xh%3B0%2C0&resize=480%3A270",
            title: 'Blue Water bottle',
            time: '3:00 pm',
            date: '01/27/2021',
            location: 'CULC',
            decription: "It's a blue water bottle.",
            found: false,
          },
          { 
            imgSrc: "https://hips.hearstapps.com/vidthumb/images/delish-credit-card-water-bottle-002-1523389699.jpeg?crop=1.00xw%3A1.00xh%3B0%2C0&resize=480%3A270",
            title: 'Blue Water bottle',
            time: '3:00 pm',
            date: '01/27/2021',
            location: 'CULC',
            decription: "It's a blue water bottle.",
            found: false,
          },
          { 
            imgSrc: "https://hips.hearstapps.com/vidthumb/images/delish-credit-card-water-bottle-002-1523389699.jpeg?crop=1.00xw%3A1.00xh%3B0%2C0&resize=480%3A270",
            title: 'Blue Water bottle',
            time: '3:00 pm',
            date: '01/27/2021',
            location: 'CULC',
            decription: "It's a blue water bottle.",
            found: false,
          },
          { 
            imgSrc: "https://hips.hearstapps.com/vidthumb/images/delish-credit-card-water-bottle-002-1523389699.jpeg?crop=1.00xw%3A1.00xh%3B0%2C0&resize=480%3A270",
            title: 'Blue Water bottle',
            time: '3:00 pm',
            date: '01/27/2021',
            location: 'CULC',
            decription: "It's a blue water bottle.",
            found: false,
          }
        ]
      },
      {
        _id: 'found',
        items: [
          { 
            imgSrc: "https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/120284761/1e6ee42f746571cb04b3b0b1290c2545?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=f621d342b0f5728f0564ab7b629c795f",
            title: 'Textbook',
            time: '4:00 pm',
            date: '01/27/2021',
            location: 'Klaus',
            decription: "Statics textbook yay.",
            found: true,
          },
          { 
            imgSrc: "https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/120284761/1e6ee42f746571cb04b3b0b1290c2545?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=f621d342b0f5728f0564ab7b629c795f",
            title: 'Textbook',
            time: '4:00 pm',
            date: '01/27/2021',
            location: 'Klaus',
            decription: "Statics textbook yay.",
            found: true,
          },
          { 
            imgSrc: "https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/120284761/1e6ee42f746571cb04b3b0b1290c2545?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=f621d342b0f5728f0564ab7b629c795f",
            title: 'Textbook',
            time: '4:00 pm',
            date: '01/27/2021',
            location: 'Klaus',
            decription: "Statics textbook yay.",
            found: true,
          },
          { 
            imgSrc: "https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/120284761/1e6ee42f746571cb04b3b0b1290c2545?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=f621d342b0f5728f0564ab7b629c795f",
            title: 'Textbook',
            time: '4:00 pm',
            date: '01/27/2021',
            location: 'Klaus',
            decription: "Statics textbook yay.",
            found: true,
          },
          { 
            imgSrc: "https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/120284761/1e6ee42f746571cb04b3b0b1290c2545?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=f621d342b0f5728f0564ab7b629c795f",
            title: 'Textbook',
            time: '4:00 pm',
            date: '01/27/2021',
            location: 'Klaus',
            decription: "Statics textbook yay.",
            found: true,
          }
        ]
      }
    ]);

    



    /*let [isLost, setLost] = React.useState(true);

    setLost = (d) => {
      isLost = d;
    } */

  

    return (
      <Router>
      <div>
        <Nav />
          <div class="tabs">
            
              <Switch>
                <Route path="/Lost" render={() => <Lost
                itemData={itemData}
                setData={setData}/> }
                exact
                />
                <Route path="/Found" render={() => <Found
                itemData={itemData}
                setData={setData}/> }
                exact
                />
                <Route path="/Matches" component={Matches}/>
                <Route path="/" component={Home}/>
              </Switch>

              
          </div>
      </div>

    </Router>
  );
}

export default App;
