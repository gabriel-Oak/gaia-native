import React from 'react';

import { Card } from 'react-native-paper';
import { CardActions, FullButton, Input } from './styles';

export const authFormState = props => {
  const [user, setUser] = React.useState();
  const [password, setPassword] = React.useState();
  const loading = props.loading;

  const form = {
    user,
    senha: password
  };

  return {
    user: {
      value: user,
      onChangeText: text => setUser(text)
    },
    password: {
      value: password,
      onChangeText: text => setPassword(text)
    },
    button: {
      loading: props.loading,
      onPress: () => props.onSubmit(form)
    },
    loading
  };
}

const AuthForm = props => {
  const { user, password, button, loading } = authFormState(props);

  return (
    <Card>

      <Card.Title title="Login" />

      <Card.Content>
        <Input
          label='Usuário'
          mode='outlined'
          autoCapitalize='none'
          disabled={loading}
          {...user}
        />

        <Input
          label='Senha'
          mode='outlined'
          secureTextEntry
          autoCapitalize='none'
          disabled={loading}
          {...password}
        />
      </Card.Content>

      <CardActions >
        <FullButton
          mode='contained'
          loading={loading}
          disabled={loading}
          {...button}
        >
          Entrar
        </FullButton>
      </CardActions>

    </Card>
  );
}
export default AuthForm;
