import {onlineManager, QueryClient} from '@tanstack/react-query';
import React, {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';
import ExercisesPage from './ExercisesPage';
import {createAsyncStoragePersister} from '@tanstack/query-async-storage-persister';
import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OfflineBanner from './OfflineBanner';

const queryClient = new QueryClient();

const persister = createAsyncStoragePersister({
  storage: AsyncStorage,
  throttleTime: 3000,
});

const App = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    return NetInfo.addEventListener(state => {
      const status = !!state.isConnected;
      setIsOnline(status);
      onlineManager.setOnline(status);
    });
  }, []);

  return (
    <PersistQueryClientProvider
      persistOptions={{persister}}
      client={queryClient}>
      {!isOnline && <OfflineBanner />}
      <ExercisesPage />
    </PersistQueryClientProvider>
  );
};

export default App;
