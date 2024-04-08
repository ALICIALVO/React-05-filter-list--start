import styled from "styled-components";
import { Thumb } from "./thumb";


export function Profile({ first_name,last_name, id, country, email, description, avatar }) {


    return (
      <Div>
        <Thumb image_url={avatar} />
        <div className="texts-box">
          <h1 className="card-title paragraph">
            {first_name} {last_name}
          </h1>
          <hr /> {/* Horizontal line separator */}
          <span>
          <span>{`id: ${id}\ncountry: ${country}\nemail: ${email}`}</span>
           </span>
    
        
          <p className="card-msg">{description}</p>
        </div>
      </Div>
    );
  }


const Div = styled.div`
/* .card: */

  padding: 2.5rem 2rem;
  cursor: pointer;
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  justify-content: space-around;
  font-family: "Yanone Kaffeesatz", sans-serif;
  padding-top: 4rem;

  img {
    width: 30rem;
    height: auto; 
    /* object-fit: cover; 
    object-position: center; */
  }
  
  h1 {
    text-align: left;
    font-size: 4rem;
    color: #686767;
    padding-bottom: 1rem;
  }
  /* &:active h1 {
    color: white;
  } */

  hr {
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
    margin-bottom: 5rem;
}
div {
  padding-left: 2.8rem;
}

span{

  margin-bottom: 0.5rem;
  white-space: pre-line; 
  font-size: 3.5rem;
  color: purple;

}
p {
    /* font-family: "Yanone Kaffeesatz", sans-serif; */
  font-size: 2.4rem;
  max-width: 35rem;
  color: #9f9c9c;
  padding-top: 1rem;
}

  
`;



// import styled from "styled-components";
// import { Thumb } from "./thumb";


// export function Profile({ first_name,last_name, id, country, email, description, avatar }) {
//     // const { first_name,last_name, id, country, email, description, avatar } = user;
  
//     return (
//       <Div>
//         <Thumb image_url={avatar} size="large" />
//         <div className="texts-box">
//           <h1 className="card-title paragraph">
//             {first_name} {last_name}
//           </h1>
//           <hr /> {/* Horizontal line separator */}
//           <span>
//           <span>{`id: ${id}\ncountry: ${country}\nemail: ${email}`}</span>
//            </span>
    
        
//           <p className="card-msg">{description}</p>
//         </div>
//       </Div>
//     );
//   }