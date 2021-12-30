import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageGrid from "./components/ImageGrid";
import Search from "../../components/Search/Search";
import {
  Header,
  HeroTitle,
  HeroLittle,
  ImageContainer,
} from "./FlickrImages.style";
import { PageContainer } from "../../globalStyles";

const FlickrImages = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("India");

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const res = await axios(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=856469212751850d05909cd654396d65&text=${query}&sort=relevance&per_page=15&format=json&nojsoncallback=1`
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
        <HeroLittle>Example: dog, autnum, snow, winter</HeroLittle>
      </Header>
      <ImageContainer>
        <ImageGrid loading={loading} result={result} />
      </ImageContainer>
    </PageContainer>
  );
};

export default FlickrImages;
