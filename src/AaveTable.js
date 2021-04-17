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

const AaveTable = (dataset) => {
    const explorerMap = {
        1: "https://etherscan.io/address/",
        137: "https://explorer-mainnet.maticvigil.com/address/",
        56: "https://bscscan.com/address/",
        43114: "https://cchain.explorer.avax.network/address/",
        250: "https://explorer.fantom.network/address/"
    }

    const concatUrl = (suffix) => {
        const baseUrl = explorerMap[dataset.chainId] || "";
        return baseUrl + suffix;
    }
    if (!dataset || dataset.dataset.length <= 0) {
        return null;
    } else {
        return (
            <React.Fragment>
                <Title>Wallet Details</Title>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Assets</TableCell>
                            <TableCell>Symbol</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Balance</TableCell>
                            <TableCell>Contract Address</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataset.dataset.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell><img src={item.logo_url} style={{width: '30px'}}/></TableCell>
                                <TableCell>{item.contract_ticker_symbol}</TableCell>
                                <TableCell>{item.quote_rate}</TableCell>
                                <TableCell>{item.balance / 10 ** item.contract_decimals}</TableCell>
                                <TableCell><a href={concatUrl(item.contract_address)} target="_blank">{item.contract_address}</a></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </React.Fragment>
        );
    }
}

export default AaveTable;
