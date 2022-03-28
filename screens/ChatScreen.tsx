import { FlatList, StyleSheet } from "react-native";
import ChatListItem from "../components/ChatListItem/ChatListItem";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import ChatRooms from "../data/ChatRooms";

export default function ChatScreen({
  navigation,
}: RootTabScreenProps<"Chats">) {
  return (
    <View style={styles.container}>
      <FlatList
        data={ChatRooms}
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
  },
});
