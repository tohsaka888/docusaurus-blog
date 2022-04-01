import React from "react";
import { Card, Flex, Grid } from "./resume.style";
import { BsFillPersonFill } from "react-icons/bs";

function PersonalInfo() {
  return (
    <Card style={{ marginTop: "16px" }}>
      <Flex style={{ borderBottom: "1px solid" }}>
        <BsFillPersonFill fontSize={"20px"} style={{marginRight: '16px'}} />
        个人信息
      </Flex>
      <Grid>
        <span>姓名: 孙典典</span>
        <span>学校: 常州工学院</span>
        <span>性别: 男</span>
        <span>专业: 软件工程</span>
        <span>出生年月: 2001/3</span>
        <span>实习经验: 1年</span>
      </Grid>
    </Card>
  );
}

export default PersonalInfo;
