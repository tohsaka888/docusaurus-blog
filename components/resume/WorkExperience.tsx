import React from "react";
import { Card, Flex, Grid } from "./resume.style";
import { BsBriefcaseFill } from "react-icons/bs";

function WorkExperience() {
  return (
    <Card style={{ marginTop: "16px" }}>
      <Flex style={{ borderBottom: "1px solid" }}>
        <BsBriefcaseFill fontSize={"20px"} style={{ marginRight: "16px" }} />
        实习项目
      </Flex>

      <div>2021-5~2022-4</div>
      <div>
        在上海汉得信息技术股份有限公司担任前端实习生,负责上海寰宇物流有限公司后台系统的销售模块的开发及合同模块,承运商模块,费率模块的优化工作,销售模块在三个月的开发周期后成功上线
      </div>
    </Card>
  );
}

export default WorkExperience;
