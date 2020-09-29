import React from "react";
import { FlatList } from "react-native";
import CustomText from "../CustomText";

import HeroOption from "../HeroOption";

const HeroList = ({
  data,
  numColumns,
  scrollEnabled,
  action_type,
  opponents_channel
}) => {
  return (
    <FlatList
      data={data}
      numColumns={numColumns}
      scrollEnabled={scrollEnabled}
      contentContainerStyle={styles.contentContainerStyle}
      keyExtractor={(item, index) => item.id.toString()}
      renderItem={({ item }) => (
        <HeroOption
          pokemon_data={item}
          is_selected={item.is_selected}
          action_type={action_type}
          opponents_channel={opponents_channel}
        />
      )}
    />
  );
};

const styles = {
  contentContainerStyle: {
    alignItems: "stretch",
    backgroundColor: "#fff"
  }
};

export default HeroList;
