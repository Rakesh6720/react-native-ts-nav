import { Pressable, Text, View } from "react-native";

interface CategoryGridTileProps {
  title: string;
  color: string;
}

export default function CategoryGridTile({
  title,
  color,
}: CategoryGridTileProps) {
  return (
    <View>
      <Pressable>
        <Text>{title}</Text>
      </Pressable>
    </View>
  );
}
