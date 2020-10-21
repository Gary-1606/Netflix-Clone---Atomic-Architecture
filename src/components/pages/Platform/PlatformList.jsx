import React from "react";
import { errorBoundary } from "../../ErrorBoundary";
import { LoadingGauge } from "../../molecules/LoadingGauge";
import { getAuthToken } from "../../utils/deps";
import { Search } from "../../atoms/Icons";
import { getPlatforms } from "../../../_config/request";

class PlatformList extends React.Component {
  state = {
    platformLists: [],
    platformSearchResult: [],
    isLoading: true,
    platformSearchInput: "",
  };
  componentDidMount = () => {
    this.onGetPlatformLists();
    this.setState({
      platformSearchInput: "",
    });
  };
  onPlatformSearch = (e) => {
    const { platformLists } = this.state;
    let searchedValue = e.target.value;
    let platformSearchResult = [];
    this.setState({ platformSearchInput: searchedValue });
    if (searchedValue || searchedValue === "") {
        platformSearchResult = platformLists.filter((item, index) => {
        return item.platform_name
          ?.toLowerCase()
          .includes(searchedValue.toLowerCase());
      });
    } else {
        platformSearchResult = [];
    }
    this.setState({
        platformSearchResult: platformSearchResult,
    });
  };
  onGetPlatformLists = () => {
    let token = getAuthToken();
    if (!token) {
      return;
    } else {
      let axios = require("axios");
      let config = getPlatforms(token);
      axios(config)
        .then((response) => {
          this.setState({
            platformLists: response.data.country_platforms,
            platformSearchResult: response.data.country_platforms,
            isLoading: false,
          });
        })
        .catch((err) => {
          errorBoundary({
            message: "Error in API call",
            isError: true,
            isSuccess: false,
          });
        });
    }
  };
  renderPlatformLists = (platformLists) => {
    let uniquePlatforms = platformLists.reduce((acc, obj) => {
      var exist = acc.find(
        ({ platform_id }) => obj.platform_id === platform_id
      );
      if (!exist) {
        acc.push(obj);
      }
      return acc;
    }, []);
    return uniquePlatforms.map((platform, index) => {
      return (
        <div key={index} className="platform-item">
          <img
            alt={`${platform.platform_name}`}
            className="platform-asset-image"
            src={`${platform.asset_url}`}
          />
          <span className="platform-name">{platform.platform_name}</span>
        </div>
      );
    });
  };
  render() {
    const { isLoading, platformSearchInput, platformSearchResult } = this.state;
    return (
      <div className="platform-list-container">
        {isLoading ? <LoadingGauge /> : (
            <div className="platform-search">
            <Search className="search-icon" stroke="#fff" />
            <input
              className="platform-search-input"
              data-qa={`qa-platform-search-input`}
              placeholder="Search Here"
              value={platformSearchInput}
              onChange={this.onPlatformSearch}
            />
          </div>
        )}
        
        {platformSearchResult.length ? (
          <React.Fragment>
            <div className="platform-list-heading">List of Platforms</div>
            <div className="platform-lists">
              {this.renderPlatformLists(platformSearchResult)}
            </div>
          </React.Fragment>
        ) : isLoading ? null : (
          <div className="no-data">No Matching Data</div>
        )}
      </div>
    );
  }
}

export default { PlatformList };
export { PlatformList };
