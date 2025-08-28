jQuery("#js-drawer-icon").on("click", function(e) {
    e.preventDefault();
    jQuery("#js-drawer-icon").toggleClass("is-checked");
    jQuery("#js-drawer-content").toggleClass("is-checked");

    
});

jQuery(".js-accordion").on("click", function (e) {
    e.preventDefault();

    if (jQuery(this).parent().hasClass("is-open")) {
        jQuery(this).parent().removeClass("is-open");
        jQuery(this).next().slideUp();
    } else {
    jQuery(this).parent().addClass("is-open");
    jQuery(this).next().slideDown();
    
}

});

const swiper = new Swiper('#js-gallery-swiper', {

  spaceBetween: 82,
    // Optional parameters
 
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '#js-gallery-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '#js-gallery-prev',
      prevEl: '#js-gallery-next',
    },
  
    // And if we need scrollbar
 
  });

  jQuery(".js-modal-open").on("click",function(e) {
    e.preventDefault();

    jQuery("#js-about-modal")[0].showModal();
  });

  jQuery(".js-modal-close").on("click",function(e) {
    e.preventDefault();

    jQuery("#js-about-modal")[0].close();
  });

  jQuery('a[href^="#"]').on("click", function (e) {
    e.preventDefault(); // ← これが重要
  
    const speed = 300;
    const id = jQuery(this).attr("href");
    const target = jQuery("#" === id ? "html" : id);
  
    if (target.length) { // 要素があるか確認
      const position = target.offset().top;
  
      jQuery("html, body").animate(
        { scrollTop: position },
        speed,
        "swing"
      );
    }
  });

  jQuery('#js-drawer-content a[href^="#"]').on("click", function (e) {
    jQuery("#js-drawer-icon").removeClass("is-checked");
    jQuery("#js-drawer-content").removeClass("is-checked");
  });
  
  jQuery(window).on("scroll", function() {
    if (100 < jQuery(window).scrollTop()) {
      jQuery("#js-pagetop").addClass("is-show");
    } else {
      jQuery("#js-pagetop").removeClass("is-show");
    }
    });
  