import styled from 'styled-components/native';
import { Card, Button, TextInput } from 'react-native-paper';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #303030;
`;

export const CardActions = styled(Card.Actions)`
  justify-content: flex-end;
  padding: 8px 16px;
`;

export const FullButton = styled(Button)`
  width: 100%;
`;

export const Input = styled(TextInput)`
  margin: 8px 0;
`;