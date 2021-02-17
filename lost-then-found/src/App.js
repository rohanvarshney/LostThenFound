import React, { Component } from "react";
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

function App() {

  const [itemData, setData] = React.useState(
    [
      {
        _id: 'lost',
        items: [
          { 
            imgSrc: "https://i.pinimg.com/originals/6c/e7/d2/6ce7d27d2748f31e91468ee59aac67d5.jpg",
            title: 'Blue Water bottle',
            time: '3:00 pm',
            date: '01/27/2021',
            location: 'CULC',
            decription: "It's a blue water bottle.",
            found: false,
          },
          { 
            imgSrc: "https://i.pinimg.com/originals/6c/e7/d2/6ce7d27d2748f31e91468ee59aac67d5.jpg",
            title: 'Blue Water bottle',
            time: '3:00 pm',
            date: '01/27/2021',
            location: 'CULC',
            decription: "It's a blue water bottle.",
            found: false,
          },
          { 
            imgSrc: "https://i.pinimg.com/originals/6c/e7/d2/6ce7d27d2748f31e91468ee59aac67d5.jpg",
            title: 'Blue Water bottle',
            time: '3:00 pm',
            date: '01/27/2021',
            location: 'CULC',
            decription: "It's a blue water bottle.",
            found: false,
          },
          { 
            imgSrc: "https://i.pinimg.com/originals/6c/e7/d2/6ce7d27d2748f31e91468ee59aac67d5.jpg",
            title: 'Blue Water bottle',
            time: '3:00 pm',
            date: '01/27/2021',
            location: 'CULC',
            decription: "It's a blue water bottle.",
            found: false,
          },
          { 
            imgSrc: "https://i.pinimg.com/originals/6c/e7/d2/6ce7d27d2748f31e91468ee59aac67d5.jpg",
            title: 'Blue Water bottle',
            time: '3:00 pm',
            date: '01/27/2021',
            location: 'CULC',
            decription: "It's a blue water bottle.",
            found: false,
          },
          { 
            imgSrc: "https://i.pinimg.com/originals/6c/e7/d2/6ce7d27d2748f31e91468ee59aac67d5.jpg",
            title: 'Blue Water bottle',
            time: '3:00 pm',
            date: '01/27/2021',
            location: 'CULC',
            decription: "It's a blue water bottle.",
            found: false,
          },
          { 
            imgSrc: "https://i.pinimg.com/originals/6c/e7/d2/6ce7d27d2748f31e91468ee59aac67d5.jpg",
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
            imgSrc: "https://i.pinimg.com/originals/6c/e7/d2/6ce7d27d2748f31e91468ee59aac67d5.jpg",
            title: 'Textbook',
            time: '4:00 pm',
            date: '01/27/2021',
            location: 'Klaus',
            decription: "Statics textbook yay.",
            found: true,
          },
          { 
            imgSrc: "https://i.pinimg.com/originals/6c/e7/d2/6ce7d27d2748f31e91468ee59aac67d5.jpg",
            title: 'Textbook',
            time: '4:00 pm',
            date: '01/27/2021',
            location: 'Klaus',
            decription: "Statics textbook yay.",
            found: true,
          },
          { 
            imgSrc: "https://i.pinimg.com/originals/6c/e7/d2/6ce7d27d2748f31e91468ee59aac67d5.jpg",
            title: 'Textbook',
            time: '4:00 pm',
            date: '01/27/2021',
            location: 'Klaus',
            decription: "Statics textbook yay.",
            found: true,
          },
          { 
            imgSrc: "https://i.pinimg.com/originals/6c/e7/d2/6ce7d27d2748f31e91468ee59aac67d5.jpg",
            title: 'Textbook',
            time: '4:00 pm',
            date: '01/27/2021',
            location: 'Klaus',
            decription: "Statics textbook yay.",
            found: true,
          },
          { 
            imgSrc: "https://i.pinimg.com/originals/6c/e7/d2/6ce7d27d2748f31e91468ee59aac67d5.jpg",
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




    return (
      <Router>
      <div>
        <Nav />
          <div class="tabs">
            <span id="searchPost">
              <input type="text" placeholder="Search by keyword..." class="searchBar"></input>
              <button type="button" id="newPost">New Post</button>
            </span>
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
