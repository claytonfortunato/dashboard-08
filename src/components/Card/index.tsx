import { ReactNode } from "react";
import { CardContainerProps, Container } from "./style";

interface CardProps extends CardContainerProps {
  children: ReactNode;
  title: string;
}

export function Card({ children, title, ...rest }: CardProps) {
  return (
    <Container {...rest}>
      <p>{title}</p>
      {children}
    </Container>
  );
}
