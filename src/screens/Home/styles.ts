import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0D0D0D',
    height: 173
  },
  content: {
    backgroundColor: '#1A1A1A',
    flex: 1,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 24,
  },
  inputWrapper: {
    flexDirection: 'row',
    gap: 8,
    marginTop: -28
  },
  input: {
    padding: 16,
    backgroundColor: '#262626',
    color: '#F2F2F2',
    borderRadius: 8,
    flex: 1,
    height: 52
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#1E6F9F',
    borderRadius: 8,
    width: 52,
    height: 52
  },
  tasksHeader: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
})