import { CheckCircle, Circle, Trash } from "phosphor-react-native";
import { Text, TouchableHighlight, View } from "react-native";
import { styles } from "./style";

type TaskItemProps = {
  id: string
  description: string
  completed: boolean
  onMarkAsCompleted: (id: string) => void
  onDelete: (id: string) => void
}

export function TaskItem({id, description, completed, onDelete, onMarkAsCompleted}: TaskItemProps) {
  return (
    <View style={styles.taskItemWrapper}>
      <TouchableHighlight style={styles.checkButton} onPress={() => onMarkAsCompleted(id)}>
        {completed ? (
          <CheckCircle color="#5E60CE" size={16} weight="fill" />
          ):(
          <Circle color="#4EA8DE" size={16}/>
        )}
      </TouchableHighlight >
      <Text style={completed ? styles.completedText : styles.normalText}>{description}</Text>
      <TouchableHighlight style={styles.deleteButton} onPress={() => onDelete(id)}>
        <Trash color="#808080" size={16}/>
      </TouchableHighlight >
    </View>
  )
}