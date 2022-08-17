import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useParams, useHistory } from 'react-router-dom';
import { useWallet } from 'use-wallet';
import { makeStyles } from '@material-ui/core/styles';
import {IoChevronBackOutline} from 'react-icons/io5';
import { Box, Button, Card, CardContent, Typography, Grid } from '@material-ui/core';
import PageHeader from '../../components/PageHeader';
import Spacer from '../../components/Spacer';
import UnlockWallet from '../../components/UnlockWallet';
import Harvest from './components/Harvest';
import Stake from './components/Stake';
import useBank from '../../hooks/useBank';
import useStatsForPool from '../../hooks/useStatsForPool';
import useRedeem from '../../hooks/useRedeem';
import { Bank as BankEntity } from '../../tomb-finance';
import useTombFinance from '../../hooks/useTombFinance';
import MotionDiv from '../../components/MotionDiv/MotionDiv';

const useStyles = makeStyles((theme) => ({
  gridItem: {
    height: '100%',
    [theme.breakpoints.up('md')]: {
      height: '90px',
    },
  },
}));

const Bank: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0));
  const classes = useStyles();
  const { bankId } = useParams();
  const bank = useBank(bankId);
  const history = useHistory();
  const { account } = useWallet();
  const { onRedeem } = useRedeem(bank);
  const statsOnPool = useStatsForPool(bank);
  return account && bank ? (
    <>
    <MotionDiv delay={0.1} direction={"UP"}>
    <div style={{display: 'flex', justifyContent: 'center', marginRight: '120px'}}>

      <div onClick={() => history.push("/app/cemetery")} style={{height: '25px', marginTop: '50px', display: 'flex'}} className='buy-btn'><IoChevronBackOutline size={25}/><span style={{lineHeight: '1.6', marginLeft: '16px', paddingRight: '6px'}}>Back</span></div>
      <PageHeader
        
        icon="🏦"
        subtitle={`Deposit ${bank?.depositTokenName} and earn ${bank?.earnTokenName}`}
        title={bank?.name}
      />
      </div>

      </MotionDiv>

      <Box>
      <MotionDiv delay={0.1} direction={"UP"}>
        <Grid container justify="center" spacing={3} style={{ marginBottom: '50px' }}>
          <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
            <Card className={classes.gridItem}>
              <CardContent style={{ textAlign: 'center' }}>
                <Typography>APR</Typography>
                <Typography>{bank.closedForStaking ? '0.00' : statsOnPool?.yearlyAPR}%</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
            <Card className={classes.gridItem}>
              <CardContent style={{ textAlign: 'center' }}>
                <Typography>Daily APR</Typography>
                <Typography>{bank.closedForStaking ? '0.00' : statsOnPool?.dailyAPR}%</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
            <Card className={classes.gridItem}>
              <CardContent style={{ textAlign: 'center' }}>
                <Typography>TVL</Typography>
                <Typography>${statsOnPool?.TVL}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        </MotionDiv>
      </Box>
      <Box mt={5}>
        <StyledBank>
          <StyledCardsWrapper>
            <StyledCardWrapper>
              <MotionDiv delay={0.1} direction={"UP"}>
                <Harvest bank={bank} />
              </MotionDiv>
            </StyledCardWrapper>
            <Spacer />
            <StyledCardWrapper>{<MotionDiv delay={0.1} direction={"UP"}><Stake bank={bank} /></MotionDiv>}</StyledCardWrapper>
          </StyledCardsWrapper>
          <Spacer size="lg" />
          <MotionDiv delay={0.4} direction={"UP"}>
          {bank.depositTokenName.includes('LP') && <LPTokenHelpText bank={bank} />}
          </MotionDiv>
          <Spacer size="lg" />
          <div>
          <MotionDiv delay={0.4} direction={"UP"}>
            <Button className={"buy-btn"} onClick={onRedeem} color="primary" variant="contained">
              Claim & Withdraw
            </Button>
            </MotionDiv>
          </div>
          <Spacer size="lg" />
        </StyledBank>
      </Box>
    </>
  ) : !bank ? (
    <BankNotFound />
  ) : (
    <UnlockWallet />
  );
};

const LPTokenHelpText: React.FC<{ bank: BankEntity }> = ({ bank }) => {
  const tombFinance = useTombFinance();
  const tombAddr = tombFinance.TOMB.address;
  const tshareAddr = tombFinance.TSHARE.address;

  let pairName: string;
  let uniswapUrl: string;
  if (bank.depositTokenName.includes('TOMB')) {
    pairName = 'TOMB-FTM pair';
    uniswapUrl = 'https://spookyswap.finance/add/FTM/' + tombAddr;
  } else {
    pairName = 'TSHARE-FTM pair';
    uniswapUrl = 'https://spookyswap.finance/add/FTM/' + tshareAddr;
  }
  return (
    <Card>
      <CardContent>
        <StyledLink href={uniswapUrl} target="_blank">
          {`👻 Provide liquidity for ${pairName} now on SpookySwap 👻`}
        </StyledLink>
      </CardContent>
    </Card>
  );
};

const BankNotFound = () => {
  return (
    <Center>
      <PageHeader icon="🏚" title="Not Found" subtitle="You've hit a bank just robbed by unicorns." />
    </Center>
  );
};

const StyledBank = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledLink = styled.a`
  font-weight: 700;
  text-decoration: none;
  color: ${(props) => props.theme.color.primary.main};
`;

const StyledCardsWrapper = styled.div`
  display: flex;
  width: 600px;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`;

const StyledCardWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Center = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default Bank;
