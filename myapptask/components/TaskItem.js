import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native";
const TaskItem = ({ task, handleDelete }) => {
  const navigation = useNavigation()

  return (
    <View style={style.itemContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("TaskScreen", { id:task.id })}>
        <Text style={style.itemTitle}>{task.title}</Text>
        <Text style={style.itemTitle}>{task.description}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ backgroundColor: "#ee5253", padding: 7, borderRadius: 6 }}
        onPress={() => handleDelete(task.id)}
      >
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#333333",
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemTitle: {
    color: "#ffffff",
  },
})

export default TaskItem
