import React from "react";
import "./styles.scss";
import { PlatformList } from "./PlatformList";
import { ShowRanking } from "./ShowRanking";
class Platform extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>Platforms</h2>
        <div className="platform-main-container">
          <div className="row m-0">
            <div className="col-12 col-md-4 col-lg-3">
              <PlatformList />
            </div>
            <div className="col-12 col-md-8 col-lg-9">
              <ShowRanking />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export { Platform };
export default Platform;
