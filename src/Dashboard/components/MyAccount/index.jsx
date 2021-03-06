import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom'
import Profile from './components/Profile';
import PlanUsage from './components/PlanUsage';
import ChangePassword from './components/ChangePassword';
import PlansAndPricing from './components/PlansAndPricing';
import PaymentMethod from './components/PaymentMethod';
import BillingHistory from './components/BillingHistory';




class Account extends Component {

    renderSwitch() {

        switch (this.props.match.params.childRoute) {
            case 'query-usage':

                return <PlanUsage />;

            case 'profile':

                return <Profile />;

            case 'change-password':

                return <ChangePassword />;

            case 'change-plan':

                return <PlansAndPricing />

            case 'billing-settings':

                return <PaymentMethod />

            case 'billing-history':

                return <BillingHistory />

            default:

                 window.location.href="/main/my-account/query-usage" 


        }
    }

    handleTabs(tabPath) {
        this.props.history.push({
            pathname: `/main/my-account/${tabPath}`
        })
        document.querySelector('.active').className = ""

        document.getElementById(tabPath).className = "active"

    }

    componentDidMount () {
        var activeComponent = document.getElementById(this.props.match.params.childRoute);

        if(activeComponent) {
            activeComponent.className = "active";
        }
        
      
    }

    render() {

        return (
            <Fragment>
                <div className="container container-body">
                    <div className="container-wrapper">
                        <div className="main-content">
                            <div className="panel panel-default panel-content-wrapper settings-panel">
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="menu-nav-stacked">
                                                <ul className="nav nav-pills nav-stacked-module">
                                                    <li id='query-usage' onClick={() => this.handleTabs('query-usage')}>

                                                        <a  >
                                                            <span className="typcn margin-right-5 typcn-chart-area-outline" ></span>
                                                            <span  >Plan Usage</span>

                                                        </a>
                                                    </li>
                                                    <li id='profile' onClick={() => this.handleTabs('profile')}>

                                                        <a  >
                                                            <span className="typcn margin-right-5 typcn-user-outline" ></span>
                                                            <span  >Profile</span>

                                                        </a>
                                                    </li>
                                                    <li id='change-password' onClick={() => this.handleTabs('change-password')}>

                                                        <a  >
                                                            <span className="typcn margin-right-5 typcn-user-outline" ></span>
                                                            <span  >Change Password</span>

                                                        </a>
                                                    </li>
                                                    <li id='change-plan' onClick={() => this.handleTabs('change-plan')}>

                                                        <a  >
                                                            <span className="typcn margin-right-5 typcn-input-checked-outline" ></span>
                                                            <span  >Plans and Pricing</span>

                                                        </a>
                                                    </li>
                                                    <li id='billing-settings' onClick={() => this.handleTabs('billing-settings')}>

                                                        <a  >
                                                            <span className="typcn margin-right-5 typcn-credit-card" ></span>
                                                            <span  >Payment Method</span>

                                                        </a>
                                                    </li>

                                                    <li id='billing-history' onClick={() => this.handleTabs('billing-history')}>

                                                        <a  >
                                                            <span className="typcn margin-right-5 typcn-book" ></span>
                                                            <span  >Billing History</span>

                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-9">

                                            <div className="panel-nav-stacked-no-border">
                                                {this.renderSwitch()}
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default withRouter(Account)
