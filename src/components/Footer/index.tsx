import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from './styles';

//ICONES
import add from '../../assets/add.png';
import save from '../../assets/save.png';

interface IFooter {
  icon: string;
}

export default function Footer({ icon }: IFooter) {
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.botton}>
        <Image source={icon === 'add' ? add : save} style={styles.image} />
      </TouchableOpacity>

      <Text style={styles.text}>
        Organizando sua vida
      </Text>
    </View>
  );
}
