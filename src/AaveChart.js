import React, {useEffect} from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import {Helmet} from "react-helmet";
import ScriptTag from 'react-script-tag';
import {string} from "prop-types";

export default class AaveChart extends React.Component {
    constructor(props) {
        super(props);
    }

    // getViewNumber = () => {
    //     if (this.state.view === "Aave") {
    //         return "7278"
    //     } else if (this.state.view === "Compound") {
    //         return "5692"
    //     } else {
    //         return "7083"
    //     }
    // }
    //
    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.viewName !== this.state.view) {
    //         this.setState({ view: nextProps.viewName });
    //     }
    // }


    render() {
        return (
            <div>
                <Title>Today's Market</Title>
                <ScriptTag type="text/javascript" src="https://jshosting.s3-us-west-2.amazonaws.com/library.js"></ScriptTag>
                <div className="coinmarketcap-currency-widget" data-currencyid="7278" data-base="USD" data-secondary=""
                     data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true"
                     data-statsticker="true" data-stats="USD"></div>
            </div>
        );
    }

}
