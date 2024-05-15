import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";

type MainVideoCardProps = {
  videoId: string;
  title: string;
  thumbnailUrl: string;
  description: string;
  channelTitle: string;
  publishTime: string;
};

const MainVideoCard: React.FC<MainVideoCardProps> = ({
  videoId,
  title,
  thumbnailUrl,
  description,
  channelTitle,
  publishTime,
}) => {
  const relativeTime = moment(publishTime).fromNow();

  return (
    <Link to={`/detail/${videoId}`} className="w-[200px] m-1 cursor-pointer">
      <div className="w-[200px] m-1 cursor-pointer">
        <div
          className="h-[120px] bg-cover bg-center"
          style={{ backgroundImage: `url(${thumbnailUrl})` }}
        ></div>
        <div className="p-1">
          <h2 className="overflow-hidden line-clamp-2 text-12px">{title}</h2>
          <div className="text-gray-500 text-[10px]">
            <p>{channelTitle}</p>
            <p>{relativeTime}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MainVideoCard;
