import React from "react";

class Search extends React.Component {
  static defaultProps = {
    width: "25px",
    height: "25px",
    className: "",
    stroke: "#FFFFFF",
    strokeWidth: "5",
    onClick: null,
    qaAttribute: null,
  };
  render() {
    return (
      <>
        <svg
          enableBackground="new 0 0 96 96"
          // id="Layer_1"
          version="1.1"
          viewBox="0 0 96 96"
          xmlns="http://www.w3.org/2000/svg"
          width={this.props.width}
          height={this.props.height}
          className={this.props.className}
          stroke={this.props.stroke}
          strokeWidth={this.props.strokeWidth}
          onClick={this.props.onClick}
          {...(this.props.qaAttribute
            ? { "data-qa": this.props.qaAttribute }
            : {})}
        >
          <g>
            <path
              d="M57.661,51.972c-0.678,1.142-1.508,2.218-2.489,3.199c-6.342,6.343-16.627,6.344-22.971,0c-6.342-6.342-6.341-16.625,0.001-22.968   c6.343-6.342,16.628-6.344,22.97-0.001c4.337,4.337,5.708,10.515,4.114,16.018"
              fill="none"
              // stroke="#111111"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              //strokeWidth="1"
            />
            <line
              fill="none"
              // stroke="#111111"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              //strokeWidth="1"
              x1="55.654"
              x2="68.555"
              y1="55.655"
              y2="68.554"
            />
          </g>
        </svg>
      </>
    );
  }
}

export { Search };
export default { Search };
