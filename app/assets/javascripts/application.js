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


	var lat1 = $("#edit_area_1 #area_lat").val()
	var lon1 = $("#edit_area_1 #area_long").val()
	var name1 = $("#edit_area_1 #area_name").val()

	marker_lh = L.marker([lat1, lon1]).addTo(map)
	//marker_lh.bindPopup(name1)

	marker_lh.on('click', function() {
		$("#edit_area_1, .area_form").show()
		$(".new_area_form, #edit_area_3").hide()
	})


	var lat2 = $("#edit_area_3 #area_lat").val()
	var lon2 = $("#edit_area_3 #area_long").val()
	var name2 = $("#edit_area_3 #area_name").val()

	marker_br = L.marker([lat2, lon2]).addTo(map)
	//marker_lh.bindPopup(name2)

	marker_br.on('click', function() {
		$("#edit_area_3").show()
		$(".new_area_form, #edit_area_1").hide()
	})

	function onMapClick(e) {
	    alert("You clicked the map at " + e.latlng);
	}

	map.on('click', onMapClick);

});

