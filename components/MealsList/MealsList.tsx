import { View, FlatList, StyleSheet } from "react-native";
import Meal from "../../models/meal";
import MealItem from "./MealItem";

interface MealsListProps {
  items: Meal[];
}

function renderMealItem(itemData: any) {
  return <MealItem item={itemData.item} />;
}
export default function MealsList({ items }: MealsListProps) {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
