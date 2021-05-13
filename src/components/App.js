import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';  
import VideoDetail from './VideoDetail';
     

class App extends React.Component{
    state = { videos: [], selectedVideo: null };

    componentDidMount(){
        this.onTermSubmit('surfboards');
    }

    onTermSubmit = async term => {
       const response = await youtube.get('/search', {
             params: {
                 q: term
             }
        })
        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]});

    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    };

   render(){
       return (
       <div className="ui container">
           
           <SearchBar onFormSubmit={this.onTermSubmit}/> {/* when submiting the form - requesting for the data from api */}
            <div className="ui grid">
                <div className="ui row"> 
                <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo} />  {/* passing only one video - selected one   */}
                </div>

                <div className="five wide column">
                {/* passing list of videos */}
                <VideoList 
                videos={this.state.videos} 
                onVideoSelect={this.onVideoSelect}
                />
                </div>
                </div>
           </div>

      </div>
       );
   } 
} 

export default App;