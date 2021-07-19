import React, { useState, useEffect } from "react"
import { View, Text, TextInput, StyleSheet, TouchableOpacity} from "react-native"

import Layout from "../components/Layout"
import { getTask, saveTask, updateTask } from "../api"


const TaskFormScreen = ({navigation, route}) => {
  const [task, setTask] = useState({
    title:'',
    description:''
  })

  const [editing, setEditing] = useState(false)
  
  useEffect(() => {
    if(route.params && route.params.id){
      navigation.setOptions({headerTitle: 'Updating a Task'});
      setEditing(true);

      (async () => {
        const task = await getTask(route.params.id)
        setTask({ title: task.title, description: task.description })
      })()
    }
  }, [])

  const handleSubmit = async () => {
    try {
       !editing ? await saveTask(task) : await updateTask(route.params.id,{...task})
    } catch (error) {
      console.error(error)
    }
    
    navigation.navigate("HomeScreen")
  }

  const handleChange = (name, value) => setTask({ ...task, [name]: value })

  return (
    <Layout>
      <TextInput
        style={styles.input}
        placeholder="Write Title"
        placeholderTextColor="#546574"
        onChangeText={(text) => handleChange("title", text)}
        value={task.title}
      />
      <TextInput
        style={styles.input}
        placeholder="Write Description"
        placeholderTextColor="#546574"
        onChangeText={(text) => handleChange("description", text)}
        value={task.description}
      />
      {!editing ? (
        <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Save Task</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.buttonUpdate} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Update Task</Text>
        </TouchableOpacity>
      )}
    </Layout>
  )
}

const styles = StyleSheet.create({
  input: {
    width: "90%",
    marginBottom: 7,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    height: 35,
    color: "#ffffff",
    borderColor: "#10ac84",
    padding: 4,
  },
  buttonSave: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    marginBottom: 5,
    backgroundColor: "#10ac84",
    width: "90%",
  },
  buttonUpdate: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 3,
    backgroundColor: "#e58e26",
    width: "90%",
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
  },
})

export default TaskFormScreen
