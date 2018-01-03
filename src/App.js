/** REACT **/
import React, { Component } from 'react';
/** ROUTER **/
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
/** REDUX **/
import { Provider } from 'react-redux';
/** APP **/
import AuthorizedRoute from 'controllers/Route';
import Home from 'controllers/Home';
import Login from 'controllers/Login';
import 'normalize.css';
import 'typeface-roboto';
import './App.css';
/** MATERIAL UI **/
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import theme from 'theme.js';
const hercTheme = createMuiTheme(theme);

class App extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { store, history } = this.props;
        return (
            <MuiThemeProvider theme={hercTheme}>
                <Provider store={store}>
                    <ConnectedRouter history={history}>
                        <div className="app">
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/login/" component={Login} />
                            </Switch>
                        </div>
                    </ConnectedRouter>
                </Provider>
            </MuiThemeProvider>
        );
    }
}

export default App;
