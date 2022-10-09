import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Meal from "../models/meal";

interface MealDetailsProps {
  item: Meal | undefined;
}
export default function MealDetails({ item }: MealDetailsProps) {
  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>{item!.duration}m</Text>
      <Text style={styles.detailItem}>{item!.complexity.toUpperCase()}</Text>
      <Text style={styles.detailItem}>{item!.affordability.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
