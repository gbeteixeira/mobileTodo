import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';

import { styles } from './styles';
import { theme } from '../../Theme';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TaskCard from '../../components/TaskCard';

import api from '../../services/api';

interface ITask {
  id: string,
  title: string,
  type: number,
  when: any,
  done: boolean,
}

export default function Home() {
  const [filter, setFilter] = useState('all');
  const [tasks, setTasks] = useState([]);
  const [load, setLoad] = useState(false);

  async function loadTasks() {
    setLoad(true);
    await api.get(`task/filter/${filter}/11:11:11:11:11:11`)
      .then((response: any) => {
        setTasks(response.data);
        setLoad(false);
      })
  }

  async function Notification() {
    setFilter('late');
  }

  useEffect(() => {
    loadTasks();
  }, [filter]);

  return (
    <View style={styles.container}>

      <Header showBack={false} pressNotification={Notification} />

      <View style={styles.filter}>
        <TouchableOpacity onPress={() => setFilter('all')}>
          <Text style={filter === 'all' ? styles.filterTextActived : styles.filterTextInatived}>Todos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilter('today')}>
          <Text style={filter === 'today' ? styles.filterTextActived : styles.filterTextInatived}>Hoje</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilter('week')}>
          <Text style={filter === 'week' ? styles.filterTextActived : styles.filterTextInatived}>Semana</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilter('month')}>
          <Text style={filter === 'month' ? styles.filterTextActived : styles.filterTextInatived}>Mês</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilter('year')}>
          <Text style={filter === 'year' ? styles.filterTextActived : styles.filterTextInatived}>Ano</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.title}>
        <Text style={styles.titleText}>Tarefas</Text>
      </View>

      <ScrollView style={styles.content} contentContainerStyle={{ alignItems: 'center' }}>
        {
          load ?
            <ActivityIndicator color={theme.colors.primary} size={50} />
            :
            tasks.map((t: ITask, index: any) => (
              <TaskCard key={index} item={t} />
            ))
        }
      </ScrollView>

      <Footer icon={'add'} />
    </View>
  );
}
