import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  //   console.log(video);
  const { title, thumbnails } = video.snippet;

  return (
    <div onClick={() => onVideoSelect(video)} className="item video-item">
      <img
        alt={video.snippet.title}
        className="ui image"
        src={thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
