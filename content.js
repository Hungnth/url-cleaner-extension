// Amazon URL Cleaner
function cleanAmazonURL() {
  function getProductId() {
    var m;
    m = document.location.href.match(/(?:.+\/)?dp\/([^/?]+)/);
    if (m) return m[1];
    m = document.location.href.match(/gp\/product\/([^/?]+)/);
    if (m) return m[1];
    m = document.location.href.match(/ASIN\/([^/?]+)/);
    if (m) return m[1];
  }

  var productId = getProductId();
  if (productId) {
    history.replaceState(
      {},
      document.title,
      "https://www.amazon.com/dp/" + productId
    );
  }
}

// Etsy URL Cleaner
function cleanEtsyURL() {
  var url = window.location.href;

  if (
    url.indexOf("?ref") !== -1 ||
    url.indexOf("?click_key") !== -1 ||
    url.indexOf("?ga_order") !== -1 ||
    url.indexOf("?ref=simple-shop-header") !== -1
  ) {
    var index = Math.max(
      url.indexOf("?ref"),
      url.indexOf("?click_key"),
      url.indexOf("?ga_order"),
      url.indexOf("?ref=simple-shop-header")
    );
    url = url.substring(0, index);
    window.history.pushState({}, "", url);
  }

  // if (url.indexOf("/il_fullxfull") !== -1) {
  //   return;
  // }

  // if (url.indexOf("/il_") !== -1) {
  //   var dotIndex = url.indexOf(".", url.indexOf("/il_"));
  //   url =
  //     url.substring(0, url.indexOf("/il_")) +
  //     "/il_fullxfull" +
  //     url.substring(dotIndex);
  //   window.location.href = url;
  // }
}

function etsy_img() {
  var url = window.location.href;

  if (url.indexOf("/il_fullxfull") !== -1) {
    return;
  }

  if (url.indexOf("/il_") !== -1) {
    var dotIndex = url.indexOf(".", url.indexOf("/il_"));
    url =
      url.substring(0, url.indexOf("/il_")) +
      "/il_fullxfull" +
      url.substring(dotIndex);
    window.location.href = url;
  }
}

// Determine which site we're on and run the appropriate cleaner
if (window.location.hostname.includes("amazon.com")) {
  cleanAmazonURL();
} else if (window.location.hostname.includes("etsy.com")) {
  cleanEtsyURL();
} else if (window.location.hostname.includes("i.etsystatic.com")) {
  etsy_img();
}
