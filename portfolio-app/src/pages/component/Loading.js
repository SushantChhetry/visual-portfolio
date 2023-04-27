import React from "react";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className="loading">
      <ReactLoading type="cubes" color="#ffb900" height={300} width={100} />
    </div>
  );
};

export default Loading;
