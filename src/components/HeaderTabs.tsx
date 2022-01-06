import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export type HeaderButtonProps = {
  text: string;
  textColor: string;
  backgroundText: string;
  activeTab: string;
  setActiveTab: () => void;
};

function HeaderTabs() {
  const [activeTab, setActiveTab] = useState<string>('Delivery');
  return (
    <View style={styles.container}>
      <HeaderButton
        text="Delivery"
        textColor="white"
        backgroundColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        textColor="black"
        backgroundColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const HeaderButton: React.FC<HeaderButtonProps> = ({
  text,
  textColor,
  backgroundColor,
  activeTab,
  setActiveTab,
}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => setActiveTab(text)}
        style={[
          styles.button,
          {backgroundColor: activeTab === text ? 'black' : 'white'},
        ]}>
        <Text
          style={[
            styles.text,
            {color: activeTab === text ? 'white' : 'black'},
          ]}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderTabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
  text: {
    fontSize: 15,
    fontWeight: '900',
  },
});
