import React from "react";

import { Spinner } from "./Spinner";
import { GradientIcon} from "./icons";

export const LoadingIcon: React.FC = () => (
  <Spinner>
    <GradientIcon size={8} />
  </Spinner>
)