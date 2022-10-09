import { FlatList, Text } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import Category from "../models/category";

interface CategoriesScreenProps {
  categories: Category[];
}

function renderCategoryItem(itemData: any) {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
}

export default function CategoriesScreen({
  categories,
}: CategoriesScreenProps) {
  return (
    <FlatList
      data={categories}
      keyExtractor={(category) => category.id + new Date()}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}
