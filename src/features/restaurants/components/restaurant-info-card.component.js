import React from 'react';
import styled from 'styled-components/native';
import { Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

const RestaurantCard = styled(Card)`
   backgroundcolor: 'white';
`;

const RestaurantCardCover = styled(Card.Cover)`
   padding: 16px;
   background-color: white;
`;

const Title = styled.Text`
   font-family: ${(props) => props.theme.fonts.body}
   padding: 16px;
   color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
   const {
      name = 'Some Restaurant',
      icon,
      photos = [
         'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
      ],
      address = '100 some random street',
      isOpenNow = true,
      rating = 4,
      isClosedTemporarily,
   } = restaurant;

   return (
      <RestaurantCard elevation={5}>
         <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
         <Title>{name}</Title>
      </RestaurantCard>
   );
};
