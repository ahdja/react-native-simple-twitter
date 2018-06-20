import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

/* npm 
import { Ionicons } from '@expo/vector-icons';
*/
/* client */
import styles from './styles';

export default class Header extends React.Component {
  static defaultProps = {
    headerColor: '#f7f7f7',
    style: null,
    onClose: () => { },
  }

  render() {
    return (
      <View style={[styles.container, { backgroundColor: this.props.headerColor }, this.props.style]}>
        <TouchableOpacity onPress={this.props.onClose} style={styles.closeButton}>
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
