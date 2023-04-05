import * as C from "./style";

import NpsIndicator from "../../components/NpsIndicator";
import ClosedSales from "../../components/ClosedSales";

const Home = () => {
  return (
    <C.Container>
      <C.Content>
        <NpsIndicator />
        <ClosedSales />
      </C.Content>
    </C.Container>
  );
};

export default Home;
