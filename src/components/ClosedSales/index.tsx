import Progress from "../../assets/img-progress/Ellipse 1 (1).png";

import * as C from "./style";

const ClosedSales = () => {
  return (
    <C.Container>
      <h3>Vendas fechadas</h3>
      <C.Image>
        <img src={Progress} alt="" />
      </C.Image>
    </C.Container>
  );
};

export default ClosedSales;
