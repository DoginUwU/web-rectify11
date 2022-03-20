import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { IChangelog } from "../../@types/changelog";

import { Container, ChangelogImprovement } from "./styles";

interface IChangelogCardProps {
  value: IChangelog;
}

const ChangelogCard: React.FC<IChangelogCardProps> = ({ value }) => (
  <Container>
    <h1>{value.version}</h1>
    <p>
      <strong>{value.date}</strong> - {value.description}
    </p>
    {value.changes.map((change) => (
      <ChangelogImprovement key={change}>
        <AiOutlineCheck />
        {change}
      </ChangelogImprovement>
    ))}
  </Container>
);

export default ChangelogCard;
