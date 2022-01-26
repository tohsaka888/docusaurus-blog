import styled from "styled-components";

type Props = {
  dir?: string;
  align?: string;
  justify?: string;
};

export const Flex = styled.div<Props>`
  display: flex;
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: ${({ align }) => align || "center"};
  flex-direction: ${({ dir }) => dir || "row"};
`;
