import React from 'react';


class Movies extends React.Component {
    state = {
        page: 1,
        movies: [],
    }

    componentDidMount() {
        this.defaultFilter()
      }

    defaultFilter = () => {

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=0ad1833c2d07624a66680ae42a883cbb&language=en-US&page=${this.state.page}`)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {            
            const movies = data.results
            this.setState({
                movies,
            })
        });
    }
    
    handleFilter = (e) => {
        
        const filter = e.target.value

        fetch(`https://api.themoviedb.org/3/movie/${filter}?api_key=0ad1833c2d07624a66680ae42a883cbb&language=en-US&page=${this.state.page}`)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {            
            const movies = data.results
            this.setState({
                movies,
            })
        });
    }

    

    render() {
        
        return (
            <div>
                <div>
                    <select className="filter" id="filter" defaultValue="popular" onClick = {this.handleFilter}>
                        <option value="popular">Popular</option>
                        <option value="top_rated">Top Rated</option>
                        <option value="now_playing">Now Playing</option>
                        <option value="upcoming">Upcoming</option>
                    </select> 
                    
                </div> 

               <div className = 'movies-container'>
                   {this.state.movies.map(
                       ({id,title, vote_average, poster_path}) => (
                           <div className = 'movies-card' key={id}>
                               <div className='movie-img'>
                                   <img src= {`https://image.tmdb.org/t/p/w500/${poster_path}`}  alt='Movie Poster'/>
                                </div>
                               <div className = 'movies-infos'>{title}</div>
                               <div className= 'movies-infos'>
                                    <i className="ion-star"></i>
                                   {vote_average}
                                   <i className="ion-ios-heart-outline"></i>
                                </div>
                                {/* <div className = 'movies-infos'> <i class="ion-ios-heart-outline"></i> </div> */}
                           </div>
                        )
                   )}
               </div>

                
            </div>
        );
    }

}

export default Movies;