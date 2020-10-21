import React from 'react'

class User extends React.Component {
    static defaultProps = {
        width: '25px',
        height: '25px',
        className: '',
        onClick: null,
        qaAttribute: null,
        title: "User"
    }
    render() {
        return (
            <div title={this.props.title}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 311.541 311.541"
                    {...(this.props.qaAttribute ? { "data-qa": this.props.qaAttribute } : {})}
                    width={this.props.width} height={this.props.height} className={this.props.className} onClick={this.props.onClick}>
                    <path d="M155.771 26.331C69.74 26.331 0 96.071 0 182.102c0 37.488 13.25 71.883 35.314 98.761 3.404-27.256 30.627-50.308 68.8-61.225 13.946 12.994 31.96 20.878 51.656 20.878 19.233 0 36.894-7.487 50.698-19.936 38.503 11.871 65.141 36.27 66.017 64.63 24.284-27.472 39.056-63.555 39.056-103.108 0-86.031-69.74-155.771-155.77-155.771zm0 195.738c-9.944 0-19.314-2.732-27.634-7.464-20.05-11.409-33.855-34.756-33.855-61.711 0-38.143 27.583-69.176 61.489-69.176 33.909 0 61.489 31.033 61.489 69.176 0 27.369-14.237 51.004-34.786 62.215-8.095 4.414-17.128 6.96-26.703 6.96z" />
                </svg>
            </div>
        )
    }
}

export { User }
export default { User }