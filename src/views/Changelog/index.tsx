import React, { useEffect, useState } from "react";
import { useAllPrismicDocumentsByType } from "@prismicio/react";
import ChangelogCard from "../../components/ChangelogCard";

import { Container } from "./styles";
import { IChangelog } from "../../@types/changelog";
import { convertPrismicDocuments } from "./helper";

const Changelog: React.FC = () => {
  const [documents] = useAllPrismicDocumentsByType("changelog");
  const [changelogs, setChangelogs] = useState<IChangelog[]>([]);

  useEffect(() => {
    if (!documents?.length) return;
    setChangelogs(convertPrismicDocuments(documents));
  }, [documents]);

  return (
    <Container>
      {changelogs.map((changelog) => (
        <ChangelogCard key={changelog.version} value={changelog} />
      ))}
    </Container>
  );
};

export default Changelog;
