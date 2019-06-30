function init () {
  var myMap = new ymaps.Map("map", {
    center: [55.805148, 37.804359],
    zoom: 15,
    controls: ['zoomControl']
  });
  var myGeoObjects = [];
  myGeoObjects[0] = new ymaps.Placemark([55.804780, 37.804270],{
    clusterCaption: 'Skillbie',
  },{
    iconLayout: 'default#image',
    iconImageHref: 'img/icons/pin.png',
    iconImageSize: [120, 144],
    iconImageOffset: [-60, -144]
  });
  var clusterer = new ymaps.Clusterer({
    clusterDisableClickZoom: false,
    clusterOpenBalloonOnClick: false,
    clusterBalloonContentLayout: 'cluster#balloonCarousel',
    clusterBalloonPanelMaxMapArea: 0,
    clusterBalloonContentLayoutWidth: 300,
    clusterBalloonContentLayoutHeight: 200,
    clusterBalloonPagerSize: 5
  });
  clusterer.add(myGeoObjects);
  myMap.geoObjects.add(clusterer);
  myMap.behaviors.disable('scrollZoom');
}
$(document).ready(function(){
    var mapLoad = $('.test');
    var mapLoadTop = mapLoad.offset().top;
    $(window).bind('scroll', function(){
        var windowTop = $(this).scrollTop();
        if(windowTop > mapLoadTop){
            ymaps.ready(init);
            $(window).unbind('scroll');
        }
    });
});
$('.test-slider-items').slick({
    infinite: true,
    speed: 300,
    dots: true,
    dotsClass: "my-dots",
    arrows: false,
    slidesToShow: 1
});
