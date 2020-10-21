import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { Header } from './widgets/Header'
import { Aside } from "./widgets/Aside"
import { Platform } from './pages/Platform/Platform'
import { authentication } from './redux/actions'
import { connect } from 'react-redux'
import { setAuthToken } from '../components/utils/deps'
import { errorBoundary } from '../components/ErrorBoundary'
import '../assets/styles/_app.scss'
import { LoadingGauge } from "../components/molecules/LoadingGauge";

class App extends React.Component {
  componentDidMount = () => {
    this.props.authentication()
  }
  componentDidUpdate = () => {
    if (this.props.authToken) {
      setAuthToken(this.props.authToken)
      errorBoundary({
        message: 'You are now authenticated',
        isError: false,
        isSuccess: true,
      });
    }
  }
  render() {
    const { authToken } = this.props;
    return (
      <div className="App">
        <div id="toast-message-container" className="hide" />
        {authToken ? (
          <BrowserRouter>
            <Header />
            <div className="main-container">
              <Aside />
              <div className="router-content-container">
                <Switch>
                  <Route path="/" exact component={Platform} />
                  <Route path="/platform" exact component={Platform} />
                </Switch>
              </div>
            </div>
          </BrowserRouter>
        ) : (
          <LoadingGauge isOverlay={true} />
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    authToken: auth.authToken ? auth.authToken['x-auth-token'] : null,
  }
}
export default connect(mapStateToProps, { authentication })(App)
