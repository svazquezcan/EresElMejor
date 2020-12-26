import PushNotification from 'react-native-push-notification';

const showNotification = ( title, message, channel ) => {
    PushNotification.localNotification({
        title: title,
        message: message,
        channelId: channel,
    })
}

const showNotification2 = ( title, message, channel, periocidad ) => {
    PushNotification.localNotificationSchedule({
        title: title,
        message: message,
        channelId: channel,
        date: new Date(Date.now() + periocidad * 86400000), // 86400000 son milisegundos que tiene un día, periocidad está en días. 
        repeatType: 'time',
        repeatTime: periocidad * 86400000
    })
    console.log("periocidad", periocidad * 86400000)   
}

const handleCancel = () => {
    PushNotification.cancelAllLocalNotifications();
}

export { showNotification, showNotification2, handleCancel };