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

export default function CompoundTable() {
    const classes = useStyles();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const baseUrl = "https://etherscan.io/address/";
    const concatUrl = (suffix) => {
        return baseUrl + suffix
    }

    useEffect(() => {
        fetch("https://api.covalenthq.com/v1/1/networks/compound/assets?key=onemillionwallets")
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
                <Title>Compound Dashboard</Title>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Assets</TableCell>
                            <TableCell>Token</TableCell>
                            <TableCell>Symbol</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Borrow APY</TableCell>
                            <TableCell>Supply APY</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell><a href={concatUrl(item.underlying.contract_address)}><img src={item.underlying.logo_url} style={{width: '30px'}}/></a></TableCell>
                                <TableCell>{item.underlying.contract_name}</TableCell>
                                <TableCell>{item.underlying.contract_ticker_symbol}</TableCell>
                                <TableCell>{item.underlying.quote_rate}</TableCell>
                                <TableCell>{item.borrow_apr}</TableCell>
                                <TableCell>{item.supply_apr}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </React.Fragment>
        );
    }
}
