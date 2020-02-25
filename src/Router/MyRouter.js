import React, { Component, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import ScrollToTop from "Components/Others/ScrollToTop"
import { Landing } from "Views"
import 'bootstrap/dist/css/bootstrap.min.css';

export default class componentName extends Component {
    render() {
        return (
            <Router>
                <ScrollToTop>
                    <Suspense fallback={<h1></h1>}>
                        <Switch>
                            <div className="page-landing">
                                <Route path="/" exact component={Landing} />
                            </div>
                            <Route path="*">
                                <Redirect to="/" />
                            </Route>
                        </Switch>
                    </Suspense>
                </ScrollToTop>
            </Router>
        )
    }
}
