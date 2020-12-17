import React, {useEffect, useState} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));

export default function UniswapTable() {
    const classes = useStyles();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const getUrl = (input, output) => {
        return `https://app.uniswap.org/#/swap?inputCurrency=${input}&outputCurrency=${output}`
    }

    useEffect(() => {
        fetch("https://api.covalenthq.com/v1/1/networks/uniswap_v2/assets?key=onemillionwallets")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setItems(data.data.items);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <React.Fragment>
                <Title>Uniswap Dashboard</Title>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Pairs</TableCell>
                            <TableCell>Liquidity</TableCell>
                            <TableCell>Swap Count(24hrs)</TableCell>
                            <TableCell>Volume(24hrs)</TableCell>
                            <TableCell>Fee(24hrs)</TableCell>
                            <TableCell>Trade</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>{item.token_0.contract_ticker_symbol} - {item.token_1.contract_ticker_symbol}</TableCell>
                                <TableCell>${item.total_liquidity_quote}</TableCell>
                                <TableCell>{item.swap_count_24h}</TableCell>
                                <TableCell>${item.volume_24h_quote}</TableCell>
                                <TableCell>${item.fee_24h_quote}</TableCell>
                                <TableCell><a href={getUrl(item.token_0.contract_address, item.token_1.contract_address)}>Trade here</a></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </React.Fragment>
        );
    }
}
