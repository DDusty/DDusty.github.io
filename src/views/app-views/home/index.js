import React from 'react'
import ChartWidget from '../../../components/shared-components/ChartWidget'; //../../components/shared-components/ChartWidget
import DataDisplayWidget from '../../../components/shared-components/DataDisplayWidget';
import StatisticWidget from '../../../components/shared-components/StatisticWidget';
import DemoFrame from '../../../components/util-components/DemoFrame';
import { Col, Row } from 'antd';

const Home = () => (
	<div>
		<Row gutter={[16, 16]}>
			<Col span={8}><StatisticWidget title={"Inkomen"} value={3289} status={3114} subtitle={"Deze maand"} /></Col>
			<Col span={8}><StatisticWidget title={"Aantal bestellingen"} value={19} status={-123} subtitle={"Deze maand"} /></Col>
		</Row>
		<ChartWidget />
	</div>
)

export default Home
