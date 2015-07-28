function onDeviceReady() {
  var pushNotification;
  // $('#logo').append(device.platform);
  /*Notificações*/
  try {
    pushNotification = window.plugins.pushNotification;
    if (device.platform == 'android' || device.platform == 'Android') {
      pushNotification.register(successHandler, errorHandler, {"senderID":"44644380243","ecb":"onNotificationGCM"});   // required!
    } else {
      pushNotification.register(tokenHandler, errorHandler, {"badge":"true","sound":"true","alert":"true","ecb":"onNotificationAPN"});  // required!
    }
  }catch(err) {
    txt="There was an error on this page.\n\n";
    txt+="Error description: " + err.message + "\n\n";
    //alert(txt);
  }
  // try{
  //  if(device.){

  //  }
  // }

  /*Fim Notificações*/

}
// handle APNS notifications for iOS
function onNotificationAPN(e){
    if (e.alert){
        // $("#logo").append('<li>push-notification: ' + e.alert + '</li>');
        // navigator.notification.alert(e.alert);
    }
    if (e.sound){
        var snd = new Media(e.sound);
        snd.play();
    }
    if (e.badge) {
        pushNotification.setApplicationIconBadgeNumber(successHandler, e.badge);
    }
}
// handle GCM notifications for Android
function onNotificationGCM(e) {
  switch( e.event ){
    case 'registered':
    if ( e.regid.length > 0 ){
      // $("#logo").append('<li>REGISTERED -> REGID:' + e.regid + "</li>");
      alert(e.regid);
      // $("#app-status-ul").append('<li>REGISTERED -> REGID:' + e.regid + "</li>");
      // Your GCM push server needs to know the regID before it can push to this device
      // here is where you might want to send it the regID for later use.
      console.log("regID = " + e.regid);
      $.ajax({
        url:'http://maxmeio.mine.nu/cnt/liquidanatal/2015/servidorpush/add.php?key='+e.regid+'&os=1',
        type:'GET',
        dataType:'json',
        error:function(jqXHR,text_status,strError){
          // alert("no connection");
        },
        timeout:60000,
        success:function(data){
          // alert("Save");
          // $("#app-status-ul").append('<li>response :' + data.success + "</li>");
        }
      });
    }
    break;
    case 'message':
      // if this flag is set, this notification happened while we were in the foreground.
      // you might want to play a sound to get the user's attention, throw up a dialog, etc.
      if (e.foreground){
        // if the notification contains a soundname, play it.
        var my_media = new Media("/android_asset/www/"+e.soundname);
        my_media.play();
      }
      break;
    case 'error':
      break;
    default:
      break;
  }
}
function tokenHandler (result) {
  // alert(result);
  $.ajax({
        url:'http://maxmeio.mine.nu/cnt/liquidanatal/2015/servidorpush/add.php?key='+result+'&os=2',
        type:'GET',
        dataType:'json',
        error:function(jqXHR,text_status,strError){
            console.log("no connection APN");
        },
        timeout:6000,
        success:function(data){
            // $("#logo").append('<li>response :' + data.success + "</li>");
            // alert(data.success);
        }
    });
  // $("#app-status-ul").append('<li>token: '+ result +'</li>');
  // Your iOS push server needs to know the token before it can push to this device
  // here is where you might want to send it the token for later use.
}
function successHandler (result) {
  console.log(result);
  // $("#logo").append('<li>success:'+ result +'</li>');
  // alert(result);
}
function errorHandler (error) {
  // alert(error);
  // $("#logo").append('<li>error:'+ error +'</li>');
}
document.addEventListener('deviceready', onDeviceReady, true);