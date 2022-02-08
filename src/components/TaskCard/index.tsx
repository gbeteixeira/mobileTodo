import React, { useMemo } from "react";
import { format } from 'date-fns';
import { View, Text, Image, TouchableOpacity } from "react-native";

import { styles } from './styles';

import typeIcons from '../../utils/typeIcons';

interface ITaskCard {
  id: string,
  title: string,
  type: number,
  when: any,
  done?: boolean
}

interface PropsTask {
  item: ITaskCard
}

export default function TaskCard({ item }: PropsTask) {

  const date = useMemo(() => format(new Date(item.when), 'dd/MM/yyyy'), []);
  const hour = useMemo(() => format(new Date(item.when), 'HH:mm'), []);

  return (
    <TouchableOpacity style={[styles.card, item.done && styles.done]} >
      <View style={styles.cardLeft}>
        <Image source={typeIcons[item.type]} style={styles.typeActive} />
        <Text style={styles.cardTitle}>{item.title}</Text>
      </View>
      <View style={styles.cardRight}>
        <Text style={styles.cardDate}>{date}</Text>
        <Text style={styles.cardTime}>{hour}</Text>
      </View>
    </TouchableOpacity>
  );
}