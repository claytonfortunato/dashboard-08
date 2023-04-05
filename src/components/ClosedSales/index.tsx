import Progress from "../../assets/img-progress/Ellipse 1 (1).png";
import FrameOne from "../../assets/frames/Frame 9.png";
import FrameTwo from "../../assets/frames/Frame 10.png";

import * as C from "./style";

const ClosedSales = () => {
  return (
    <C.Container>
      <h3>Vendas fechadas</h3>
      <C.Image>
        <img src={Progress} alt="" />
      </C.Image>
      <C.Frame>
        <img src={FrameOne} alt="frame" />
        <p>100</p>
        <img src={FrameTwo} alt="frame" />
        <p>70</p>
      </C.Frame>
    </C.Container>
  );
};

export default ClosedSales;
