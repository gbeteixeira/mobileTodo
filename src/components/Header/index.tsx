import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import api from '../../services/api';

//ICONES
import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';
import qrcode from '../../assets/qrcode.png';
import back from '../../assets/back.png';

import { styles } from './styles';

interface IHeader {
  showBack: boolean,
  pressNotification: any
}

export default function Header({ showBack, pressNotification }: IHeader) {
  const [lateCount, setLateCount] = useState(0 as number);

  async function late() {
    await api.get(`task/filter/late/`)
      .then((response: any) => {
        setLateCount(response.data.length)
      })
  }

  useEffect(() => {
    late()
  }, []);

  return (
    <View style={styles.header}>

      {
        showBack ?
          <TouchableOpacity style={styles.leftIcon}>
            <Image source={back} style={styles.leftIconImage} />
          </TouchableOpacity>
          :
          <TouchableOpacity style={styles.leftIcon}>
            <Image source={qrcode} style={styles.leftIconImage} />
          </TouchableOpacity>
      }
      <Image source={logo} style={styles.logo} />

      {
        !showBack && lateCount > 0 &&
        <TouchableOpacity style={styles.notification} onPress={pressNotification}>
          <Image source={bell} style={styles.notificationImage} />
          <View style={styles.circle} >
            <Text style={styles.notificationText}>{lateCount}</Text>
          </View>
        </TouchableOpacity>
      }

    </View>
  );
}
