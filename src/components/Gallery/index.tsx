import { GalleryProps } from './Gallery.type';
import React, { useCallback, useMemo, useState } from 'react';
import { TouchableOpacity, Image, FlatList, Dimensions } from 'react-native';
import PinchZoomView from 'react-native-pinch-zoom-view';
import styles from './styles';
import { Box, Icon, Loading } from 'lib_components';
import { theme } from 'lib_theme';
import { transformImageUrl } from 'lib_cloud';

const width = Dimensions.get('window').width;
export const Gallery: React.FC<GalleryProps> = ({ imagesUrls }) => {
  const [selectedImage, setSelectedImage] = useState(imagesUrls[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const thumbnailUrls = imagesUrls.map((url) => transformImageUrl(url, 100));
  const mainImageStyle = useMemo(() => (isLoading ? styles.hidden : styles.mainImage), [isLoading]);
  const goToNextImage = () => {
    const nextIndex = (currentIndex + 1) % imagesUrls.length;
    setSelectedImage(imagesUrls[nextIndex]);
    setCurrentIndex(nextIndex);
  };
  console.log('rerendering');
  const goToPreviousImage = () => {
    const previousIndex = (currentIndex - 1 + imagesUrls.length) % imagesUrls.length;
    setSelectedImage(imagesUrls[previousIndex]);
    setCurrentIndex(previousIndex);
  };

  const onImageLoadStart = useCallback(() => {
    console.log('Charlie');
    setIsLoading(true);
  }, []);
  const onImageLoadEnd = useCallback(() => {
    console.log('Charlie222');
    setIsLoading(false);
  }, []);
  const renderThumbnail = useCallback(
    ({ item, index }) => {
      return (
        <Box
          borderColor={'primary'}
          borderWidth={item === selectedImage ? 2 : 0}
          borderRadius={'m'}
        >
          <TouchableOpacity onPress={() => setSelectedImage(imagesUrls[index])}>
            <Image source={{ uri: item }} style={styles.thumbnail} />
          </TouchableOpacity>
        </Box>
      );
    },
    [selectedImage]
  );

  return (
    <Box flex={1}>
      <Box flex={1} justifyContent={'center'}>
        <Icon
          size={60}
          color={theme.colors.primary}
          style={styles.arrowLeft}
          name="angle-left"
          onPress={goToPreviousImage}
        />
        <>
          {isLoading && <Loading full />}
          <Image
            source={{ uri: transformImageUrl(selectedImage, width) }}
            style={mainImageStyle}
            // onError={() => setIsLoading(false)}
          />
        </>
        <Icon
          color={theme.colors.primary}
          size={60}
          style={styles.arrowRight}
          name="angle-right"
          onPress={goToNextImage}
        ></Icon>
      </Box>
      <Box margin={'m'}>
        <FlatList
          data={thumbnailUrls}
          renderItem={renderThumbnail}
          keyExtractor={(item) => String(item)}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </Box>
    </Box>
  );
};

export * from './Gallery.type';
