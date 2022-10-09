import { FlatList, Text } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

export default function CategoriesScreen({ navigation }: any) {
  function renderCategoryItem(itemData: any) {
    function pressHandler() {
      navigation.navigate("MealsOverviewScreen", {
        categoryId: itemData.item.id,
      });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(category) => category.id + new Date()}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}
