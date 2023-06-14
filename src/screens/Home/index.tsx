import { PlusCircle } from 'phosphor-react-native';
import { useState } from 'react';
import { FlatList, Image, TextInput, TouchableOpacity, View } from 'react-native';
import { TaskInfo } from '../../components/TaskInfo';
import { TaskItem } from '../../components/TaskItem';
import { styles } from './styles';

import uuid from 'react-native-uuid';
import { EmptyTaskList } from '../../components/EmptyTaskList';


type Task = {
  id: string
  description: string
  completed: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [taskInput, setTaskInput] = useState('')

  const createdTasks = tasks.length
  const completedTasks = tasks.filter((task) => task.completed === true).length

  function handleCreateTask() {
    if (taskInput === ''){
      return
    }
    setTasks((prevState) => [...prevState, { id: uuid.v4() as string, description: taskInput, completed: false }])
    setTaskInput('')
  }

  function handleMarkAsCompleted(id: string) {
    setTasks((prevState) => prevState.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed
      }
      return task
    }))
  }

  function handleDelete(id: string) {
    setTasks((prevState) => prevState.filter((task) => task.id !== id))
  }


  return (
    <>
    <View style={styles.header}>
      <Image
        source={require('../../../assets/logo.png')}
        />
    </View>
    <View style={styles.content}>
      <View style={styles.inputWrapper}>
        <TextInput style={styles.input} 
          placeholder='Adicione uma nova tarefa' 
          placeholderTextColor={'#808080'} 
          onChangeText={setTaskInput}
          value={taskInput}
          />
        <TouchableOpacity style={styles.button} onPress={handleCreateTask}>
          <PlusCircle color='#fff' size={16} />
        </TouchableOpacity>
      </View>
      <View style={styles.tasksHeader}>
        <View>
          <TaskInfo title='Criadas' variant='blue' count={createdTasks}/>
        </View>
        <View>
          <TaskInfo title='Concluídas' variant='purple' count={completedTasks}/>
        </View>
      </View>
      <FlatList
        data={tasks} 
        keyExtractor={item => item.id} 
        renderItem={({item}) => (
        <TaskItem 
          id={item.id}
          description={item.description} 
          completed={item.completed}
          onDelete={handleDelete} 
          onMarkAsCompleted={handleMarkAsCompleted}
          />
        )} 
        ListEmptyComponent={() => (
          <EmptyTaskList />
        )}
        />
    </View>
    </>
  )
}