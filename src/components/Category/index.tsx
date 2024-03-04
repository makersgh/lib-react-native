import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Container, List } from "lib_components";

interface CategoryProps {
  data: any[]
}
const Categories = (props: CategoryProps) => {
  return (
    <Container>
      <List
      data={props.data}
      />
            {/* <FlatList
        data={shops}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Card
            title={item.name}
            // image={item.image}
            onPress={handleSelectShop(item)}
          />
        )}
      /> */}
    </Container>
  );
};

const styles = StyleSheet.create({
  categories: {
    backgroundColor:  'red',
    flex: 1,
    width: "100%",
    height: 812,
  },
});

export default Categories;
