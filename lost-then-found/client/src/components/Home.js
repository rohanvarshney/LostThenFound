import React from 'react';

const Home = () => {
    return (
        <>
        <div id="homeIntro">
        <img src="images/LF.GIF" width="200" alt="FullLogo" />
        <h3>Welcome to <b>Lost then Found</b>, a digital space to find your stuff.</h3>
        <li>
            Misplaced something? Check out the <b>Found</b> tab to see items that people have seen on campus.
        </li>
        <li>
            Discovered someone else's belonging? Check out the <b>Lost</b> tab to see items that people have misplaced.
        </li>
        <li>
            If you're checking back in on a post you made recently, head on over to the <b>Matches</b> tab.
        </li>
        </div>

        
        <div id = "homeNav">
        <p>
            About | Community Guidlines | Help
        </p>
        </div>
        </>
    );
}

export default Home;
