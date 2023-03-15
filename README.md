# asd.asd Notification
A customizable and easy-to-use notification system for your FiveM server.

## Features
- Set notification positions: top-left, top-right, top-center, bottom-center, bottom-left, bottom-right
- Choose from notification types: info, success, error, warning

### Export Example
```
exports.asdasd_notification:SendNotification({
    message  = message,
    type     = type,
    timeout  = time,
    position = position
})
```

### Event Example
```
TriggerClientEvent("asdasd_notification:SendNotification", -1, {
    message  = message,
    type     = type,
    timeout  = time,
    position = position
})
```

## Installation
1. Download the latest release from the releases page.
2. Extract the files from the zip folder.
3. Place the asd_notification folder in your FiveM server's resource directory.
4. Add start asd_notification to your server.cfg file.
