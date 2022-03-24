import styled from "styled-components";

export const HomeWrapper = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .main {
    min-height: 80%;
    min-width: 80%;
    padding: 5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex;
    clear:both;
  }
  .divyello {
    pad
    font-weight: 800px;
    font-size: 30px;
    font-family: inter, sans-serif;
    color: #ffbb2f;
  }
 
  .begin Button {
    height: 30px;
    margin-right: 20px;
    border: none;
    font-size: 15px;
    border-radius: 5px;
  }
  .fnView{
    position:relative;
    max-width:500px;
    max-height:500px;
    background-color:whitesmoke;
    display:flex;
    left:60%;
    top:-40%;
   
  }
  img{
  max-width:500px;
  }
  .img {
    position: relative;
    float: right;
    top: -250px;
    left: 50px;
  }
  .fonction{
    position:relative;
    padding: 20px;
    width:30%;
    height:100%;
    display: inline-block;
    justify-content: space-between;
    top:20%;
  }
  .fonction>div{
    padding-bottom:20px;
    box-shadow: initial;
    height:40px;
    border-radius: 10px;
  }

  .bl {
    color: white;
    background-color: #2a5ee4;
  }
  .txtGray {
    width: 40%;
    color: grey;
  }
  .divnoir {
    font-family: inter, sans-serif;
    text-align: left;
    font-size: 30px;
  }
  .textG {
    width: 100%;
    height: 80%;
    align-items: left;
  }

  .footer {
    width: 100%;
    min-height: 50px;
    border-top: 1px solid #eaeaea;
    display: flex;
    justify-content: center;
    text-align: center;
  }
  .elemCoche {
    display: inline-block;
    padding: 20px;
    margin-left: -20px;
  }
  .title a {
    color: #0070f3;
    text-decoration: none;
  }
  .fin {
    color: grey;
    align: left;
    text-align:center;
  
  }

  .title a:hover,
  .title a:focus,
  .title a:active {
    text-decoration: underline;
  }

  .title {
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
  }

  .title,
  .description {
    text-align: center;
  }

  .description {
    line-height: 1.5;
    font-size: 1.5rem;
  }
  #tableImage {
    width: 80%;
  }

  .grid {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 800px;
    margin-top: 3rem;
  }

  .logo {
    height: 1em;
    margin-left: 0.5rem;
  }

  @media (max-width: 600px) {
    .grid {
      width: 100%;
      heigth:auto;
      flex-direction: column;
    }
  }
`;
