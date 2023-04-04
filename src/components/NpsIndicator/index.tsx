import happyFace from "../../assets/happy-face.svg";

import * as C from "./style";

const index = () => {
  return (
    <C.Container>
      <C.ContainerIcon>
        <h3>NPS geral</h3>
        <img src={happyFace} alt="happy face icon" />
        <p>Excelente!</p>
      </C.ContainerIcon>
      <p>NPS Score 75</p>
    </C.Container>
  );
};

export default index;
