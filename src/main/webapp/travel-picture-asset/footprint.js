function createMap() {
  const map = new google.maps.Map(
      document.getElementById('map'),
      {center: {lat: 37.3382, lng: -121.8863}, zoom: 4});

  new google.maps.Marker(
      {position: {lat: 37.3382, lng: -121.8863}, map: map, title: 'San Jose'});

  // China
  new google.maps.Marker(
      {position: {lat: 39.9042, lng: 116.4074}, map: map, title: 'Beijing'});

  new google.maps.Marker(
      {position: {lat: 30.5728, lng: 104.0668}, map: map, title: 'Chengdu'});

  // Mexico
  new google.maps.Marker(
      {position: {lat: 19.4326, lng: -99.1332}, map: map, title: 'Mexico City'});

  new google.maps.Marker(
      {position: {lat: 21.0190, lng: -101.2574}, map: map, title: 'Guanajuato'});

  // Cuba
  new google.maps.Marker(
      {position: {lat: 23.1136, lng: -82.3666}, map: map, title: 'Havana'});

  new google.maps.Marker(
      {position: {lat: 22.6052, lng: -83.7256}, map: map, title: 'Viñales Valley'});

  new google.maps.Marker(
      {position: {lat: 23.1500, lng: -81.2667}, map: map, title: 'Varadero Beach'});

  // Canada
  new google.maps.Marker(
      {position: {lat: 43.0962, lng: -79.0377}, map: map, title: 'Niagara Falls'});

  new google.maps.Marker(
      {position: {lat: 43.6532, lng: -79.3832}, map: map, title: 'Toronto'});

  new google.maps.Marker(
      {position: {lat: 45.4215, lng: -75.6972}, map: map, title: 'Ottawa'});

  new google.maps.Marker(
      {position: {lat: 45.5017, lng: -73.5673}, map: map, title: 'Montreal'});

  new google.maps.Marker(
      {position: {lat: 46.8139, lng: -71.2080}, map: map, title: 'Quebec City'});

  //  US
  new google.maps.Marker(
      {position: {lat: 37.423829, lng: -122.092154}, map: map, title: 'Google'});

  new google.maps.Marker(
      {position: {lat: 37.2707, lng: -76.7075}, map: map, title: 'Williamsburg'});

  new google.maps.Marker(
      {position: {lat: 30.2672, lng: -97.7431}, map: map, title: 'Austin'});

  new google.maps.Marker(
      {position: {lat: 25.7617, lng: -80.1918}, map: map, title: 'Miami'});

  new google.maps.Marker(
      {position: {lat: 24.5551, lng: -81.7800}, map: map, title: 'Key West'});

  new google.maps.Marker(
      {position: {lat: 29.7604, lng: -95.3698}, map: map, title: 'Houston'});

  new google.maps.Marker(
      {position: {lat: 29.4241, lng: -98.4936}, map: map, title: 'San Antonio'});

  new google.maps.Marker(
      {position: {lat: 31.7619, lng: -106.4850}, map: map, title: 'El Paso'});

  new google.maps.Marker(
      {position: {lat: 32.2967, lng: -111.1666}, map: map, title: 'Saguaro National Park'});

  new google.maps.Marker(
      {position: {lat: 33.4484, lng: -112.0740}, map: map, title: 'Phoenix'});

  new google.maps.Marker(
      {position: {lat: 35.1983, lng: -111.6513}, map: map, title: 'Flagstaff'});

  new google.maps.Marker(
      {position: {lat: 36.0544, lng: -112.1401}, map: map, title: 'Grand Canyon'});

  new google.maps.Marker(
      {position: {lat: 36.8619, lng: -111.3743}, map: map, title: 'Antelope Canyon'});

  new google.maps.Marker(
      {position: {lat: 36.9980, lng: -110.0985}, map: map, title: 'Monument Valley'});

  new google.maps.Marker(
      {position: {lat: 37.2309, lng: -108.4618}, map: map, title: 'Mesa Verde National Park'});

  new google.maps.Marker(
      {position: {lat: 38.7331, lng: -109.5925}, map: map, title: 'Arches National Park'});

  new google.maps.Marker(
      {position: {lat: 37.5930, lng: -112.1871}, map: map, title: 'Bryce Canyon National Park'});

  new google.maps.Marker(
      {position: {lat: 37.2982, lng: -113.0263}, map: map, title: 'Zion National Park'});

  new google.maps.Marker(
      {position: {lat: 36.1699, lng: -115.1398}, map: map, title: 'Las Vegas'});

  new google.maps.Marker(
      {position: {lat: 32.7157, lng: -117.1611}, map: map, title: 'San Diego'});

  new google.maps.Marker(
      {position: {lat: 34.0522, lng: -118.2437}, map: map, title: 'Los Angeles'});

  new google.maps.Marker(
      {position: {lat: 39.0968, lng: -120.0324}, map: map, title: 'Lake Tahoe'});

  new google.maps.Marker(
      {position: {lat: 38.5025, lng: -122.2654}, map: map, title: 'Napa'});

  new google.maps.Marker(
      {position: {lat: 37.7749, lng: -122.4194}, map: map, title: 'San Francisco'});

  new google.maps.Marker(
      {position: {lat: 36.6002, lng: -121.8947}, map: map, title: 'Monterey'});

  new google.maps.Marker(
      {position: {lat: 36.4864, lng: -118.5658}, map: map, title: 'Sequoia National Park'});

  new google.maps.Marker(
      {position: {lat: 36.8879, lng: -118.5551}, map: map, title: 'Kings Canyon National Park'});

  new google.maps.Marker(
      {position: {lat: 19.8968, lng: -155.5828}, map: map, title: 'Hawaii'});

  new google.maps.Marker(
      {position: {lat: 37.8651, lng: -119.5383}, map: map, title: 'Yosemite National Park'});

  new google.maps.Marker(
      {position: {lat: 40.7608, lng: -111.8910}, map: map, title: 'Salt Lake City'});

  new google.maps.Marker(
      {position: {lat: 43.7904, lng: -110.6818}, map: map, title: 'Grand Teton National Park'});

  new google.maps.Marker(
      {position: {lat: 44.4280, lng: -110.5885}, map: map, title: 'Yellowstone National Park'});

  new google.maps.Marker(
      {position: {lat: 42.3314, lng: -83.0458}, map: map, title: 'Detroit'});

  new google.maps.Marker(
      {position: {lat: 42.3223, lng: -83.1763}, map: map, title: 'Dearborn'});

  new google.maps.Marker(
      {position: {lat: 41.8781, lng: -87.6298}, map: map, title: 'Chicago'});

  new google.maps.Marker(
      {position: {lat: 40.7128, lng: -74.0060}, map: map, title: 'New York'});

  new google.maps.Marker(
      {position: {lat: 47.6062, lng: -122.3321}, map: map, title: 'Seattle'});

  new google.maps.Marker(
      {position: {lat: 48.7718, lng: -121.2985}, map: map, title: 'North Cascades National Park'});

  new google.maps.Marker(
      {position: {lat: 44.3386, lng: -68.2733}, map: map, title: 'Acadia National Park'});

  new google.maps.Marker(
      {position: {lat: 42.3601, lng: -71.0589}, map: map, title: 'Boston'});

  new google.maps.Marker(
      {position: {lat: 37.8044, lng: -122.2712}, map: map, title: 'Oakland'});

  new google.maps.Marker(
      {position: {lat: 40.4977, lng: -121.4207}, map: map, title: 'Lassen Volcanic National Park'});

  new google.maps.Marker(
      {position: {lat: 41.2132, lng: -124.0046}, map: map, title: 'Redwood National and State Parks'});

  new google.maps.Marker(
      {position: {lat: 42.8684, lng: -122.1685}, map: map, title: 'Crater Lake National Park'});

  new google.maps.Marker(
      {position: {lat: 45.5051, lng: -122.6750}, map: map, title: 'Portland'});

  new google.maps.Marker(
      {position: {lat: 46.8523, lng: -121.7603}, map: map, title: 'Mount Rainier'});
}