import styled from "styled-components";

export function Thumb({ image_url }) {
  return (
    <div className="thumb-box">
      <Img className="thumb" src={image_url} alt="profile visual" />
    </div>
  );
}


const Img = styled.img`
    height: 10rem;
  width: 10rem;
  /*border: #004141 solid 4px;*/
  border-radius: 50%;
  /*padding: 10px;*/
  background-color: darksalmon;
  transition: box-shadow 150ms, margin 150ms, padding 150ms;
`;