import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageGrid from "./components/ImageGrid";
import Search from "../../components/Search/Search";
import {
  Header,
  HeroTitle,
  
  ImageContainer,
} from "./FlickrImages.style";
import { PageContainer } from "../../globalStyles";

const FlickrImages = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("San fransiscos");

  useEffect(() => {
    const fetchItems = async () => {   //856469212751850d05909cd654396d65
      setLoading(true);                                                    //e52a287d86469bf01ea901dfd92cf8a5
      const res = await axios(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=e52a287d86469bf01ea901dfd92cf8a5&text=${query}&sort=relevance&per_page=15&format=json&nojsoncallback=1`
      );
      setResult(res.data.photos.photo);
      setLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <PageContainer>
      <Header>
        <HeroTitle>Image Grid </HeroTitle>
        <Search image query={(q) => setQuery(q)} />
       
      </Header>
      <ImageContainer>
        <ImageGrid loading={loading} result={result} />
      </ImageContainer>
      
    </PageContainer>
  );
};

export default FlickrImages;
