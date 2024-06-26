/* @import url("https://fonts.googleapis.com/css?family=Expletus+Sans|Raleway|Griffy|Yanone+Kaffeesatz:400,700"); */

import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
  ${reset}
  

  html,
  body {
    height: 100%;
  }
  html {
    font-size: 10px;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background: papayawhip;
    background: -moz-linear-gradient(
      top,
      #f5f5dc 0%,
      #d2b48c 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      #f5f5dc 0%,
      #d2b48c 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to bottom,
      #f5f5dc 0%,
      #d2b48c 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /*border:aqua dashed 3px; */
    /*color:papayawhip*/
  }
  li {
    list-style-type: none;
  }
  h1 {
  color: mintcream;
} 
`;



/*--------------------*/
/* .app {
  background: Cornsilk;
  padding: 8.5rem 1.5rem 1.5rem;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0.4rem 1.5rem DimGrey;
  position: relative;
  margin-top: 7rem;
} */
/* .header {
  background: lightsalmon;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  border-radius: 0.4rem 0.4rem 0 0;
  height: 9rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
} */


// .load-label used in h1 App.jsx:
/* .load-label{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60rem; 
  height: 40rem;
  font-size: 5rem;
  font-family: "Yanone Kaffeesatz", sans-serif;
  color: slategray;
} */
/* .filter {
  height: 3.5rem;
  width: 24rem;
  outline: none;
  border-radius: 0.5rem;
  border: white 2px solid;
  transition: border 0.5s;
  padding: 1rem;
}
.filter:focus {
  border: tomato 2px solid;
} */
/* .filter_title {
  font-family: "Expletus Sans";
  text-align: left;
  font-size: 2rem;
  font-weight: 400;
  color: darkred;
} */

/* .headline {
  font-size: 5rem;
  font-weight: normal;
  font-family: "Griffy", cursive;
  text-align: center;
  color: slategray;
} 
/* .paragraph {
  font-size: 3.8rem;
  font-weight: 400;
  font-family: "Yanone Kaffeesatz", sans-serif;
  text-align: center;
  color: slategray;
} */
/* .white-text {
  color: mintcream;
} */
/*.thumb{
	border-radius: .8rem;
    margin-top: 3rem;
	padding: 3rem 7.5rem;
	background-color: DarkSalmon;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}*/
/* .top-bar {
  background: slategray;
  width: 100%;
  height: 70px;
  padding: 20px;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.top-bar h1 {
  font-size: 3rem;
  font-weight: normal;
  font-family: "Griffy", cursive;
  color: papayawhip;
} */
/* .logo {
  height: 5rem;
  animation: spin 2s linear infinite;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
} */
/* .list-title {
  padding: 1.4rem;
  font-family: "Expletus Sans";
  font-size: 3.2rem;
  font-weight: 400;
  text-align: center;
  color: slategray;
} */
/* .cards-list {
  background: oldlace;
  height: 77vh;
  min-width: 37rem; */
  /*border: #0000b9 solid 3px;*/
  /* border-radius: 0.4rem;
  overflow-x: hidden;
  overflow-y: scroll;
  box-shadow: 0 0.2rem 0.8rem DimGrey;
} */
/* .card-item:nth-child(even) {
  background: honeydew;
}
.card-item:nth-child(odd) {
  background: white;
} */
/* .card {
  padding: 2rem 2.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
} */
/* .card:hover {
  background: paleturquoise;
} */
/* .card:hover .thumb {
  box-shadow: 0 0.4rem 1.5rem DimGrey;
  margin-bottom: 3rem;
  padding-bottom: 1rem;
}
.card:active {
  background: skyblue;
  color: white;
}
.card:active .paragraph {
  color: white;
}
.card:active .thumb {
  box-shadow: 0 0.4rem 1.5rem DimGrey;
} */
/* .texts-box {
  padding-left: 2.8rem;
} */
/* .card-title {
  font-family: "Expletus Sans";
  text-align: left;
  font-size: 2.8rem;
} */
/* .card-msg {
  font-family: "Raleway";
  font-size: 1.4rem;
  max-width: 35rem;
} */
/* .thumb { */
  /* height: 10rem;
  width: 10rem; */
  /*border: #004141 solid 4px;*/
  /* border-radius: 50%; */
  /*padding: 10px;*/
  /* background-color: darksalmon;
  transition: box-shadow 150ms, margin 150ms, padding 150ms;
} */
