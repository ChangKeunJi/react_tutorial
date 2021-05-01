import { useEffect, useState } from "react";
// import youtube from "../api/youtube";

import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  // const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const [videos, search] = useVideos("building");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  // useEffect(() => {
  //   onTermSubmit("bmw m3");
  // }, []);

  // const onTermSubmit = async (term) => {
  //   const res = await youtube.get("/search", {
  //     params: {
  //       q: term,
  //     },
  //   });

  //   setVideos(res.data.items);
  //   setSelectedVideo(res.data.items[0]);
  // };

  return (
    <div className="ui container">
      <SearchBar onTermSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

// class App extends Component {
//   state = {
//     videos: [],
//     selectedVideo: null,
//   };

//   componentDidMount() {
//     this.onTermSubmit("bmw m3");
//   }

//   onTermSubmit = async (term) => {
//     const res = await youtube.get("/search", {
//       params: {
//         q: term,
//       },
//     });

//     this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] });
//   };

//   onVideoSelect = (video) => {
//     this.setState({ selectedVideo: video });
//   };

//   render() {
//     return (
//       <div className="ui container">
//         <SearchBar onTermSubmit={this.onTermSubmit} />
//         <div className="ui grid">
//           <div className="ui row">
//             <div className="eleven wide column">
//               <VideoDetail video={this.state.selectedVideo} />
//             </div>
//             <div className="five wide column">
//               <VideoList
//                 onVideoSelect={this.onVideoSelect}
//                 videos={this.state.videos}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default App;
