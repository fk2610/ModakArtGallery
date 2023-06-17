import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';

import { ArtworkItemApiProps } from '../../api/types';

type ArtworkItemProps = PropsWithChildren<{
  item: ArtworkItemApiProps;
  imageBaseUrl: string | null;
}>;

function ArtworkItem({
  item,
  imageBaseUrl,
}: ArtworkItemProps): JSX.Element | null {
  const imgUrl = `${imageBaseUrl}/${item.image_id}/full/200,/0/default.jpg`;

  const onArtworkPress = () => null;
  const saveAsFavorite = () => null;

  return (
    <TouchableOpacity onPress={onArtworkPress}>
      <Text style={styles.sectionTitle}>{item.title}</Text>
      <View style={styles.cardContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.sectionDescription}>
            {item.provenance_text?.slice(0, 100)}...
          </Text>
        </View>
        <Image
          source={{
            uri: imgUrl,
          }}
          style={styles.thumbnail}
        />
      </View>
      <Button title="Mark as Favorite" onPress={saveAsFavorite} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    marginRight: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  cardContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  thumbnail: { width: 150, height: 150 },
});

export default ArtworkItem;
