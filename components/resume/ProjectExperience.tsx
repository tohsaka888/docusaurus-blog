import React from "react";
import { Card, Flex, Grid } from "./resume.style";
import { BsBookHalf } from "react-icons/bs";

function ProjectExperience() {
  return (
    <Card style={{ marginTop: "16px" }}>
      <Flex style={{ borderBottom: "1px solid" }}>
        <BsBookHalf fontSize={"20px"} style={{ marginRight: "16px" }} />
        项目经验
      </Flex>
      <Flex>
        <a href="https://github.com/tohsaka888/NeteaseCloudMusicWeb">
          使用React+TypeScript 重构网易云音乐
        </a>
      </Flex>
      <Flex>
        <a href="https://github.com/tohsaka888/HaoTianDianMusic">
          使用React Native+TypeScript 仿制网易云音乐App
        </a>
      </Flex>
      <Flex>
        <a href="https://github.com/tohsaka888/tohsaka888-music-player">
          React+TypeScript实现音乐播放器
        </a>
      </Flex>
      <Flex>
        <a href="https://github.com/tohsaka888/next-anime-web">
          next.js实现动漫网站
        </a>
      </Flex>
      <Flex>Taro微信小程序开发</Flex>
    </Card>
  );
}

export default ProjectExperience;
