
import React, { useMemo } from 'react';
import useBondStats from '../../hooks/useBondStats';
import useEagerConnect from '../../hooks/useEagerConnect';
import useTombStats from '../../hooks/useTombStats';
import usetShareStats from '../../hooks/usetShareStats';
import { tomb as tombTesting, tShare as tShareTesting, tBond as tBondTesting } from '../../tomb-finance/deployments/deployments.testing.json';
import { tomb as tombProd, tShare as tShareProd, tBond as tBondProd } from '../../tomb-finance/deployments/deployments.mainnet.json';
import MotionDiv from '../MotionDiv/MotionDiv';

const TokenPrices: React.FC = ({ children }) => {
  useEagerConnect();

  const tombStats = useTombStats();
  const tShareStats = usetShareStats();
  const tBondStats = useBondStats();


  const tombPriceInFTM = useMemo(() => (tombStats ? Number(tombStats.tokenInFtm).toFixed(4) : null), [tombStats]);
  const tSharePriceInFTM = useMemo(() => (tShareStats ? Number(tShareStats.tokenInFtm).toFixed(4) : null), [tShareStats]);
  const tBondPriceInFtm = useMemo(() => (tBondStats ? Number(tBondStats.tokenInFtm).toFixed(4) : null), [tBondStats]);


  return (
    <div style={{display: 'flex', justifyContent: 'center', color: 'white', columnGap: '1.5rem', marginBottom: '4rem'}}>
        <MotionDiv style={{display: 'flex', alignItems: 'center'}} delay={0} direction={"UP"}>
            <img width={25} height={25} src='https://tomb.com/static/media/TOMB.2425ac09.svg' />
            {tombPriceInFTM ? (
                <span style={{marginLeft: '0.5rem', fontWeight: 'bolder'}}>{tombPriceInFTM} FTM</span>
            ) : (
                <span style={{marginLeft: '0.5rem', fontWeight: 'bolder'}}>-.---- FTM</span>
            )}
        </MotionDiv>
        <MotionDiv style={{display: 'flex', alignItems: 'center'}} delay={0.1} direction={"UP"}>
            <img width={25} height={25} src='https://tomb.com/static/media/TOMB.2425ac09.svg' />
            {tSharePriceInFTM ? (
                <span style={{marginLeft: '0.5rem', fontWeight: 'bolder'}}>{tSharePriceInFTM} FTM</span>
            ) : (
                <span style={{marginLeft: '0.5rem', fontWeight: 'bolder'}}>-.---- FTM</span>
            )}
        </MotionDiv>
        <MotionDiv style={{display: 'flex', alignItems: 'center'}} delay={0.2} direction={"UP"}>

            <img width={25} height={25} src='https://tomb.com/static/media/TOMB.2425ac09.svg' />
            {tBondPriceInFtm ? (
                <span style={{marginLeft: '0.5rem', fontWeight: 'bolder'}}>{tBondPriceInFtm} FTM</span>
            ) : (
                <span style={{marginLeft: '0.5rem', fontWeight: 'bolder'}}>-.---- FTM</span>
            )}
        </MotionDiv>
    </div>
  );
};

export default TokenPrices;
