import React, {useState} from 'react';
import {
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Platform,
  FlatList,
} from 'react-native';
import { Button } from './components/Button';
import { SkillCard } from './components/SkillCard';

interface SkillData {
  id: string;
  name: string;
}


export default function Home() {
  const [newSkill, setNewSkill ] =  useState('');
  const [mySkills, setMySkills ] =  useState<SkillData[]>([]);

  function handleAddSkill() {
    const isSkillInList = mySkills.find(skill => skill.name === newSkill)
    if  (isSkillInList || newSkill === '') return

    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }

    setMySkills(oldState => [
      ...oldState,
      data
    ])
    setNewSkill('')
  }

  function handleRemoveSkill(skillName: string) {
     const skills = mySkills.filter((skill) => skill.name !== skillName)

     setMySkills(skills)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome, Gustavo
      </Text>
      <TextInput 
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
        value={newSkill}
      />

       <Button onPress={handleAddSkill} text="Add" />

      <Text style={[styles.title, {marginVertical: 30}]}>
        My Skills
      </Text>

      <FlatList 
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <SkillCard 
            skill={item.name} 
            onPress={() => handleRemoveSkill(item.name)}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70,
  },

  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },

  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7
  },
  button: {
    backgroundColor: '#a370f7',
    padding: 15, 
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: 'bold'
  },
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