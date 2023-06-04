$(function () {
  $("#header_load").load("components/header.html");
  $("#home_load").load("components/home/home.html");
  $("#head_load").load("components/head.html");
  $("#category_load").load("components/home/category.html");
  $("#filter_load").load("components/home/filterClient.html");
  $("#footer_load").load("components/footer.html");
  $("#ads_load").load("components/home/addsSlider.html");
  $("#store_load").load("components/home/store.html");
  $("#offer_load").load("components/home/offers.html");

// ----------------------------stores--------------------------------------------
  $("#store_banner_load").load("components/store/store-slider.html");
  $("#filter_all_load").load("components/store/store-filter.html");
  $("#coupons_load").load("components/store/coupons.html");
  $("#deals_load").load("components/store/deals.html");
  $("#product_load").load("components/store/product.html");
  $("#exclusive_load").load("components/store/exclusive-coupons.html");
});
