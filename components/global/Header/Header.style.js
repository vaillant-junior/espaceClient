import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display:flex;
  width: 80%;
  padding: 10px;

  .barre {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  > div {
    flex: 1;
  }
  .push {
    display: flex;
    justify-content: flex-end;
  }
  .push Button {
    margin-left: 20px;
    border: none;
    border-radius: 7px;
    font-size: 12px;
  }
  .bleu {
    color: white;
    background-color: #2a5ee4;
  }
  #logoImage {
    width: 120px;
  }
  ​ .test {
    vertical-align: bottom;
  }
`;
