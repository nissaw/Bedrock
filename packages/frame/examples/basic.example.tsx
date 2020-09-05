import Frame from "@bedrock-layout/frame";
import { array, text } from "@storybook/addon-knobs";
import React from "react";
import styled from "styled-components";

const Center = styled.div`
  width: 65vw;
  margin: 0 auto;
`;
Center.displayName = "Center";

const title = "Frame";
const name = "Basic";

function Example() {
  const ratio = array("ratio", ["16", "9"]);
  const position = text("position", "50% 50%");
  return (
    <Center>
      <Frame ratio={ratio.map((i) => parseInt(i))} position={position}>
        <img src={`https://picsum.photos/5000`} alt="cat" />
      </Frame>
    </Center>
  );
}

Example.story = { name };
export const Comp = Example;
export default {
  title,
};
