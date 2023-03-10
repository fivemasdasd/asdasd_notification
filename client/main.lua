function SendNotification(options)
    SendNUIMessage({
        type = 'notification',
        options = options
    })
end

exports('SendNotification', SendNotification)
RegisterNetEvent("asdasd_notification:SendNotification", SendNotification)