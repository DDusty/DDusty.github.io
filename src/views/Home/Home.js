import React, { useMemo } from 'react';
import Page from '../../components/Page';
import HomeImage from '../../assets/img/home.png';
import CashImage from '../../assets/img/crypto_tomb_cash.svg';
import Image from 'material-ui-image';
import styled from 'styled-components';
import { Alert } from '@material-ui/lab';
import { createGlobalStyle } from 'styled-components';
import CountUp from 'react-countup';
import CardIcon from '../../components/CardIcon';
import TokenSymbol from '../../components/TokenSymbol';
import useTombStats from '../../hooks/useTombStats';
import useLpStats from '../../hooks/useLpStats';
import useModal from '../../hooks/useModal';
import useZap from '../../hooks/useZap';
import useBondStats from '../../hooks/useBondStats';
import usetShareStats from '../../hooks/usetShareStats';
import useTotalValueLocked from '../../hooks/useTotalValueLocked';
import MotionDiv from "../../components/MotionDiv/MotionDiv";
import { tomb as tombTesting, tShare as tShareTesting, tBond as tBondTesting } from '../../tomb-finance/deployments/deployments.testing.json';
import { tomb as tombProd, tShare as tShareProd, tBond as tBondProd } from '../../tomb-finance/deployments/deployments.mainnet.json';

import MetamaskFox from '../../assets/img/metamask-fox.svg';

import { Box, Button, Card, CardContent, Grid, Paper } from '@material-ui/core';
import ZapModal from '../Bank/components/ZapModal';

import { makeStyles } from '@material-ui/core/styles';
import useTombFinance from '../../hooks/useTombFinance';

const BackgroundImage = createGlobalStyle`
  body {
    background-color: #000000;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23160700'/%3E%3Cstop offset='1' stop-color='%23160700' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23011112'/%3E%3Cstop offset='1' stop-color='%23011112' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%230e2702'/%3E%3Cstop offset='1' stop-color='%230e2702' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23000000'/%3E%3Cstop offset='1' stop-color='%23000000' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%232C0E01'/%3E%3Cstop offset='1' stop-color='%232C0E01' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23022123'/%3E%3Cstop offset='1' stop-color='%23022123' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
  }
`;

