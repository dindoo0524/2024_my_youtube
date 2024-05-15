import React from "react";
import { useState, useEffect } from "react";
import MainVideoCard from "../components/MainVideoCard";

interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

interface Thumbnails {
  default: Thumbnail;
  medium: Thumbnail;
  high: Thumbnail;
}

interface VideoId {
  kind: string;
  videoId: string;
}

interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

interface Video {
  kind: string;
  etag: string;
  id: VideoId;
  snippet: Snippet;
}

const List: React.FC = () => {
  const [videoList, setVideoList] = useState<Video[]>([]);

  useEffect(() => {
    fetch(`data/mainData.json`)
      .then((res) => res.json())
      .then((data) => {
        setVideoList(data.items);
        console.log("data.itmes", data.items);
      });
  }, []);

  return (
    <div className="flex flex-wrap justify-between">
      {videoList.map((video) => {
        return (
          <MainVideoCard
            key={video.id.videoId}
            videoId={video.id.videoId}
            title={video.snippet.title}
            thumbnailUrl={video.snippet.thumbnails.medium.url}
            description={video.snippet.description}
            channelTitle={video.snippet.channelTitle}
            publishTime={video.snippet.publishTime}
          />
        );
      })}
    </div>
  );
};

export default List;
