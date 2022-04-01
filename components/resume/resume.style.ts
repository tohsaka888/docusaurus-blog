import styled from "styled-components";

const Card = styled.div`
  border-radius: 10px;
  border: 1px solid;
  background-color: #cecece60;
  padding: 8px;
  margin: 0px 8px;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 8px;
`;

export { Card, Flex, Grid };
