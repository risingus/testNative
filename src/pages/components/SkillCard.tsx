import React from 'react';
import {
  Text, 
  StyleSheet, 
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps  {
  skill: string;
}


export function SkillCard({skill, ...rest}: SkillCardProps) {
  return (
    <TouchableOpacity 
      style={styles.buttonSkill}
      {...rest}
    >
      <Text style={styles.textSkill}>
        {skill}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 5
  },
  textSkill: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  }
})