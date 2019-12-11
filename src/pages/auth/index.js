import React, { Component } from 'react';
import axios from 'axios';

import { Container } from './styles';
import AuthForm from './form';
import { api } from '../../enviroments/enviroments';

import { setSession, getSession } from '../../shared/utils/auth';

export default class AuthPage extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(form) {
    try {
      const { data: { token, user } } = await axios.post(`${api.user}/${form.user}`, form);
      console.log(token);
      
      await setSession(token);
      this.props.navigation.navigate('Main');

    } catch (e) {
      console.log(e);
    } finally {
      console.log('finish');
    }
  }

  render() {   
    return (
      <Container>
        <AuthForm onSubmit={this.handleSubmit} />
      </Container>
    );
  }
}
