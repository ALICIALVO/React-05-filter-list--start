import styled from "styled-components";

export function Thumb({ image_url }) {
  return (
    <div className="thumb-box">
      <Img className="thumb" src={image_url} alt="profile visual" />
    </div>
  );
}


const Img = styled.img`
 
  height: 12rem;
  width: 12rem;
  /*border: #004141 solid 4px;*/
  border-radius: 50%;
  /* padding: 10px; */
  background-color: darksalmon;
  transition: box-shadow 150ms, margin 150ms, padding 150ms;
  

  
  &:hover img {
  box-shadow: 0 0.4rem 1.5rem DimGrey;
  margin-bottom: 3rem;
  padding-bottom: 1rem;
}
&:active img {
  box-shadow: 0 0.4rem 1.5rem DimGrey;
}
`;



// import styled from "styled-components";

// export function Thumb({ image_url, size}) {
//   console.log("Size:", size); 
//   return (
//     <div className="thumb-box">
//       <Img className="thumb" src={image_url} size={size} alt="profile visual" />
//     </div>
//   );
// }


// const Img = styled.img`
//   border-radius: 50%;
//   background-color: darksalmon;
//   transition: box-shadow 150ms, margin 150ms, padding 150ms;

//   /* Apply different sizes based on the 'size' prop */
//   width: ${props => props.size === "small" ? "100px" : "300px"};
//   height: ${props => props.size === "small" ? "100px" : "300px"};
// `;