var ICONS = {
  ["error"]: '<i class="fas fa-times"></i>',
  ["success"]: '<i class="fas fa-check"></i>',
  ["info"]: '<i class="fas fa-info"></i>',
  ["warning"]: '<i class="fas fa-exclamation"></i>',
}

window.addEventListener('message', (event) => {
    const data = event.data;
  
    if (data.type === 'notification') {
      showNotification(data.options.message, data.options);
    }
  });

  function showNotification(message, options = {}) {
    const notification = $('<div>').addClass('notification');

    const position = options.position || 'top-right';
    const type = options.type || 'info';
  
    const progressBar = $('<div>').addClass('notification-progress-bar');
    progressBar.appendTo(notification);
    $('<i>').html(ICONS[type]).appendTo(notification)
  
    $('<p>').html(message).appendTo(notification);

    notification.addClass(`notification-${type}`);

    $(`.align-${position}`).append(notification);
  
    const timeout = options.timeout || 5000;
    const interval = 10;
    const increment = interval / timeout * 100;
  
    let currentWidth = 100;
    const progressBarInterval = setInterval(() => {
      currentWidth -= increment;
      progressBar.width(`${currentWidth}%`);
    }, interval);
  
    setTimeout(() => {
      clearInterval(progressBarInterval);
      notification.remove();
    }, timeout);
  }