import styled from "styled-components";
import { animated } from "react-spring";

export const Sidenav = styled(animated.nav)`
  position: relative;
  z-index: 1;
  background-color: #2c3f4a;
  margin: 0;
  width: 250px;
  overflow-y: auto;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    width: 75%;
    margin: 10px auto 0;
    text-align: center;

    text-transform: uppercase;

    background-color: white;
    box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    cursor: pointer;

    color: #666666;
    font-weight: bold;
    letter-spacing: 1px;

    :hover {
      cursor: pointer;
    }
  }

  li a{
    padding: 15px 0;
    text-decoration: none;
  }

  li a:link, li a:visited, li a:hover, li a:active {
    color: #5252f1;
  }
`;

export const Closenav = styled.div`
  margin: 5px 5px 15px 5px;
  padding: 5px 0;
  text-align: center;

  background-color: white;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 25px;

  width: 35px;

  font-weight: bold;
  color: tomato;
  height: 34px;

  :hover {
    cursor: pointer;
  }
`;
