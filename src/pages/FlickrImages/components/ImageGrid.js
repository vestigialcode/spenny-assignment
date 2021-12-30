import React from "react";
import Spinner from "../../../components/Spinner/Spinner";
import { Cards } from "../FlickrImages.style";
import SingleImage from "./SingleImage";

const ImageGrid = ({ result, loading }) => {
  return loading ? (
    <Spinner />
  ) : (
    <Cards>
      {result.map((item) => (
        <SingleImage photo={item} key={item.id}></SingleImage>
      ))}
    </Cards>
  );
};

export default ImageGrid;
