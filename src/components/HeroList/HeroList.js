import React from "react";
import { FlatList } from "react-native";
import CustomText from "../CustomText";

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
