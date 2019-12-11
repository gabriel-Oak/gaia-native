import React, { Component } from 'react';
import axios from 'axios';

import { Button, Snackbar } from 'react-native-paper';
import { Container } from './styles';
import AuthForm from './form';
import { api } from '../../enviroments/enviroments';

import { setSession, getSession } from '../../shared/utils/auth';
import resolveError from '../../shared/utils/resolveError';

export default class AuthPage extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { loading: true };
    this.restoreSession(props);
  }

  async handleSubmit(form) {
    try {
      this.setState({ loading: true });

      const { data: { token, user } } = await axios.post(`${api.user}/${form.user}`, form);
      await setSession(token);
      this.props.navigation.navigate('Main');

    } catch (e) {
      this.setState({
        loading: false,
        error: resolveError(e).message
      });
    }
  }

  async restoreSession(props) {
    const session = await getSession();
        
    if (session && !session.expired) {
      return props.navigation.navigate('Main');
    }
    return this.setState({ loading: false });
  }

  render() {
    const { loading, error } = this.state;

    return (
      <Container>
        <AuthForm
          onSubmit={this.handleSubmit}
          loading={loading}
        />

        <Snackbar
          visible={error}
          onDismiss={() => this.setState({
            ...this.state,
            error: null
          })}
          action={{
            label: 'Fechar',
            onPress: () => this.setState({
              ...this.state,
              error: null
            }),
          }}
        >
          {error}
        </Snackbar>
      </Container>
    );
  }
}
