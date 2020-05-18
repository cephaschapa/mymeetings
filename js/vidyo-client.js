var vidyoConnector;
function onVidyoClientLoaded(status) {
  console.log("VidyoClient load state " + status.state);
  if (status.state == "READY") {
    VC.CreateVidyoConnector({
      viewId: "renderer",
      viewStyle: "VIDYO_CONNECTORVIEWSTYLE_Default",
      remoteParticipants: 16,
      logFileFilter: "error",
      logFileName: "",
      userData: "",
    })
      .then(function (vc) {
        console.log("Create Success");
        vidyoConnector = vc;
      })
      .catch(function (error) {
        console.log("Create failed" + error);
      });
  }
}
function joinCall() {
  vidyoConnector.Connect({
    host: "prod.vidyo.io",
    token:
      "cHJvdmlzaW9uAHVzZXIxQDhjN2EwNC52aWR5by5pbwA2Mzc1NjUzODEyMAAAYTgxM2Q1M2VlMWYyOTk3ODgyMTlmMTJlZjcyN2VkYmIwM2RjY2RmZDhmYzc2NGI2ZGJhN2JhYjBjMmYyYTdjYzMzYjJjYmI0MTNmZjBkNjU2Y2FjYWUxNjg1NzEwNjc1",
    displayName: "Cephas",
    resourceId: "demoRoom",
    onSuccess: function () {
      console.log("Connected!! YAY!!");
    },
    onFailure: function (reason) {
      console.error("connection failed");
    },
    onDisconnected: function (reason) {
      console.log("Disconnected - " + reason);
    },
  });
}
