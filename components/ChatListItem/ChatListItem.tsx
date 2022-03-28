import * as React from "react";
import { View, Text, Image } from "react-native";
import { ChatRoom } from "../../types";
import { style } from "./styled";
import moment from "moment";

export type ChatListItemProps = {
  chatRoom: ChatRoom;
};

export default function ChatListItem(props: ChatListItemProps) {
  const { chatRoom } = props;
  const user = chatRoom.users[1];

  return (
    <View style={style.itemWrapper}>
      <Image source={{ uri: user.imageUri }} style={style.avatar} />
      <View style={style.itemContent}>
        <View style={style.itemHeader}>
          <Text style={style.name}>{user.name}</Text>
          <Text style={style.lastMessage}>
            {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
          </Text>
        </View>
        <Text style={style.lastMessage}>{chatRoom.lastMessage.content}</Text>
      </View>
    </View>
  );
}
