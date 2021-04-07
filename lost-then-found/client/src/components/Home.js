import React from 'react';

const Home = () => {
    return (
        <>
        <div id="homeIntro">
            <img src="images/LF.GIF" width="200" alt="FullLogo" />
            <h3>Welcome to <b>Lost then Found</b>, a digital space to find your stuff.</h3>

            <tr class="homeHovers">
                <td>
                    <a class="homeHoverImg" href="/Lost"> <img  src = "images/binoculars.svg" alt="Lose Something?"/> </a>
                    <br/>
                        Misplaced something? Check out the <b>Found</b> tab to see items that people have seen on campus.
                    
                </td>
                <td>
                    <a class="homeHoverImg" href="/Found"> <img  src = "images/route.svg" alt="Find Something?"/> </a>
                    <p id="homeFoundText">
                        Discovered someone else's belonging? Check out the <b>Lost</b> tab to see items that people have misplaced.
                    </p>
                </td>
                <td>
                    <a class="homeHoverImg" href="/Matches"> <img  src = "images/idea.svg" alt="Matches"/> </a>
                    <p id="homeMatchText">
                    If you're checking back in on a post you made recently, head on over to the <b>Matches</b> tab.
                    </p>
                </td>
            </tr>        



            {/* <p class="homeLostText">
                Misplaced something? <br /> Check out the <b>Found</b> tab to see items that people have seen on campus.
            </p> */}
            {/* <p class="homeMatchText">
                If you're checking back in on a post you made recently, <br/> head on over to the <b>Matches</b> tab.
            </p> */}

        </div>

        
            
        
        </>
    );
}

export default Home;
