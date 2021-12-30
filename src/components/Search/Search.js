import React, { useState,useEffect } from "react";
import {
  SearchButton,
  StyledInput,
  StyledInputWrap,
  StyledInputWrapMap,
  SearchButtonMap,
  StyledInputMap,
} from "./Search.style";
import {BsSearch} from 'react-icons/bs';

const Search = ({ query, image }) => {
  const [text, setText] = useState("");
  useEffect(()=>{
    document.title=text
  })

  const onChange = (q) => {
    setText(q);
  };
  const onClick = () => {
    query(text);
  };

  const onKeyDown = (e) => {
    if (query && e.keyCode === 13) {
      query(text);
    }
  };
  return image ? (
    <StyledInputWrap>
      <StyledInput
        type="text"
        placeholder="Search Free high resolution photos"
        value={text}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
      />
      <SearchButton onClick={onClick}><BsSearch/></SearchButton>
    </StyledInputWrap>
  ) : (
    <StyledInputWrapMap>
      <StyledInputMap
        type="text"
        placeholder="Search Free high resolution photos"
        value={text}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => onKeyDown(e)}
      />
      <SearchButtonMap onClick={onClick}> <BsSearch/></SearchButtonMap>
    </StyledInputWrapMap>
  );
};

export default Search;
