import React, {useState} from 'react';
import {Searchbar} from 'react-native-paper';
import RetaurantInfoCard from '../components/restaurants-info-card.component';
import {SearchContainer, RestaurantList} from './restaurants.screen.styles';
import {Spacer} from '../../../components/spacer/spacer.component';
import {SafeArea} from '../../../components/utility/safe-area.component';

const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>

      <RestaurantList
        data={[
          {name: 1},
          {name: 2},
          {name: 3},
          {name: 4},
          {name: 5},
          {name: 6},
          {name: 7},
        ]}
        renderItem={() => (
          <>
            <Spacer position="bottom" size="large">
              <RetaurantInfoCard />
            </Spacer>
          </>
        )}
        keyExtractor={item => item.name}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;
