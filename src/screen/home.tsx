import React, { useEffect, useState, useCallback } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import ArtworkItem from '../components/ArtworkItem';
import { getArtworksApi } from '../api';
import { ArtworkListApiResponseProps, ArtworkListProps } from '../api/types';

const EmptyText = (): JSX.Element => {
  return <Text> No Artworks to show! </Text>;
};

const Separator = (): JSX.Element => <View style={styles.separator} />;

function Home(): JSX.Element {
  const [artworksResponse, setArtworksResponse] =
    useState<ArtworkListApiResponseProps>({} as ArtworkListApiResponseProps);
  const [artworksData, setArtworksData] = useState<ArtworkListProps>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const refreshData = async () => {
    setRefreshing(true);
    try {
      const data = await getArtworksApi();
      setArtworksData(data?.data);
      setArtworksResponse(data);
    } catch (error) {
      setArtworksData([]);
    } finally {
      setRefreshing(false);
    }
  };

  const getDataRequest = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getArtworksApi();
      setArtworksData(data?.data);
      setArtworksResponse(data);
    } catch (error) {
      setArtworksData([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const getMoreDataRequest = useCallback(async () => {
    const {
      pagination: { total_pages, current_page },
    } = artworksResponse;

    if (loading || loadingMore || total_pages === current_page) {
      return;
    }

    const newPage = current_page + 1;
    try {
      setLoadingMore(true);
      const data = await getArtworksApi(newPage);
      setArtworksData([...artworksData, ...data?.data]);
      setArtworksResponse(data);
    } catch (error) {
      setArtworksData([]);
    } finally {
      setLoadingMore(false);
    }
  }, [artworksData, artworksResponse, loading, loadingMore]);

  const renderFooter = () => {
    if (loadingMore && !loading) {
      return <ActivityIndicator size="large" />;
    }
  };

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
    <FlatList
      data={artworksData}
      renderItem={props => (
        <ArtworkItem
          {...props}
          imageBaseUrl={artworksResponse?.config?.iiif_url}
        />
      )}
      onRefresh={refreshData}
      refreshing={refreshing}
      ListEmptyComponent={<EmptyText />}
      ItemSeparatorComponent={() => <Separator />}
      // ListHeaderComponent={<TextInput placeholder='enter an artwork you want to search'/>}
      ListFooterComponent={renderFooter}
      onEndReached={getMoreDataRequest}
      onEndReachedThreshold={0.1}
      contentContainerStyle={styles.listContainer}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
  },
  fullWrapper: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  separator: {
    borderWidth: 1,
    marginBottom: 12,
  },
});

export default Home;
