// @flow
import React, {useState} from 'react';
import {Text, View, StyleSheet, PixelRatio, Platform} from 'react-native';
import FastImage from 'react-native-fast-image';

const styles = StyleSheet.create({
  placeholder: {
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  avatarImage: {
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
    backgroundColor: 'white',
  },
  avatarText: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    borderColor: 'gray',
    borderWidth: 2,
  },
});

type Props = {
  uri?: String,
  text?: String,
  size?: Number,
};

const calculateBorderRadius = (avatarSize, ratio) => {
  let avatar = avatarSize;
  if (ratio > 2) {
    avatar = avatarSize + avatarSize * 0.5;
  }

  return avatar / ratio;
};

const calculateAvatarSizeStyles = avatarSize => ({
  height: avatarSize,
  width: avatarSize,
  ...Platform.select({
    ios: {
      borderRadius: calculateBorderRadius(avatarSize, PixelRatio.get()),
    },
    android: {
      borderRadius: avatarSize,
    },
  }),
});

const Avatar = (props: Props) => {
  const [loadError, setError] = useState(false);

  const {uri, text, size} = props;
  const calculateStyle = calculateAvatarSizeStyles(size);
  let component = <View style={[calculateStyle]} />;

  if (uri && !loadError) {
    component = (
      <FastImage
        style={calculateStyle}
        source={{
          uri: uri,
          priority: FastImage.priority.normal,
        }}
        onError={() => setError(true)}
      />
    );
  } else if (text) {
    component = (
      <View style={[calculateStyle, styles.avatarText]}>
        <Text numberOfLines={1} style={[styles.placeholder]}>
          {text}
        </Text>
      </View>
    );
  }

  return component;
};

Avatar.defaultProps = {
  size: 64,
  uri: '',
  text: '',
};

export default Avatar;
