import React from "react";
import { useState } from "react";
import {
  ImgWrap,
  StyledImg,
  Overlay,
  ShowSingleImageWrapper,
  ShowSingleImage,
  ImageInfo,
  Text,
} from "../FlickrImages.style";
const SingleImage = (props) => {
  const { farm, server, id, secret, title } = props.photo;
  const [show, setShow] = useState(true);

  const onClick = () => {
    setShow(!show);
  };

  return show ? (
    <ImgWrap onClick={onClick}>
      <StyledImg
        key={id}
        src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`}
        alt={title}
      />
    </ImgWrap>
  ) : (
    <Overlay onClick={onClick}>
      <ShowSingleImageWrapper>
        <ShowSingleImage
          key={id}
          src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`}
          alt={title}
        />
        <ImageInfo>
          <Text> ID: {id} </Text>
          <Text> Title: {title} </Text>
          <Text> Server: {server}</Text>
          <Text> Farm: {farm}</Text>
          <Text> Secret: {secret}</Text>
        </ImageInfo>
      </ShowSingleImageWrapper>
    </Overlay>
  );
};

export default SingleImage;
