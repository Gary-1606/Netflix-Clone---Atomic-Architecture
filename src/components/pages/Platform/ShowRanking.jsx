import React from "react";
import {PlatformRows} from "./PlatformRows";
class ShowRanking extends React.Component {
  render() {
    return (
      <div className="show-ranking-container">
        <div className="poster-widget-container">
            <PlatformRows title="Netflix" />
            <PlatformRows title="Amazon Prime Video" />
            <PlatformRows title="Apple TV+" />
            <PlatformRows title="Viu" />
            <PlatformRows title="STARZ" />
        </div>
      </div>
    );
  }
}

export default { ShowRanking };
export { ShowRanking };
