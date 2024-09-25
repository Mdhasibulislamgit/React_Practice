import { GoHeartFill, GoHeart } from "react-icons/go";
import { useState } from "react";

const LikeButton = () => {
  let [like, setLike] = useState(true);
  const toggleLike = () => {
    setLike(!like);
    };
    

  return (
    <div>
      <button onClick={toggleLike}>
        {like ? <GoHeartFill /> : <GoHeart />}
      </button>
    </div>
  );
};

export default LikeButton;
