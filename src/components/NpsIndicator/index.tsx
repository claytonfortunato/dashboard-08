import happyFace from "../../assets/happy-face.svg";

import { Container } from "./style";

import { TextIndicator } from "../TextIndicator";
import { Card } from "../Card";

interface NpsIndicatorProps {
  title: string;
  score: number;
}

export function NpsIndicator({ title, score }: NpsIndicatorProps) {
  return (
    <Card title={title}>
      <Container>
        <img src={happyFace} alt="" />
        <p>Excelente!</p>
      </Container>
      <TextIndicator title="NPS Score" value={score} />
    </Card>
  );
}
