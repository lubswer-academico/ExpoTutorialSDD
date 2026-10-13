import { ImageSourcePropType, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { EPN_THEME } from '../theme/epnTheme';

type Props = {
  imgSource: ImageSourcePropType;
  selectedImage?: string;
};

export default function ImageViewer({ imgSource, selectedImage }: Props) {

  const img = selectedImage ? { uri: selectedImage } : imgSource

  return <Image source={img} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 400,
    borderRadius: EPN_THEME.radius.md,
    borderWidth: 1,
    borderColor: EPN_THEME.colors.border,
    backgroundColor: EPN_THEME.colors.surface,
    shadowColor: EPN_THEME.colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
});
