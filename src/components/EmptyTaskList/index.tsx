import { Image, Text, View } from "react-native";
import { styles } from './style';


export function EmptyTaskList() {
  return (
    <View style={ styles.emptyListWrapper}>
      <Image source={require('../../../assets/clipboard.png')} />
      <View>
        <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={styles.subtitle}>Crie tarefas e organize seus itens a fazer</Text>
      </View>
    </View>
  )
}