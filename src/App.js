import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import Views from './views';
import { Route, Switch } from 'react-router-dom';
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import { THEME_CONFIG } from './configs/AppConfig';
import LandingsPage from './views/landingspage/landingspage';
import { StrapiServiceProvider } from 'services/StrapiService';

const themes = {
  dark: `${process.env.PUBLIC_URL}/css/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/css/light-theme.css`,
};

function App() {
  return (
    <StrapiServiceProvider>
      <div className="App">
        <Provider store={store}>
          <ThemeSwitcherProvider themeMap={themes} defaultTheme={THEME_CONFIG.currentTheme} insertionPoint="styles-insertion-point">
            <Router>
              <Switch>
                <Route path="/App" component={Views}/>
                <Route path="/" component={LandingsPage}/>
              </Switch>
            </Router>
          </ThemeSwitcherProvider>
        </Provider>
      </div>
    </StrapiServiceProvider>
  );
}

export default App;
