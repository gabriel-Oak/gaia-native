import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import HomePage from './home/';
import MenuIcon from '../../shared/assets/menu.svg';
import { clearSession, getSession } from '../../shared/utils/auth';
import { IconButton } from '../../shared/theme/buttons';
import { connect } from "react-redux";

const MainRoutes = createAppContainer(
  createDrawerNavigator(
    {
      Home: HomePage
    },
    {
      drawerBackgroundColor: '#303030'
    }
  )
);

class MainRouter extends Component {
  constructor(props) {
    super(props);
    this.fethUser = this.fethUser.bind(this);
    this.fethUser(props);
  }

  async fethUser(props) {
    const session = await getSession();

    if (!session || session.expired) {
      return props.navigation.navigate('Auth');
    }
  }

  render() {
    const { title } = this.props;
    console.log(MainRoutes.router.getActionCreators().openDrawer());

    return (
      <MainRoutes />
    );
  }
}

const mapStateToProps = state => {
  const { mainReducer } = state;
  return mainReducer;
}

export default connect(mapStateToProps)(MainRouter);