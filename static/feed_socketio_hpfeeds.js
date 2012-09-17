var socket = io.connect('/');

socket.on('marker', function(data) {
  var lat1 = data.latitude,  lng1 = data.longitude,
      lat2 = data.latitude2, lng2 = data.longitude2;

  var p1 = mapobj.latLngToPoint(lat1,lng1);
  var p2 = mapobj.latLngToPoint(lat2,lng2);

  if(lat1 == null || lng1 == null) {
    return;
  }

  if(get_regionname_ll(lat1, lng1) != null) {
    add_log("New event in " + get_regionname_ll(lat1, lng1) + " (" + lat1.toFixed(2) + ", " + lng1.toFixed(2) + ")<br/>");
  }

  if(p1.x == 0 && p1.y == 0) { return; }
  add_marker_ll(lat1, lng1, 'src');
  update_regioncolors();

  if(lat2 == null || lng2 == null) { return; }
  if(p2.x == 0 || p2.y == 0) { return; }
  add_marker_ll(lat2, lng2, 'dst');
//draw_line(p1.x, p1.y, p2.x, p2.y);
});
