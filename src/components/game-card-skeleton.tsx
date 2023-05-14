import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React, { FC } from "react";

export const GameCardSkeleton: FC = () => {
  return (
    <Card>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};
