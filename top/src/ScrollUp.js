import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";

function Scroll() {
  const [isVisible, setIsVisible] = useState(false);
  const gotobtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  
//   const theme = { colors:{
//     btn:"blue",
//     shadow:"green"}}

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const marketingBlock = (
    <div>
      <h2>Marketing Strategies</h2>
      <p>
        In the ever-evolving world of marketing, businesses are constantly
        seeking innovative strategies to reach their target audience. Here are
        some key marketing approaches:
      </p>
      <ul>
        <li>Social Media Marketing</li>
        <li>Content Marketing</li>
        <li>Email Marketing</li>
        <li>Search Engine Optimization (SEO)</li>
        <li>Pay-Per-Click (PPC) Advertising</li>
      </ul>
      <p>
        Crafting a compelling marketing campaign involves understanding the
        unique needs and preferences of your audience. By leveraging various
        channels and employing a mix of digital and traditional methods,
        businesses can create a strong brand presence. Crafting a compelling
        marketing campaign involves understanding the unique needs and
        preferences of your audience. By leveraging various channels and
        employing a mix of digital and traditional methods, businesses can
        create a strong brand presence. Crafting a compelling marketing campaign
        involves understanding the unique needs and preferences of your
        audience. By leveraging various channels and employing a mix of digital
        and traditional methods, businesses can create a strong brand presence.
        Crafting a compelling marketing campaign involves understanding the
        unique needs and preferences of your audience. By leveraging various
        channels and employing a mix of digital and traditional methods,
        businesses can create a strong brand presence. Crafting a compelling
        marketing campaign involves understanding the unique needs and
        preferences of your audience. By leveraging various channels and
        employing a mix of digital and traditional methods, businesses can
        create a strong brand presence. Crafting a compelling marketing campaign
        involves understanding the unique needs and preferences of your
        audience. By leveraging various channels and employing a mix of digital
        and traditional methods, businesses can create a strong brand presence.
        Crafting a compelling marketing campaign involves understanding the
        unique needs and preferences of your audience. By leveraging various
        channels and employing a mix of digital and traditional methods,
        businesses can create a strong brand presence. Crafting a compelling
        marketing campaign involves understanding the unique needs and
        preferences of your audience. By leveraging various channels and
        employing a mix of digital and traditional methods, businesses can
        create a strong brand presence. Crafting a compelling marketing campaign
        involves understanding the unique needs and preferences of your
        audience. By leveraging various channels and employing a mix of digital
        and traditional methods, businesses can create a strong brand presence.
        Crafting a compelling marketing campaign involves understanding the
        unique needs and preferences of your audience. By leveraging various
        channels and employing a mix of digital and traditional methods,
        businesses can create a strong brand presence. Crafting a compelling
        marketing campaign involves understanding the unique needs and
        preferences of your audience. By leveraging various channels and
        employing a mix of digital and traditional methods, businesses can
        create a strong brand presence. Crafting a compelling marketing campaign
        involves understanding the unique needs and preferences of your
        audience. By leveraging various channels and employing a mix of digital
        and traditional methods, businesses can create a strong brand presence.
        Crafting a compelling marketing campaign involves understanding the
        unique needs and preferences of your audience. By leveraging various
        channels and employing a mix of digital and traditional methods,
        businesses can create a strong brand presence.
      </p>
      <p>
        Crafting a compelling marketing campaign involves understanding the
        unique needs and preferences of your audience. By leveraging various
        channels and employing a mix of digital and traditional methods,
        businesses can create a strong brand presence. Crafting a compelling
        marketing campaign involves understanding the unique needs and
        preferences of your audience. By leveraging various channels and
        employing a mix of digital and traditional methods, businesses can
        create a strong brand presence. Crafting a compelling marketing campaign
        involves understanding the unique needs and preferences of your
        audience. By leveraging various channels and employing a mix of digital
        and traditional methods, businesses can create a strong brand presence.
        Crafting a compelling marketing campaign involves understanding the
        unique needs and preferences of your audience. By leveraging various
        channels and employing a mix of digital and traditional methods,
        businesses can create a strong brand presence. Crafting a compelling
        marketing campaign involves understanding the unique needs and
        preferences of your audience. By leveraging various channels and
        employing a mix of digital and traditional methods, businesses can
        create a strong brand presence. Crafting a compelling marketing campaign
        involves understanding the unique needs and preferences of your
        audience. By leveraging various channels and employing a mix of digital
        and traditional methods, businesses can create a strong brand presence.
        Crafting a compelling marketing campaign involves understanding the
        unique needs and preferences of your audience. By leveraging various
        channels and employing a mix of digital and traditional methods,
        businesses can create a strong brand presence. Crafting a compelling
        marketing campaign involves understanding the unique needs and
        preferences of your audience. By leveraging various channels and
        employing a mix of digital and traditional methods, businesses can
        create a strong brand presence. Crafting a compelling marketing campaign
        involves understanding the unique needs and preferences of your
        audience. By leveraging various channels and employing a mix of digital
        and traditional methods, businesses can create a strong brand presence.
        Crafting a compelling marketing campaign involves understanding the
        unique needs and preferences of your audience. By leveraging various
        channels and employing a mix of digital and traditional methods,
        businesses can create a strong brand presence. Crafting a compelling
        marketing campaign involves understanding the unique needs and
        preferences of your audience. By leveraging various channels and
        employing a mix of digital and traditional methods, businesses can
        create a strong brand presence. Crafting a compelling marketing campaign
        involves understanding the unique needs and preferences of your
        audience. By leveraging various channels and employing a mix of digital
        and traditional methods, businesses can create a strong brand presence.
        Crafting a compelling marketing campaign involves understanding the
        unique needs and preferences of your audience. By leveraging various
        channels and employing a mix of digital and traditional methods,
        businesses can create a strong brand presence.
      </p>
      <p>
        Crafting a compelling marketing campaign involves understanding the
        unique needs and preferences of your audience. By leveraging various
        channels and employing a mix of digital and traditional methods,
        businesses can create a strong brand presence. Crafting a compelling
        marketing campaign involves understanding the unique needs and
        preferences of your audience. By leveraging various channels and
        employing a mix of digital and traditional methods, businesses can
        create a strong brand presence. Crafting a compelling marketing campaign
        involves understanding the unique needs and preferences of your
        audience. By leveraging various channels and employing a mix of digital
        and traditional methods, businesses can create a strong brand presence.
        Crafting a compelling marketing campaign involves understanding the
        unique needs and preferences of your audience. By leveraging various
        channels and employing a mix of digital and traditional methods,
        businesses can create a strong brand presence. Crafting a compelling
        marketing campaign involves understanding the unique needs and
        preferences of your audience. By leveraging various channels and
        employing a mix of digital and traditional methods, businesses can
        create a strong brand presence. Crafting a compelling marketing campaign
        involves understanding the unique needs and preferences of your
        audience. By leveraging various channels and employing a mix of digital
        and traditional methods, businesses can create a strong brand presence.
        Crafting a compelling marketing campaign involves understanding the
        unique needs and preferences of your audience. By leveraging various
        channels and employing a mix of digital and traditional methods,
        businesses can create a strong brand presence. Crafting a compelling
        marketing campaign involves understanding the unique needs and
        preferences of your audience. By leveraging various channels and
        employing a mix of digital and traditional methods, businesses can
        create a strong brand presence. Crafting a compelling marketing campaign
        involves understanding the unique needs and preferences of your
        audience. By leveraging various channels and employing a mix of digital
        and traditional methods, businesses can create a strong brand presence.
        Crafting a compelling marketing campaign involves understanding the
        unique needs and preferences of your audience. By leveraging various
        channels and employing a mix of digital and traditional methods,
        businesses can create a strong brand presence. Crafting a compelling
        marketing campaign involves understanding the unique needs and
        preferences of your audience. By leveraging various channels and
        employing a mix of digital and traditional methods, businesses can
        create a strong brand presence. Crafting a compelling marketing campaign
        involves understanding the unique needs and preferences of your
        audience. By leveraging various channels and employing a mix of digital
        and traditional methods, businesses can create a strong brand presence.
        Crafting a compelling marketing campaign involves understanding the
        unique needs and preferences of your audience. By leveraging various
        channels and employing a mix of digital and traditional methods,
        businesses can create a strong brand presence.
      </p>
    </div>
  );

  return (
    // <ThemeProvider theme={theme}>
    <Wrapper>
      {marketingBlock}
      {isVisible && (
        <div className="top-btn" onClick={gotobtn}>
          <FaArrowUp className="top-btn--icon" />
        </div>
      )}
      </Wrapper>
    // </ThemeProvider>
  );
}


const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .top-btn {
    font-size: 2.4rem;
    width: 4rem;
    height: 4rem;
    color: white;
    background-color: rgba(37, 6, 12, 0.7);
    border-radius: 50%;
    position: fixed;
    bottom: 5rem;
    right: 5rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    animation: moveAndBackground 2s ease infinite alternate-reverse;

    &--icon {
      animation: gototop 1.2s linear infinite alternate-reverse;
    }

    @keyframes gototop {
      0% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(1rem);
      }
    }

    @keyframes moveAndBackground {
      0% {
        transform: translateY(0);
        background-position: 0% 0%;
      }
      100% {
        transform: translateY(1rem);
        background-position: 100% 100%;
      }
    }
  }
`;



export default Scroll;
