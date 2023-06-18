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
import { useNavigation } from '@react-navigation/native';

import { ArtworkItemApiProps } from '../../api/types';
import { HOME_DETAIL_ROUTE } from '../../navigators/routes';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { savedAsFavorite, removeAsFavorite } from '../../store/favoriteArtwork';

type ArtworkItemProps = PropsWithChildren<{
  item: ArtworkItemApiProps;
  imageBaseUrl: string | null;
}>;

function ArtworkItem({
  item,
  imageBaseUrl,
}: ArtworkItemProps): JSX.Element | null {
  const imgUrl = `${imageBaseUrl}/${item.image_id}/full/200,/0/default.jpg`;
  const navigation = useNavigation() as {
    navigate: (route: string, params: { id: number }) => void;
  };
  const favoritesArts = useAppSelector(state => state.favoritesArtwork);
  const dispatch = useAppDispatch();

  const onArtworkPress = () => {
    const params = { id: item.id };

    return navigation.navigate(HOME_DETAIL_ROUTE, params);
  };

  const saveAsFavorite = () => {
    return isFavorite
      ? dispatch(removeAsFavorite(item.id))
      : dispatch(savedAsFavorite(item.id));
  };

  const isFavorite = favoritesArts.some(art => art === item.id);

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
      <Button
        title={isFavorite ? 'Remove as Favorite' : 'Mark as Favorite'}
        onPress={saveAsFavorite}
      />
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
