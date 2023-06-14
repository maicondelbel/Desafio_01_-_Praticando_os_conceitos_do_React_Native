import { Text, View } from 'react-native';
import { styles } from './styles';

type TaskInfoProps = {
  variant: 'blue' | 'purple'
  title: string
  count?: number
}

export function TaskInfo({title, count = 0, variant}: TaskInfoProps) {
  return (
    <View style={styles.taskInfoWrapper}>
      <Text style={ variant === 'blue' ? styles.blue : styles.purple}>{title}</Text>
      <Text style={styles.badge}>{count}</Text>
    </View>
  )
}