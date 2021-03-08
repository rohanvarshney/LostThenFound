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

	/* DB Schema:

	_id:602f386eb146ef0a25e66577
	post_id:3384440726311
	who_created:"Mary Smith"
	post_title:"Linear Algebra Textbook"
	description:"I think I might have left my book when I was studying in Crosland.. Ha..."
	found:false
	date_posted:2020-12-12T04:00:00.000+00:00
	date_lost:2020-12-11T04:00:00.000+00:00
	tags:Array
	date_found:0000-01-01T00:00:00.000+00:00
	location_found:""
	current_location:"Crosland Tower"
	possible_matches:Array
	imgSrc:"https://i.pinimg.com/originals/02/1a/08/021a08be4c6cb83ab865beed862afc..."
	*/

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
            description: "I lost this on the 4th floor.",
            found: false,
          },
          { 
            imgSrc: "https://mobileimages.lowes.com/product/converted/888830/888830021330xl.jpg",
            title: 'Sea Blue Thermo',
            time: '8:00 pm',
            date: '01/22/2021',
            location: 'CULC',
            description: "It has CRC stickers on it.",
            found: false,
          },
          { 
            imgSrc: "https://i.pcmag.com/imagery/reviews/02pPlSC851BxRP4BFdufSBJ-1..1605566017.jpg",
            title: 'MacBook Air 2016 15in',
            time: '1:00 pm',
            date: '02/23/2021',
            location: 'Crosland Tower',
            description: "SRN: 382739827. Should have users Mary and Guest. Please return ASAP!",
            found: false,
          },
          { 
            imgSrc: "https://i.ebayimg.com/images/g/pawAAOSwOgdYooM~/s-l300.jpg",
            title: 'ECON4652 Textbook',
            time: '8:20 pm',
            date: '01/13/2021',
            location: 'Tech Green',
            description: "I left it as went to get water and came back and it was gone.",
            found: false,
          },
          { 
            imgSrc: "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&itemId=2280991-847&recipeName=680",
            title: 'Airpods Pro',
            time: '3:00 pm',
            date: '02/16/2021',
            location: 'CULC 144',
            description: "Forgot after class, should be engraved with name 'Jeanie'.",
            found: false,
          },
          { 
            imgSrc: "https://target.scene7.com/is/image/Target/GUEST_36f94c38-9b9f-4037-b069-4a2dda04768a?wid=488&hei=488&fmt=pjpeg",
            title: 'Sony Headphones',
            time: '10:00 am',
            date: '01/29/2021',
            location: 'Exhibition Hall',
            description: "Left outside Twisted Taco.",
            found: false,
          }
        ]
      },
      {
        _id: 'found',
        items: [
          { 
            imgSrc: "https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/120284761/1e6ee42f746571cb04b3b0b1290c2545?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=f621d342b0f5728f0564ab7b629c795f",
            title: 'Calculus Textbook',
            time: '4:00 pm',
            date: '01/27/2021',
            location: 'Klaus',
            description: "Statics textbook, should have Ethan written on front page.",
            found: true,
          },
          { 
            imgSrc: "https://www.zdnet.com/a/hub/i/r/2020/11/16/37e33024-2892-4bb7-9d21-6ac6f7544def/thumbnail/770x433/5f1b7f881bfb80a9f2bbe02bc6d64b49/apple-macbook-pro-m1-2020-5.jpg",
            title: 'Macbook Air 15in',
            time: '2:30 pm',
            date: '02/23/2021',
            location: 'Crosland',
            description: "I think it belongs to a Mary?",
            found: false,
          },
          { 
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStcEUXo4knS3vxJSsTnu-jfuz8Dl7Gky35Dg&usqp=CAU",
            title: 'Sennheiser Headphones',
            time: '4:00 pm',
            date: '02/26/2021',
            location: 'Klaus',
            description: "Studying and left behind on 3rd floor table.",
            found: true,
          },
          { 
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXw76JkfmG-FeiA86Q64fEg2P8Lkc5cbkQVQ&usqp=CAU",
            title: 'Apple EarPods',
            time: '4:00 pm',
            date: '02/02/2021',
            location: 'MRDC',
            description: "Left outside of Invention Studio.",
            found: true,
          }
        ]
      }
    ]
  );

  /*
  const { MongoClient } = require("mongodb");
  const url = "mongodb+srv://0317:lostthenfound@cluster0.lwe2m.mongodb.net/lost_then_found?retryWrites=true&w=majority";
  const client = new MongoClient(url);

  async function connectToMongoDB() {
      try {
        // var postList = null;

          await client.connect();
          const collection = client.db("lost_then_found").collection("posts");
          var postList = null;

          collection.find().toArray(function (err, posts) {
            // console.log(posts);
            postList = posts;
          });
          // perform actions on the collection object
          await client.close();

          console.log(postList);
          console.log("Connected correctly to server");
          return postList;

      } catch (err) {
          console.log(err.stack);
          await client.close();
      }
      finally {
          return null;
      }
  } 

  const mainFunction = async () => {
    console.log("Acquiring results...");
    const result = await connectToMongoDB();
    console.log("Results acquired, they are:");
    return result;
  }

  // https://developer.mongodb.com/community/forums/t/unable-to-connect-with-node-js-due-to-mongodb-srv-get-error-typeerror-cannot-read-property-replace-of-undefined-matchesparentdomain/14030/11

  console.log("Database:");
  (async () => {
    console.log(await mainFunction())
  })()
  */




  return (
    <Router>
    <div>
      <Nav />
        <div class="login">
          <p> Login | Settings </p>
        </div>
        
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
        <div class="footer">
          <p>About | Community Guidelines | Help </p>
        </div>
    </div>
    </Router>
  );

}

export default App;
