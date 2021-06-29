import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { secondaryListItems } from './listItems';
import AaveTable from './AaveTable';
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import Title from "./Title";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from "@material-ui/core/TextField";
import {FormControl, FormLabel, Radio, RadioGroup} from "@material-ui/core";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Cuegod at '}
            <Link color="inherit" href="https://material-ui.com/">
                Covalent
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    margin: {
        marginTop: theme.spacing(5)
    }
}));


export default function Dashboard() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [view, setView] = React.useState("Covalent");
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const openCovalent = () => {
        setView("Covalent");
    }
    const openAave = () => {
        setView("Aave");
    }
    const [chainId, setChainId] = React.useState("1");
    const [dataset, setDataset] = useState([]);
    const [wallet, setWallet] = useState("");
    const handleChange = (event) => {
        setChainId(event.target.value);
    };
    const handleClick = (event) => {
        fetch(`https://api.covalenthq.com/v1/${chainId}/address/${wallet}/balances_v2/?key=onemillionwallets`)
            .then(res => res.json())
            .then(
                (data) => {
                    setDataset(data.data.items);
                },
                (error) => {
                    console.log(error)
                }
            )
    }
    const handleWallet = (event) => {
        setWallet(event.target.value);
    }

    const cards = [
        {
            index: 1,
            image: "https://www.covalenthq.com/static/images/blog/202010/covalent_funding.png",
            heading: "Covalent Funds Update",
            text: "Covalent Closes $3.1 Million in Oversubscribed Funding Round to Build the Future of Blockchain Data Analytics",
            link: "https://www.covalenthq.com/blog/covalent-funding-oct-2020/"
        },
        {
            index: 2,
            image: "https://www.covalenthq.com/static/images/blog/202103/fundraising.jpg",
            heading: "Covalent Partnership Update",
            text: "Covalent Closes $2 Million Strategic Funding Round to Launch its Decentralized Data Query Network",
            link: "https://www.covalenthq.com/blog/covalent-strategic-funding-mar-2021/"
        },
        {
            index: 3,
            image: "https://www.covalenthq.com/static/images/blog/202104/coinlist.jpg",
            heading: "Covalent Community Update",
            text: "Announcing Covalent’s CQT Community Sale and Distribution on CoinList",
            link: "https://www.covalenthq.com/blog/coinlist-sale/"
        },
        {
            index: 4,
            image: "https://www.covalenthq.com/static/images/blog/202012/opendefi.png",
            heading: "Covalent Partnership Update",
            text: "Covalent Partners with OpenDeFi to Enhance the Transparency of Tokenized Real-World Assets",
            link: "https://www.covalenthq.com/blog/opendefi-partnership-announcement/"
        },
        {
            index: 5,
            image: "https://www.covalenthq.com/static/images/blog/202012/omw-launch-v2.png?v2",
            heading: "One Million Wallets",
            text: "Covalent Launches One Million Wallets: A Celebration of Ethereum 2.0",
            link: "https://www.covalenthq.com/blog/one-million-wallets-launch-post/"
        },
        {
            index: 6,
            image: "https://www.covalenthq.com/static/images/blog/202012/covalent-acquires-byzantine.png",
            heading: "Covalent Capitalization Update",
            text: "Covalent Acquires Vancouver Blockchain Startup Byzantine Labs",
            link: "https://www.covalenthq.com/blog/covalent-acquires-byzantine-labs-blockchain-startup/"
        },
        {
            index: 7,
            image: "https://www.covalenthq.com/static/images/blog/202011/harish-joins-covalent.jpg",
            heading: "Covalent Team Talk",
            text: "Harish Raisinghani: “Why I’m excited to join the all-star team at Covalent”",
            link: "https://www.covalenthq.com/blog/harish-joins-covalent/"
        },
        {
            index: 8,
            image: "https://www.covalenthq.com/static/images/blog/202011/reefama.png",
            heading: "Covalent AMA Recap",
            text: "AMA Recap: Covalent and Reef",
            link: "https://www.covalenthq.com/blog/reef-ama-recap/"
        },
        {
            index: 9,
            image: "https://www.covalenthq.com/static/images/blog/202011/results.png",
            heading: "Covalent Challenge Winner Announcement",
            text: "Dungeons & Data Winners Announcement: Master Artists, Pen Assassins and Twitter Bards",
            link: "https://www.covalenthq.com/blog/dandd-winners-announced/"
        },

    ];
    function Covalent() {
        return (
            <div>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom className={classes.margin}>
                            Covalent
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Covalent provides a unified API to bring full transparency and visibility to assets across all blockchain networks.
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary" href="https://www.covalenthq.com/">
                                        Official Website
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary" href="https://t.me/CovalentHQ">
                                        Join Community
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="xl">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card.index} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={card.image}
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card.heading}
                                        </Typography>
                                        <Typography>
                                            {card.text}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary" href={card.link}>
                                            View More
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    <Box pt={4}>
                        <Copyright />
                    </Box>
                </Container>
            </div>
        )
    }
    const aaveView = () => {
        return (
            <div>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        {/* Chart */}
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <div>
                                    <Title>Powered by Covalent API</Title>
                                    <form className={classes.form} noValidate>
                                        <TextField
                                            value={wallet}
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="wallet"
                                            label="Wallet Address"
                                            name="wallet"
                                            autoComplete="wallet"
                                            autoFocus
                                            onChange={handleWallet}
                                        />
                                        <FormControl component="fieldset">
                                            <RadioGroup row aria-label="network" name="network-radio" value={chainId} onChange={handleChange}>
                                                <FormControlLabel value="1" control={<Radio />} label="Ethereum Mainnet" />
                                                <FormControlLabel value="137" control={<Radio />} label="Polygon/Matic Mainnet" />
                                                <FormControlLabel value="56" control={<Radio />} label="Binance Smart Chain" />
                                                <FormControlLabel value="43114" control={<Radio />} label="Avalanche C-Chain Mainnet" />
                                                <FormControlLabel value="250" control={<Radio />} label="Fantom Opera Mainnet" />
                                            </RadioGroup>
                                        </FormControl>

                                        <Button
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                            className={classes.submit}
                                            onClick={handleClick}
                                        >
                                            Check Wallet Balance
                                        </Button>
                                    </form>
                                </div>
                            </Paper>
                        </Grid>
                        {/* Recent Orders */}
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <AaveTable dataset={dataset} chainId={chainId}/>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Box pt={4}>
                        <Copyright />
                    </Box>
                </Container>
            </div>
        )
    }

    function getMainByView(view) {
        if (view === "Covalent") {
            return Covalent();
        } else if (view === "Aave") {
            return aaveView();
        }
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Multi-Chain Wallet Explorer OMW-Fantom
                    </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <div>
                        <ListItem button onClick={openCovalent}>
                            <ListItemIcon>
                                <img src="https://i.ibb.co/LY9YB2R/covalent-logo.png" alt="covalent-logo" border="0" style={{width: '24px'}}/>
                            </ListItemIcon>
                            <ListItemText primary="Covalent" />
                        </ListItem>
                        <ListItem button onClick={openAave}>
                            <ListItemIcon>
                                <AccountBalanceWalletIcon color={"primary"} />
                            </ListItemIcon>
                            <ListItemText primary="Wallet Explorer" />
                        </ListItem>
                    </div>
                </List>
                <Divider />
                <List>{secondaryListItems}</List>
            </Drawer>
            <main>
                {getMainByView(view)}
            </main>
        </div>
    );
}
