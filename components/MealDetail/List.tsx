import { Text, View, StyleSheet } from "react-native";

interface ListProps {
  data: any[];
}
export default function List({ data }: ListProps) {
  return data?.map((dataPoint) => (
    <View style={styles.listItem}>
      <Text style={styles.itemText} key={dataPoint}>
        {dataPoint}
      </Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#ccc",
  },
  itemText: {
    textAlign: "center",
  },
});
