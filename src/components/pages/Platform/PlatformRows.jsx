import React from "react";
import { getShowList } from "../../../_config/request";
import { errorBoundary } from "../../ErrorBoundary";
import { CustomDropdown, LoadingGauge } from "../../molecules";
import { getAuthToken, isEmptyObject } from "../../utils/deps";
class PlatformRows extends React.Component {
  state = {
    shows: [],
    isLoading: true,
    selectedDateRange: 1,
    selectedMarket: 1,
    dateRange: [
      {
        id: 1,
        name: "latest",
      },
      {
        id: 2,
        name: "last30days",
      },
      {
        id: 3,
        name: "last60days",
      },
    ],
    market: [
      {
        id: 1,
        name: "global",
      },
      {
        id: 2,
        name: "US",
      },
      {
        id: 3,
        name: "GB",
      },
      {
        id: 4,
        name: "BR",
      },
    ],
  };
  componentDidMount = () => {
    const { title } = this.props;
    this.onGetShows(title);
  };
  onGetShows = (title, market, period) => {
    let token = getAuthToken();
    if (!token) {
      return;
    } else {
      let config;
      if (market) {
        config = getShowList(token, title, market);
      } else if (period) {
        config = getShowList(token, title, market, period);
      } else {
        config = getShowList(token, title);
      }
      let axios = require("axios");
      axios(config)
        .then((response) => {
          this.setState({
            shows: response.data.data[0].datapoints,
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
  onMarketSelect = (event, key, list) => {
    event.preventDefault();
    if (!isEmptyObject(list)) {
      const { id = 1, name = "global" } = list;
      this.setState({
        selectedMarket: id,
        isLoading: true
      });
      this.onGetShows(key, name);
    }
  };
  onDateRangeSelect = (event, key, list) => {
    event.preventDefault();
    if (!isEmptyObject(list)) {
      const { id = 0,  name="latest" } = list;
      this.setState({
        selectedDateRange: id,
        isLoading: true
      });
      this.onGetShows(key, null, name);
    }
  };
  render() {
    const {
      shows,
      isLoading,
      market,
      selectedMarket,
      dateRange,
      selectedDateRange,
    } = this.state;
    const { title } = this.props;
    return (
      <div className="poster-container">
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <h3>{title}</h3>
          <div className="select-container d-flex">
            <CustomDropdown
              //textValue="Priority"
              options={market}
              id={title}
              className={"custom-dropdown"}
              placeholder="Market"
              selectedValue={selectedMarket}
              onChange={this.onMarketSelect}
            />
            <CustomDropdown
              //textValue="Priority"
              options={dateRange}
              className={"custom-dropdown"}
              placeholder="Date Range"
              id={title}
              selectedValue={selectedDateRange}
              onChange={this.onDateRangeSelect}
            />
          </div>
        </div>
        <div className="row-poster">
          {isLoading ? <LoadingGauge /> : null}
          {shows &&
            shows.map((show) => {
              return (
                <img
                  className="poster"
                  key={show.parrot_id}
                  alt={`${show.label}`}
                  src={`https://passets.parrotanalytics.com/tv/poster-hyphen/${show.parrot_id}.jpg`}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default { PlatformRows };
export { PlatformRows };
