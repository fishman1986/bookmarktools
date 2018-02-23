javascript: (function(w) {
  var container = $(
      "<div style='position:absolute;z-index:10000;border: solid 2px #98d4c3;border-radius: 5px;box-shadow: 2px 2px 20px 6px #8dcad0;background: #fdfffd;top: 50px;left:50px;padding: 20px;'><br/></div>"
    ).appendTo("body"),
    alarmCounter = $("<input id='alarm-timer' style='width:360px'>")
      .attr("placeholder", new Date())
      .prependTo(a)
      .keyup(function(e) {
        if (e.keyCode === 13) {
          w.countDown();
        }
      });
  $.each([5, 10, 15, 30], function() {
    container.append(
      "<a style='display:inline-block;margin:10px 20px;' href='javascript:setTime(" +
        this +
        ")'>" +
        this +
        " mins</a>"
    );
  });

  w.setTime = function(t) {
    alarmCounter.val(t * 60);
    w.countDown();
  };
  w.countDown = function() {
    w.alTimer = w.setTimeout(function() {
      if (alarmCounter.val() == 0) {
        $(
          '<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">'
        ).appendTo($("head"));
        container.append(
          $(
            '<br/><iframe style="width:360px;height:640px;border:none" src="http://m.kuwo.cn/?mid=MUSIC_4842407"></iframe>'
          )
        );
        w.clearTimeout(w.alTimer);
        container.click(function() {
          container.remove();
        });
      } else {
        alarmCounter.val(alarmCounter.val() - 1);
        w.countDown();
      }
    }, 1000);
  };
})(window);
