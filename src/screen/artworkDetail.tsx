import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { useRoute } from '@react-navigation/native';

import { getArtworkDetailsApi } from '../api';
import { ArtworkItemApiProps, ArtworkListApiResponseProps } from '../api/types';

function ArtworkDetail(): JSX.Element | null {
  const [artworksData, setArtworksData] = useState<ArtworkItemApiProps>(
    {} as ArtworkItemApiProps,
  );
  const [artworksResponse, setArtworksResponse] =
    useState<ArtworkListApiResponseProps>({} as ArtworkListApiResponseProps);
  const [loading, setLoading] = useState(true);
  const { id: artworkID } = useRoute()?.params as { id: string };

  const imgUrl = `${artworksResponse?.config?.iiif_url}/${artworksData.image_id}/full/1686,/0/default.png`;

  const getDataRequest = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getArtworkDetailsApi(artworkID);
      setArtworksData(data?.data);
      setArtworksResponse(data);
    } catch (error) {
      setArtworksData({} as ArtworkItemApiProps);
    } finally {
      setLoading(false);
    }
  }, [artworkID]);

  useEffect(() => {
    getDataRequest();
  }, [getDataRequest]);

  if (loading) {
    return (
      <View style={styles.fullWrapper}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionTitle}>{artworksData.title}</Text>
      <Image
        source={{
          uri: imgUrl,
        }}
        style={styles.artImage}
      />
      <Text style={styles.sectionDescription}>
        By: {artworksData.artist_title}
      </Text>
      <Text style={styles.body}>{artworksData.publication_history}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 8,
    alignSelf: 'flex-end',
  },
  cardContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  body: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: '400',
    marginBottom: 8,
  },
  fullWrapper: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  artImage: {
    width: '100%',
    height: 350,
  },
});

export default ArtworkDetail;
