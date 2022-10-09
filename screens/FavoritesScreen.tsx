import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

export default function FavoritesScreen() {
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View>
        <Text>You have no favorite meals yet.</Text>
      </View>
    );
  }
  return <MealsList items={favoriteMeals} />;
}
