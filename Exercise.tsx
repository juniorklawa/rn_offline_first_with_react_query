import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import {IExercise} from './fakeApi';

interface ExerciseProps {
  exercise: IExercise;
  onButtonPress: () => void;
}

const Exercise = ({exercise, onButtonPress}: ExerciseProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onButtonPress}
        style={[
          styles.button,
          {
            backgroundColor: exercise.isDone ? '#4caf50' : '#e0e0e0',
          },
        ]}>
        <Icon color={exercise.isDone ? '#fff' : '#000'} name="check" />
      </TouchableOpacity>
      <Text style={styles.text}>
        {exercise.title} - {exercise?.isNotSynced ? 'not synced' : 'synced'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginTop: 16,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    height: 48,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
  },
  text: {
    marginLeft: 16,
    fontSize: 16,
  },
});

export default Exercise;
