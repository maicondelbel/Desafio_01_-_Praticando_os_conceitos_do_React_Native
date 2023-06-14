import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  taskItemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#262626',
    padding: 12,
    borderRadius: 8,
    borderColor: '#333333',
    borderWidth: 1,
    marginBottom: 8,
  },
  checkButton: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  deleteButton: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center'
  },
  normalText: {
    flex: 1,
    color: '#F2F2F2',
    fontSize: 14,
    lineHeight: 19.6,
  },
  completedText: {
    flex: 1,
    color: '#808080',
    fontSize: 14,
    lineHeight: 19.6,
    textDecorationLine: 'line-through'
  }
})