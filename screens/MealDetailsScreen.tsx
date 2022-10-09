import { Image, Text, ScrollView, StyleSheet, View } from "react-native";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import Meal from "../models/meal";

interface MealDetailsScreenProps {
  route: any;
  navigation: any;
}

export default function MealDetailsScreen({
  route,
  navigation,
}: MealDetailsScreenProps) {
  const categoryId: string = route.params.id;
  const mealItem: Meal | undefined = MEALS.find(
    (meal) => meal.id === categoryId
  );
  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: mealItem!.imageUrl }} />
      <Text style={styles.title}>{mealItem!.title}</Text>
      <MealDetails item={mealItem} />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={mealItem!.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={mealItem!.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: { marginBottom: 32 },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
