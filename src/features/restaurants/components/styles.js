import styled from 'styled-components/native';
import {Card} from 'react-native-paper';

export const RestaurantCard = styled(Card)`
  background-color: white;
`;
export const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
`;

export const Title = styled.Text`
  padding: 20px;
  color: ${props => props.theme.colors.ui.primary};
`;
