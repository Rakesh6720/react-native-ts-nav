import {
  Image,
  Text,
  ScrollView,
  StyleSheet,
  View,
  Button,
} from "react-native";
import { useLayoutEffect } from "react";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import Meal from "../models/meal";
import IconButton from "../components/IconButton";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

interface MealDetailsScreenProps {
  route: any;
  navigation: any;
}

export default function MealDetailsScreen({
  route,
  navigation,
}: MealDetailsScreenProps) {
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const categoryId: string = route.params.id;

  const mealItem: Meal | undefined = MEALS.find(
    (meal) => meal.id === categoryId
  );

  const mealIsFavorite = favoriteMealIds.includes(categoryId);

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      dispatch(removeFavorite({ id: categoryId }));
    }
  }

  function headerButtonPressHandler() {
    console.log("Button Pressed");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon="star"
            color="#f9e076"
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);

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
