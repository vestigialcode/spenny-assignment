import React from "react";
import { FaGithub } from "react-icons/fa";
import { FooterContainer, Logo, FooterItems, FooterItem } from "./Footer.style";

function Footer() {
  return (
    <FooterContainer>
      <FooterItems>
        <FooterItem>
          <Logo to="/">Spenny Assignment</Logo>
        </FooterItem>
        
        <FooterItem>
          <Logo
            to={{
              pathname: "https://github.com/vestigialcode",
            }}
            target="_blank"
          >
            <FaGithub />
          </Logo>
        </FooterItem>
      </FooterItems>
    </FooterContainer>
  );
}

export default Footer;
