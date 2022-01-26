import React from "react";
import { Avatar, Slug, UserName } from "../styles/Avatar.styles";
import { Flex } from "../styles/Flex.styles";

type Props = {
  name?: string;
  slug?: string;
  avatarUrl?: string;
};

function AuthorInfo({
  name = "Tohsaka888",
  slug = "一个什么都不会的前端开发工程师",
  avatarUrl = "https://avatars.githubusercontent.com/u/58759688?v=4",
}: Props): JSX.Element {
  return (
    <div>
      <Flex>
        <Avatar src={avatarUrl} alt="avatar" />
        <div style={{ marginLeft: "8px" }}>
          <UserName>{name}</UserName>
          <Slug>{slug}</Slug>
        </div>
      </Flex>
    </div>
  );
}

export default AuthorInfo;
