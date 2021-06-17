// @flow
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, ActivityIndicator, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {fetchList, fetchPage} from '../../../redux/actions';
import ListItem from './components/ListItem';
import Divider from '../../../components/Divider';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
});

type Props = {
  isLoading?: Boolean,
  isLoadingPage?: Boolean,
  list?: Array<Object>,
  onLoad: () => void,
  loadPage: () => void,
  navigation: Object,
};

const Loader = () => (
  <View style={styles.loader}>
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
);

const ListScreen = (props: Props) => {
  const {list, isLoading, isLoadingPage, onLoad, loadPage, navigation} = props;

  useEffect(() => {
    onLoad();
  }, [onLoad]);

  const renderFooter = () => {
    return isLoadingPage && <ActivityIndicator size="large" color="#0000ff" />;
  };

  const openScreen = item => {
    navigation.navigate('user', {item});
  };

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <FlatList
          keyExtractor={item => item.id}
          data={list}
          extraData={list}
          onEndReachedThreshold={0.5}
          onEndReached={loadPage}
          renderItem={({item}) => (
            <ListItem item={item} onPress={() => openScreen(item)} />
          )}
          ItemSeparatorComponent={Divider}
          ListFooterComponent={renderFooter}
        />
      )}
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  list: state.list,
  isLoadingPage: state.isLoadingPage,
});

const mapDispatchToProps = dispatch => ({
  onLoad: () => {
    dispatch(fetchList());
  },
  loadPage: () => {
    dispatch(fetchPage());
  },
});

ListScreen.defaultProps = {
  isLoading: false,
  isLoadingPage: false,
  list: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);
