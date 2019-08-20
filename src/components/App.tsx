import * as React from "react";
import { hot } from "react-hot-loader";

import "./../assets/scss/App.scss";

class App extends React.Component<{}, undefined> {
    public render() {
        return (
            <div className="main">
                <h1>Differential</h1>
            </div>
        );
    }
}

declare let module: object;

export default hot(module)(App);
