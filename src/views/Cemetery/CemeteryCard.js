import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Card, CardActions, CardContent, Typography, Grid } from '@material-ui/core';
import useStatsForPool from '../../hooks/useStatsForPool';
import useRedeem from '../../hooks/useRedeem';
import TokenSymbol from '../../components/TokenSymbol';
import useHarvest from '../../hooks/useHarvest';
import { getDisplayBalance } from '../../utils/formatBalance';
import useTombStats from '../../hooks/useTombStats';
import useShareStats from '../../hooks/usetShareStats';
import useEarnings from '../../hooks/useEarnings';
import useStakedBalance from '../../hooks/useStakedBalance';

const CemeteryCard = ({ bank }) => {
  const earnings = useEarnings(bank.contract, bank.earnTokenName, bank.poolId);
  const staked = useStakedBalance(bank.contract, bank.poolId)
  const statsOnPool = useStatsForPool(bank);
  const { onRedeem } = useRedeem(bank);
  const { onReward } = useHarvest(bank);
  const tombStats = useTombStats();
  const tShareStats = useShareStats();

  const tokenName = bank.earnTokenName === 'TSHARE' ? 'TSHARE' : 'TOMB';
  const tokenStats = bank.earnTokenName === 'TSHARE' ? tShareStats : tombStats;
  const tokenPriceInDollars = useMemo(
    () => (tokenStats ? Number(tokenStats.priceInDollars).toFixed(2) : null),
    [tokenStats],
  );
  const earnedInDollars = (Number(tokenPriceInDollars) * Number(getDisplayBalance(earnings))).toFixed(2);
  const deposited = getDisplayBalance(staked, bank.depositToken.decimal)

  return (
    // <Grid className='bank-card' item xs={12} md={6} lg={6}>
      <div className='bank-card'>
      <Card style={{width: '100%', textAlign: 'center'}} variant="outlined">
        <CardContent>
          <Box style={{ position: 'relative' }}>
            <Box
              style={{
                position: 'absolute',
                right: '0px',
                top: '-5px',
                height: '48px',
                width: '48px',
                borderRadius: '40px',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              {/* <TokenSymbol size={32} symbol={bank.depositTokenName} /> */}
              
            </Box>
            <Typography variant="h5" color='white' component="h2">
              {bank.depositTokenName} <img width={25} height={25} src='https://tomb.com/static/media/TOMB.2425ac09.svg' />
            </Typography>
            {/* <Typography color="textSecondary">
              Deposit {bank.depositTokenName.toUpperCase()} Earn {` ${bank.earnTokenName}`}
            </Typography> */}
            <div style={{ marginTop: '0.5rem'}}>
              <span style={{fontSize: '20px', marginRight: '0.25rem', color: '#f500fa'}}>TVL</span>
              <span>${statsOnPool?.TVL ? statsOnPool.TVL : '--.--'}</span>
            </div>
            <div style={{display: 'flex', width: '100%', justifyContent: 'space-around', marginTop: '1rem'}}>
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <span style={{fontSize: '12px', marginRight: '0.25rem', color: '#f500fa'}}>APR</span>
                <span style={{fontSize: '16px'}}>{bank.closedForStaking ? '0.00' : statsOnPool?.yearlyAPR}%</span>
              </div>

              <div style={{display: 'flex', flexDirection: 'column'}}>
                <span style={{fontSize: '12px', marginRight: '0.25rem', color: '#f500fa'}}>Daily APR</span>
                <span style={{fontSize: '16px'}}>{bank.closedForStaking ? '0.00' : statsOnPool?.dailyAPR}%</span>
              </div>
              
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <span style={{fontSize: '12px', marginRight: '0.25rem', color: '#f500fa'}}>Deposited</span>
                <span style={{fontSize: '16px'}}>${deposited ? deposited : '--.--'}</span>
              </div>

              <div style={{display: 'flex', flexDirection: 'column'}}>
                <span style={{fontSize: '12px', marginRight: '0.25rem', color: '#f500fa'}}>Rewards</span>
                <span style={{fontSize: '16px'}}>${earnedInDollars ? earnedInDollars : '--.--'}</span>
              </div>

            </div>
          </Box>
        </CardContent>
        <CardActions style={{ justifyContent: 'center' }}>
          <Button color="primary" className="buy-btn" size="medium" variant="contained" component={Link} to={`/app/cemetery/${bank.contract}`}>
            View
          </Button>
          <Button onClick={onReward} className={earnings.eq(0) ? "buy-btn buy-btn-disabled" : "buy-btn"} size='medium' disabled={earnings.eq(0)} color="primary" variant="contained">
              Claim
            </Button>
            {/* <Button onClick={onRedeem} className="buy-btn" color="primary" size='medium' variant="contained">
            Claim
          </Button> */}
        </CardActions>
      </Card>
      </div>
  );
};

export default CemeteryCard;
