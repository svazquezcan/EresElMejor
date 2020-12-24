import PushNotification from 'react-native-push-notification';

const showNotification = ( title, message, channel ) => {
    PushNotification.localNotificationSchedule({
        title: title,
        message: message,
        channelId: channel,
        date: new Date(Date.now() + 1 * 1000) //in 1 sec
    })
}

const showNotification2 = ( title, message, channel, periocidad ) => {
    PushNotification.localNotification({
        title: title,
        message: message,
        channelId: channel,
        repeatType: 'time', //miliseconds
        repeatTime: periocidad * 86400000 // 86400000 son milisegundos que tiene un día, periocidad está en días.    
    })
}

const handleCancel = () => {
    PushNotification.cancelAllLocalNotifications();
}

export { showNotification, showNotification2, handleCancel };