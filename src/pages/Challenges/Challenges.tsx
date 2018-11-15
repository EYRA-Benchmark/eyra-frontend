import * as React from "react";
import AnimateComponent from "../../components/common/Animation/AnimateComponent";
import ChallengesGrid from "../../components/common/CardGrid/CardGrid";
function challenges() {
  return (
    <div>
      <ChallengesGrid />
    </div>
  );
}
export default AnimateComponent(challenges);