const useStyles = makeStyles((theme) => ({
  button: {
    [theme.breakpoints.down('415')]: {
      marginTop: '10px',
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const TVL = useTotalValueLocked();
  const tombFtmLpStats = useLpStats('TOMB-FTM-LP');
  const tShareFtmLpStats = useLpStats('TSHARE-FTM-LP');
  const tombStats = useTombStats();
  const tShareStats = usetShareStats();
  const tBondStats = useBondStats();
  const tombFinance = useTombFinance();

  let tomb;
  let tShare;
  let tBond;

  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    tomb = tombTesting;
    tBond = tBondTesting;
    tShare = tShareTesting;
  } else {
    tomb = tombProd;
    tBond = tBondProd;
    tShare = tShareProd;
    
  }

  const buyTombAddress = 'https://spookyswap.finance/swap?outputCurrency=' + tomb.address;
  const buyTShareAddress = 'https://spookyswap.finance/swap?outputCurrency=' + tShare.address;
  const buyTBondAddress = 'https://spookyswap.finance/swap?outputCurrency='  + tBond.address;

  const tombLPStats = useMemo(() => (tombFtmLpStats ? tombFtmLpStats : null), [tombFtmLpStats]);
  const tshareLPStats = useMemo(() => (tShareFtmLpStats ? tShareFtmLpStats : null), [tShareFtmLpStats]);
  const tombPriceInDollars = useMemo(
    () => (tombStats ? Number(tombStats.priceInDollars).toFixed(2) : null),
    [tombStats],
  );
  const tombPriceInFTM = useMemo(() => (tombStats ? Number(tombStats.tokenInFtm).toFixed(4) : null), [tombStats]);
  const tombCirculatingSupply = useMemo(() => (tombStats ? String(tombStats.circulatingSupply) : null), [tombStats]);
  const tombTotalSupply = useMemo(() => (tombStats ? String(tombStats.totalSupply) : null), [tombStats]);

  const tSharePriceInDollars = useMemo(
    () => (tShareStats ? Number(tShareStats.priceInDollars).toFixed(2) : null),
    [tShareStats],
  );
  const tSharePriceInFTM = useMemo(
    () => (tShareStats ? Number(tShareStats.tokenInFtm).toFixed(4) : null),
    [tShareStats],
  );
  const tShareCirculatingSupply = useMemo(
    () => (tShareStats ? String(tShareStats.circulatingSupply) : null),
    [tShareStats],
  );
  const tShareTotalSupply = useMemo(() => (tShareStats ? String(tShareStats.totalSupply) : null), [tShareStats]);

  const tBondPriceInDollars = useMemo(
    () => (tBondStats ? Number(tBondStats.priceInDollars).toFixed(2) : null),
    [tBondStats],
  );
  const tBondPriceInFTM = useMemo(() => (tBondStats ? Number(tBondStats.tokenInFtm).toFixed(4) : null), [tBondStats]);
  const tBondCirculatingSupply = useMemo(
    () => (tBondStats ? String(tBondStats.circulatingSupply) : null),
    [tBondStats],
  );
  const tBondTotalSupply = useMemo(() => (tBondStats ? String(tBondStats.totalSupply) : null), [tBondStats]);

  const tombLpZap = useZap({ depositTokenName: 'TOMB-FTM-LP' });
  const tshareLpZap = useZap({ depositTokenName: 'TSHARE-FTM-LP' });

  const StyledLink = styled.a`
    font-weight: 700;
    text-decoration: none;
  `;

  const [onPresentTombZap, onDissmissTombZap] = useModal(
    <ZapModal
      decimals={18}
      onConfirm={(zappingToken, tokenName, amount) => {
        if (Number(amount) <= 0 || isNaN(Number(amount))) return;
        tombLpZap.onZap(zappingToken, tokenName, amount);
        onDissmissTombZap();
      }}
      tokenName={'TOMB-FTM-LP'}
    />,
  );

  const [onPresentTshareZap, onDissmissTshareZap] = useModal(
    <ZapModal
      decimals={18}
      onConfirm={(zappingToken, tokenName, amount) => {
        if (Number(amount) <= 0 || isNaN(Number(amount))) return;
        tshareLpZap.onZap(zappingToken, tokenName, amount);
        onDissmissTshareZap();
      }}
      tokenName={'TSHARE-FTM-LP'}
    />,
  );

  return (
    <Page>
      {/* <BackgroundImage /> */}
        {/* Logo */}
        {/* <Grid container item xs={12} sm={4} justify="center"> */}
          {/* <Paper>xs=6 sm=3</Paper> */}
          {/* <Image color="none" style={{ width: '300px', paddingTop: '0px' }} src={CashImage} />
        </Grid> */}
        {/* Explanation text */}
        {/* <Grid item xs={12} sm={8}>
          <Paper>
            <Box p={4}>
              <h2>Welcome to Tomb Finance</h2>
              <p>The first algorithmic stablecoin on Fantom Opera, pegged to the price of 1 FTM via seigniorage.</p>
              <p>
                Stake your TOMB-FTM LP in the Cemetery to earn TSHARE rewards.
                Then stake your earned TSHARE in the Masonry to earn more TOMB!
              </p>
            </Box>
          </Paper>
        </Grid> */}

        {/* <Grid container spacing={3}>
    <Grid item  xs={12} sm={12} justify="center"  style={{ margin: '12px', display: 'flex' }}>
            <Alert variant="filled" severity="warning">
              <b>
      Please visit our <StyledLink target="_blank" href="https://docs.tomb.finance">documentation</StyledLink> before purchasing TOMB or TSHARE!</b>
            </Alert>
        </Grid>
        </Grid> */}

        {/* TVL */}
        <MotionDiv delay={0} direction={"UP"}>
          <div style={{display: 'flex', color: 'white', alignItems: 'center', justifyContent: 'center', columnGap: '1rem'}}>
            <span>DOGE</span>          
            <div className='tvl-button'>
              <span style={{fontWeight: 'bolder', marginRight: '1rem', fontSize: '18px'}}>TVL</span>
              {TVL ? (
                <CountUp style={{ fontSize: '18px'}} end={TVL} separator="," prefix="$" />
              ) : (
                <div style={{display: 'flex', alignItems: 'center'}}>
                <span className='dot-loader'></span>
                <span className='dot-loader dot-louder-middle'></span>
                <span className='dot-loader'></span>
                <span style={{fontWeight: 'bolder', margin: '0rem 0.5rem', fontSize: '20px'}}>LOADING</span>
                <span className='dot-loader'></span>
                <span className='dot-loader dot-louder-middle'></span>
                <span className='dot-loader'></span>
              </div>
              )}
            
            </div>
          </div>
        </MotionDiv>

        {/* Wallet */}
        {/* <Grid item xs={12} sm={8}>
          <Card style={{ height: '100%' }}>
            <CardContent align="center" style={{ marginTop: '2.5%' }}>
              <Button color="primary" href="/masonry" variant="contained" style={{ marginRight: '10px' }}>
                Stake Now
              </Button>
              <Button href="/cemetery" variant="contained" style={{ marginRight: '10px' }}>
                Farm Now
              </Button>
              <Button
                color="primary"
                target="_blank"
                href={buyTombAddress}
                variant="contained"
                style={{ marginRight: '10px' }}
                className={classes.button}
              >
                Buy TOMB
              </Button>
              <Button variant="contained" target="_blank" href={buyTShareAddress} className={classes.button}>
                Buy TSHARE
              </Button>
            </CardContent>
          </Card>
        </Grid> */}
{/* grid grid-cols-1 gap-y-6 md:grid-cols-3 mt-14 mx-12 md:mx-auto gap-x-4 */}


      <div style={{display: 'flex', columnGap: '1rem', color: 'white', margin: '4rem 0rem', justifyContent: 'center'}}>
      {/* TOMB */}
      <MotionDiv delay={0} direction={"UP"}>
        <div className='home-card' style={{position: 'relative'}}>
          <div style={{display: 'flex'}}>
            <img width={25} height={25} src='https://tomb.com/static/media/TOMB.2425ac09.svg' />
            <h2 style={{fontSize: '24px', marginLeft: '0.5rem'}}>TOMB</h2>

            <Button
              onClick={() => {
                tombFinance.watchAssetInMetamask('TOMB');
              }}
              color="primary"
              variant="outlined"
              style={{ position: 'absolute', top: '16px', right: '15px' }}
            >
              +&nbsp;
              <img alt="metamask fox" style={{ width: '20px' }} src={MetamaskFox} />
            </Button>
          </div>
          <div style={{marginTop: '1rem'}}>
            <span style={{fontSize: '16px', fontWeight: 'bolder', color: '#f500fa', marginBottom: '0.5rem'}}>Current price</span>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <span style={{fontSize: '20px', marginRight: '0.25rem', color: '#f500fa'}}>FTM</span>
              <span style={{fontSize: '36px', lineHeight: '1'}}>{tombPriceInFTM ? tombPriceInFTM : '-.----'}</span>
            </div>
            <div>
              <span style={{fontSize: '16px', marginRight: '0.25rem', color: '#f500fa'}}>USD</span>
              <span style={{fontSize: '16px'}}>${tombPriceInDollars ? tombPriceInDollars : '-.--'}</span>
            </div>
          </div>

          <div style={{display: 'flex', flexDirection: 'column', marginTop: '1rem'}}>
            <span style={{fontSize: '16px', fontWeight: 'bolder', color: '#f500fa'}}>Market Cap:</span>
            <span style={{fontSize: '24px', fontWeight: 'bolder'}}>$ {tombCirculatingSupply && tombPriceInDollars ? (tombCirculatingSupply * tombPriceInDollars).toFixed(2) :  '-.----'}</span>
          </div>

          <div style={{display: 'flex', flexDirection: 'column', marginTop: '1rem'}}>
            <span style={{fontSize: '16px', fontWeight: 'bolder', color: '#f500fa'}}>Circulating Supply:</span>
            <span style={{fontSize: '24px', fontWeight: 'bolder'}}>{tombCirculatingSupply ? tombCirculatingSupply : '-.--'}</span>
          </div>

          <div style={{display: 'flex', flexDirection: 'column', marginTop: '1rem'}}>
            <span style={{fontSize: '16px', fontWeight: 'bolder', color: '#f500fa'}}>Total Supply:</span>
            <span style={{fontSize: '24px', fontWeight: 'bolder'}}>{tombTotalSupply ? tombTotalSupply : '-.--'}</span>
          </div>
          
          <div style={{marginTop: '1rem'}}>
          <Button variant="contained" target="_blank" href={buyTShareAddress} className="buy-btn">
            BUY TOMB
          </Button>
          </div>
        </div>
       </MotionDiv>
        {/* TSHARE */}
        <MotionDiv delay={0.1} direction={"UP"}>
        <div className='home-card' style={{position: 'relative'}}>
          <div style={{display: 'flex'}}>
            <img width={25} height={25} src='https://tomb.com/static/media/TOMB.2425ac09.svg' />
            <h2 style={{fontSize: '24px', marginLeft: '0.5rem'}}>TSHARE</h2>

            <Button
              onClick={() => {
                tombFinance.watchAssetInMetamask('TOMB');
              }}
              color="primary"
              variant="outlined"
              style={{ position: 'absolute', top: '16px', right: '15px' }}
            >
              +&nbsp;
              <img alt="metamask fox" style={{ width: '20px' }} src={MetamaskFox} />
            </Button>
          </div>
          <div style={{marginTop: '1rem'}}>
            <span style={{fontSize: '16px', fontWeight: 'bolder', color: '#f500fa', marginBottom: '0.5rem'}}>Current price</span>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <span style={{fontSize: '20px', marginRight: '0.25rem', color: '#f500fa'}}>FTM</span>
              <span style={{fontSize: '36px', lineHeight: '1'}}>{tSharePriceInFTM ? tSharePriceInFTM : '-.----'}</span>
            </div>
            <div>
              <span style={{fontSize: '16px', marginRight: '0.25rem', color: '#f500fa'}}>USD</span>
              <span style={{fontSize: '16px'}}>${tSharePriceInDollars ? tSharePriceInDollars : '-.--'}</span>
            </div>
          </div>

          <div style={{display: 'flex', flexDirection: 'column', marginTop: '1rem'}}>
            <span style={{fontSize: '16px', fontWeight: 'bolder', color: '#f500fa'}}>Market Cap:</span>
            <span style={{fontSize: '24px', fontWeight: 'bolder'}}>$ {tShareCirculatingSupply && tSharePriceInDollars ? (tShareCirculatingSupply * tSharePriceInDollars).toFixed(2) :  '-.----'}</span>
          </div>

          <div style={{display: 'flex', flexDirection: 'column', marginTop: '1rem'}}>
            <span style={{fontSize: '16px', fontWeight: 'bolder', color: '#f500fa'}}>Circulating Supply:</span>
            <span style={{fontSize: '24px', fontWeight: 'bolder'}}>{tShareCirculatingSupply ? tShareCirculatingSupply : '-.--'}</span>
          </div>

          <div style={{display: 'flex', flexDirection: 'column', marginTop: '1rem'}}>
            <span style={{fontSize: '16px', fontWeight: 'bolder', color: '#f500fa'}}>Total Supply:</span>
            <span style={{fontSize: '24px', fontWeight: 'bolder'}}>{tShareTotalSupply ? tShareTotalSupply : '-.--'}</span>
          </div>
          
          <div style={{marginTop: '1rem'}}>
          <Button variant="contained" target="_blank" href={buyTShareAddress} className="buy-btn">
            BUY TSHARE
          </Button>
          </div>
        </div>
        </MotionDiv>
        {/* TBOND */}
        <MotionDiv delay={0} direction={"UP"}>
        <div className='home-card' style={{position: 'relative'}}>
          <div style={{display: 'flex'}}>
            <img width={25} height={25} src='https://tomb.com/static/media/TOMB.2425ac09.svg' />
            <h2 style={{fontSize: '24px', marginLeft: '0.5rem'}}>TBOND</h2>

            <Button
              onClick={() => {
                tombFinance.watchAssetInMetamask('TOMB');
              }}
              color="primary"
              variant="outlined"
              style={{ position: 'absolute', top: '16px', right: '15px' }}
            >
              +&nbsp;
              <img alt="metamask fox" style={{ width: '20px' }} src={MetamaskFox} />
            </Button>
          </div>
          <div style={{marginTop: '1rem'}}>
            <span style={{fontSize: '16px', fontWeight: 'bolder', color: '#f500fa', marginBottom: '0.5rem'}}>Current price</span>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <span style={{fontSize: '20px', marginRight: '0.25rem', color: '#f500fa'}}>FTM</span>
              <span style={{fontSize: '36px', lineHeight: '1'}}>{tBondPriceInFTM ? tBondPriceInFTM : '-.----'}</span>
            </div>
            <div>
              <span style={{fontSize: '16px', marginRight: '0.25rem', color: '#f500fa'}}>USD</span>
              <span style={{fontSize: '16px'}}>${tBondPriceInDollars ? tBondPriceInDollars : '-.--'}</span>
            </div>
          </div>

          <div style={{display: 'flex', flexDirection: 'column', marginTop: '1rem'}}>
            <span style={{fontSize: '16px', fontWeight: 'bolder', color: '#f500fa'}}>Market Cap:</span>
            <span style={{fontSize: '24px', fontWeight: 'bolder'}}>$ {tBondCirculatingSupply && tBondPriceInDollars ? (tBondCirculatingSupply * tBondPriceInDollars).toFixed(2) :  '-.----'}</span>
          </div>

          <div style={{display: 'flex', flexDirection: 'column', marginTop: '1rem'}}>
            <span style={{fontSize: '16px', fontWeight: 'bolder', color: '#f500fa'}}>Circulating Supply:</span>
            <span style={{fontSize: '24px', fontWeight: 'bolder'}}>{tBondCirculatingSupply ? tBondCirculatingSupply : '-.--'}</span>
          </div>

          <div style={{display: 'flex', flexDirection: 'column', marginTop: '1rem'}}>
            <span style={{fontSize: '16px', fontWeight: 'bolder', color: '#f500fa'}}>Total Supply:</span>
            <span style={{fontSize: '24px', fontWeight: 'bolder'}}>{tBondTotalSupply ? tBondTotalSupply : '-.--'}</span>
          </div>
          
          <div style={{marginTop: '1rem'}}>
          <Button variant="contained" target="_blank" href={buyTBondAddress} className="buy-btn">
            BUY TBOND
          </Button>
          </div>
        </div>
        </MotionDiv>
      </div>
      <div>
      <MotionDiv style={{display: 'flex', flexDirection: 'column', columnGap: '1rem', color: 'white', alignItems: 'center'}} delay={0.3} direction={"UP"}>
        <span style={{fontSize: '2.25rem', maxWidth: '800px', textAlign: 'center'}}>The Game of Tomb Finance on Fantom Opera - Part of the Tomb Ecosystem.</span>
      </MotionDiv>
      <MotionDiv style={{display: 'flex', flexDirection: 'column', columnGap: '1rem', color: 'white', margin: '1rem 0rem', alignItems: 'center'}} delay={0.4} direction={"UP"}>
        <span style={{fontSize: '1.25rem', maxWidth: '800px', textAlign: 'center', color: '#b0b0b0', marginTop: '1.5rem'}}>
          Stake your TSHARE in the Masonry to earn TOMB rewards or provide liquidity on pairs and start earning today!
        </span>
        </MotionDiv>
        <MotionDiv style={{display: 'flex', flexDirection: 'column', columnGap: '1rem', color: 'white', margin: '1rem 0rem', alignItems: 'center'}} delay={0.4} direction={"UP"}>
        <div style={{marginTop: '2.75rem'}}>
          <a style={{marginRight: '1rem'}} className="buy-btn">
            FARM
          </a>
          <a style={{marginLeft: '1rem'}} className="buy-btn">
            STAKE
          </a>
        </div>
        </MotionDiv>
      </div>
    </Page>
  );
};

export default Home;

{/* <Grid container spacing={3}> */}

{/* TOMB */}
{/* <Grid item xs={12} sm={4}>
  <Card>
    <CardContent align="center" style={{ position: 'relative' }}>
      <h2>TOMB</h2>
      <Button
        onClick={() => {
          tombFinance.watchAssetInMetamask('TOMB');
        }}
        color="primary"
        variant="outlined"
        style={{ position: 'absolute', top: '10px', right: '10px' }}
      >
        +&nbsp;
        <img alt="metamask fox" style={{ width: '20px' }} src={MetamaskFox} />
      </Button>
      <Box mt={2}>
        <CardIcon>
          <TokenSymbol symbol="TOMB" />
        </CardIcon>
      </Box>
      Current Price
      <Box>
        <span style={{ fontSize: '30px' }}>{tombPriceInFTM ? tombPriceInFTM : '-.----'} FTM</span>
      </Box>
      <Box>
        <span style={{ fontSize: '16px', alignContent: 'flex-start' }}>
          ${tombPriceInDollars ? tombPriceInDollars : '-.--'}
        </span>
      </Box>
      <span style={{ fontSize: '12px' }}>
        Market Cap: ${(tombCirculatingSupply * tombPriceInDollars).toFixed(2)} <br />
        Circulating Supply: {tombCirculatingSupply} <br />
        Total Supply: {tombTotalSupply}
      </span>
    </CardContent>
  </Card>
</Grid> */}

{/* TSHARE */}
{/* <Grid item xs={12} sm={4}>
  <Card>
    <CardContent align="center" style={{ position: 'relative' }}>
      <h2>TSHARE</h2>
      <Button
        onClick={() => {
          tombFinance.watchAssetInMetamask('TSHARE');
        }}
        color="primary"
        variant="outlined"
        style={{ position: 'absolute', top: '10px', right: '10px' }}
      >
        +&nbsp;
        <img alt="metamask fox" style={{ width: '20px' }} src={MetamaskFox} />
      </Button>
      <Box mt={2}>
        <CardIcon>
          <TokenSymbol symbol="TSHARE" />
        </CardIcon>
      </Box>
      Current Price
      <Box>
        <span style={{ fontSize: '30px' }}>{tSharePriceInFTM ? tSharePriceInFTM : '-.----'} FTM</span>
      </Box>
      <Box>
        <span style={{ fontSize: '16px' }}>${tSharePriceInDollars ? tSharePriceInDollars : '-.--'}</span>
      </Box>
      <span style={{ fontSize: '12px' }}>
        Market Cap: ${(tShareCirculatingSupply * tSharePriceInDollars).toFixed(2)} <br />
        Circulating Supply: {tShareCirculatingSupply} <br />
        Total Supply: {tShareTotalSupply}
      </span>
    </CardContent>
  </Card>
</Grid> */}

{/* TBOND */}
{/* <Grid item xs={12} sm={4}>
  <Card>
    <CardContent align="center" style={{ position: 'relative' }}>
      <h2>TBOND</h2>
      <Button
        onClick={() => {
          tombFinance.watchAssetInMetamask('TBOND');
        }}
        color="primary"
        variant="outlined"
        style={{ position: 'absolute', top: '10px', right: '10px' }}
      >
        +&nbsp;
        <img alt="metamask fox" style={{ width: '20px' }} src={MetamaskFox} />
      </Button>
      <Box mt={2}>
        <CardIcon>
          <TokenSymbol symbol="TBOND" />
        </CardIcon>
      </Box>
      Current Price
      <Box>
        <span style={{ fontSize: '30px' }}>{tBondPriceInFTM ? tBondPriceInFTM : '-.----'} FTM</span>
      </Box>
      <Box>
        <span style={{ fontSize: '16px' }}>${tBondPriceInDollars ? tBondPriceInDollars : '-.--'}</span>
      </Box>
      <span style={{ fontSize: '12px' }}>
        Market Cap: ${(tBondCirculatingSupply * tBondPriceInDollars).toFixed(2)} <br />
        Circulating Supply: {tBondCirculatingSupply} <br />
        Total Supply: {tBondTotalSupply}
      </span>
    </CardContent>
  </Card>
</Grid> */}
{/* <Grid item xs={12} sm={6}>
  <Card>
    <CardContent align="center">
      <h2>TOMB-FTM Spooky LP</h2>
      <Box mt={2}>
        <CardIcon>
          <TokenSymbol symbol="TOMB-FTM-LP" />
        </CardIcon>
      </Box>
      <Box mt={2}>
        <Button color="primary" disabled={true} onClick={onPresentTombZap} variant="contained">
          Zap In
        </Button>
      </Box>
      <Box mt={2}>
        <span style={{ fontSize: '26px' }}>
          {tombLPStats?.tokenAmount ? tombLPStats?.tokenAmount : '-.--'} TOMB /{' '}
          {tombLPStats?.ftmAmount ? tombLPStats?.ftmAmount : '-.--'} FTM
        </span>
      </Box>
      <Box>${tombLPStats?.priceOfOne ? tombLPStats.priceOfOne : '-.--'}</Box>
      <span style={{ fontSize: '12px' }}>
        Liquidity: ${tombLPStats?.totalLiquidity ? tombLPStats.totalLiquidity : '-.--'} <br />
        Total supply: {tombLPStats?.totalSupply ? tombLPStats.totalSupply : '-.--'}
      </span>
    </CardContent>
  </Card>
</Grid> */}
{/* <Grid item xs={12} sm={6}>
  <Card>
    <CardContent align="center">
      <h2>TSHARE-FTM Spooky LP</h2>
      <Box mt={2}>
        <CardIcon>
          <TokenSymbol symbol="TSHARE-FTM-LP" />
        </CardIcon>
      </Box>
      <Box mt={2}>
        <Button color="primary" onClick={onPresentTshareZap} variant="contained">
          Zap In
        </Button>
      </Box>
      <Box mt={2}>
        <span style={{ fontSize: '26px' }}>
          {tshareLPStats?.tokenAmount ? tshareLPStats?.tokenAmount : '-.--'} TSHARE /{' '}
          {tshareLPStats?.ftmAmount ? tshareLPStats?.ftmAmount : '-.--'} FTM
        </span>
      </Box>
      <Box>${tshareLPStats?.priceOfOne ? tshareLPStats.priceOfOne : '-.--'}</Box>
      <span style={{ fontSize: '12px' }}>
        Liquidity: ${tshareLPStats?.totalLiquidity ? tshareLPStats.totalLiquidity : '-.--'}
        <br />
        Total supply: {tshareLPStats?.totalSupply ? tshareLPStats.totalSupply : '-.--'}
      </span>
    </CardContent>
  </Card>
</Grid> */}
{/* </Grid> */}