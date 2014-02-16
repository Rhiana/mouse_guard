// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require leaflet
//= require_tree .

$(function () {

	var map = L.map('map')

	L.tileLayer('/mouse_guard_tiles/{z}/{y}/{x}.png', {
	          attribution: 'Jykke ref: http://www.cartographersguild.com/finished-maps/11075-mouse-guard-map-facelift.html',
	          maxZoom: 4,
	          minZoom: 2
	      }).addTo(map)

	map.setView([0, 0], 2)
	map.setMaxBounds(map.getBounds())


	var lat = $("#edit_area_1 #area_lat").val()
	var lon = $("#edit_area_1 #area_long").val()
	var name = $("#edit_area_1 #area_name").val()

	marker_lh = L.marker([lat, lon]).addTo(map)
	//marker_lh.bindPopup(name)

	marker_lh.on('click', function() {
		$(".area_form").show()
		$(".new_area_form").hide()
	})

	marker_br = L.marker([-0.54931, -15.29297]).addTo(map)
	marker_br.bindPopup('Blackrock')

	function onMapClick(e) {
	    alert("You clicked the map at " + e.latlng);
	}

	map.on('click', onMapClick);

});

