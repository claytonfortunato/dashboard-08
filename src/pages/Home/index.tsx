import * as C from "./style";

import NpsIndicator from "../../components/NpsIndicator";
import ClosedSales from "../../components/ClosedSales";
import MonthlyGoal from "../../components/MonthlyGoal";

const Home = () => {
  return (
    <C.Container>
      <C.Content>
        <NpsIndicator />
        <ClosedSales />
        <MonthlyGoal />
      </C.Content>
    </C.Container>
  );
};

export default Home;
