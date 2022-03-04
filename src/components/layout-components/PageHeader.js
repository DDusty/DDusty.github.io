import React from 'react'
import AppBreadcrumb from '../../components/layout-components/AppBreadcrumb'; //../components/layout-components/AppBreadcrumb
import IntlMessage from '../../components/util-components/IntlMessage'; //../util-components/IntlMessage

export const PageHeader = ({ title, display }) => {
	return (
		display ? (
			<div className="app-page-header">
				<h3 className="mb-0 mr-3 font-weight-semibold">
					<IntlMessage id={title? title : 'home'}/>
				</h3>
				<AppBreadcrumb />
			</div>
		)
		: null
	)
}

export default PageHeader