import React, { lazy, Suspense } from "react";
import { Routes, Route, Redirect } from "react-router-dom";
import Loading from '../../components/shared-components/Loading';
import { APP_PREFIX_PATH } from '../../configs/AppConfig'

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content"/>}>
      {/* <Routes> */}
        <Route path={`${APP_PREFIX_PATH}/home`} element={lazy(() => import(`./home`))} />
        <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/home`} />
      {/* </Routes> */}
    </Suspense>
  )
}

export default React.memo(AppViews);