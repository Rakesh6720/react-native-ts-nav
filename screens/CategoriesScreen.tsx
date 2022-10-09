import { FlatList, Text } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

function renderCategoryItem(itemData: any) {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
}

export default function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(category) => category.id + new Date()}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}
