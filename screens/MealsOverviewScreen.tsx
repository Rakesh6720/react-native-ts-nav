import { StyleSheet, Text, View, FlatList } from "react-native";
import { useEffect } from "react";

import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealsList/MealItem";
import MealsList from "../components/MealsList/MealsList";

export default function MealsOverviewScreen({ route, navigation }) {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  useEffect(() => {
    const categoryTitle: string = CATEGORIES.find(
      (category) => category.id === categoryId
    )!.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  return <MealsList items={displayedMeals} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
