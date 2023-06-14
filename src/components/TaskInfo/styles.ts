import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  taskInfoWrapper: {
    flexDirection: 'row',
    gap: 8,
  },
  blue: {
    fontWeight: 'bold',
    color: '#4EA8DE'
  },
  purple: {
    fontWeight: 'bold',
    color: '#8284FA'
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: '#333333',
    borderRadius: 9999,
    fontWeight: 'bold',
    color: '#D9D9D9'
  }
})