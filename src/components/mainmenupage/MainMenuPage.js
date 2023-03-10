import React, { Component } from 'react';
import { Box } from "./Box";

class MainMenuPage extends Component {

    state = {
        // backgroundColor: '#aaaeb1af',
        minHeight: '99.8vh',
        width: '98.9vw',
    }

    render () {
        return (
            <div>
                <div style={ this.state }>
                    <div className="row text-center">
                        <h3>Main Menu</h3>
                    </div>

                    <Box className="billing"
                        content='Billing'
                        path="/billing"
                    />

                    <Box className="inventory"
                        content='Inventory'
                        path="/inventory"
                    />

                    <Box className="itemrequest"
                        content='Item Request'
                        path="/itemrequest"
                    />

                    <Box className="salesreport"
                        content='Sales Report'
                        path="/salesreport"
                    />

                </div>
            </div>
        );
    }
}

export default MainMenuPage;