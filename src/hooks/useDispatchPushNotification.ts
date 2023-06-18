import notifee from '@notifee/react-native';

const useDispatchPushNotification = () => {
  const setupNotification = async () => {
    // Request permissions (required for iOS)
    await notifee.requestPermission();

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'modak-channel',
      name: 'Modak Channel',
    });

    return channelId;
  };

  const showLocalPushNotificationSaved = async (title: string) => {
    const channelId = await setupNotification();
    // Display a notification
    await notifee.displayNotification({
      title: `You mark as favorite ${title}`,
      body: `The artwork ${title} has been marked as your favorite`,
      android: {
        channelId,
        smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    });
  };
  const showLocalPushNotificationRemoved = async (title: string) => {
    const channelId = await setupNotification();

    // Display a notification
    await notifee.displayNotification({
      title: `You remove as favorite ${title}`,
      body: `The artwork ${title} has been removed from your favorites`,
      android: {
        channelId,
        smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    });
  };

  return { showLocalPushNotificationSaved, showLocalPushNotificationRemoved };
};

export default useDispatchPushNotification;
