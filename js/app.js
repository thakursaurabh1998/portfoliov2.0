/*jshint esversion:6*/
// typed.js by Matt Boldt
// https://mattboldt.com/
const $typedText = $(".typed-element").html();
const elem = $(".typed");
let typed = new Typed("#ok", {
  strings: [$typedText],
  typeSpeed: 20,
  onStringTyped: () => $(".typed-cursor").remove()
  // loop: true,
});

// Github Activity feed by Casey Scarborough
// https://github.com/caseyscarborough/github-activity
GitHubActivity.feed({
  username: "thakursaurabh1998",
  // repository: "your-repo", // optional
  selector: "#feed",
  limit: 20 // optional
});

/* Smooth Scroll */
const sections = 5;
for (let i = 1; i <= sections; i++) {
  $(`#scroll${i}`).click(() => {
    $("html, body").animate(
      {
        scrollTop: $(`#scrollDiv${i}`).offset().top
      },
      500
    );
  });
}

$(`#scroll-rel`).click(() => {
  $("html, body").animate(
    {
      scrollTop: $(`#skills`).offset().top
    },
    500
  );
});

$(`.top-btn`).click(() => {
  $("html, body").animate(
    {
      scrollTop: $(`#top-page`).offset().top
    },
    700
  );
});

// touch swipe of the jquery carousel by Andrea Rufo
// https://codepen.io/andrearufo/pen/rVWpyE
$(document).ready(function() {
  // $('#fullpage').fullpage();
  $(".carousel").swipe({
    swipe: function(
      event,
      direction,
      distance,
      duration,
      fingerCount,
      fingerData
    ) {
      if (direction == "left") $(this).carousel("next");
      if (direction == "right") $(this).carousel("prev");
    },
    allowPageScroll: "vertical"
  });

  $(document).ready(function() {
    firebase = "https://mysite-d8b8c.firebaseio.com/browse.json";
    $.getJSON("http://jsonip.com/?callback=?", function(data) {
      fetch(firebase, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data.ip)
      });
    //   alert(data.ip);
    });
  });
});
