import React from 'react';

class Header extends React.Component{
    render(){
        return (
            <header className="App-header">

            <img src= "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"  
             className="App-logo" alt='MVDB Logo'/>
               
            <ul>
              <li><a className="active" href="#home">Home</a></li>
              <li><a href="#Liked">Liked</a></li>
            </ul>
            
            <link rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.0/css/ionicons.min.css"
              integrity="sha512-JApjWRnfonFeGBY7t4yq8SWr1A6xVYEJgO/UMIYONxaR3C9GETKUg0LharbJncEzJF5Nmiv+Pr5QNulr81LjGQ=="
              crossOrigin="anonymous"
            />

            </header>
        )
    }
}

export default Header;