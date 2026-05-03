var wms_layers = [];

var format_Arrtsdebus_0 = new ol.format.GeoJSON();
var features_Arrtsdebus_0 = format_Arrtsdebus_0.readFeatures(json_Arrtsdebus_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arrtsdebus_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arrtsdebus_0.addFeatures(features_Arrtsdebus_0);
var lyr_Arrtsdebus_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arrtsdebus_0, 
                style: style_Arrtsdebus_0,
                popuplayertitle: 'Arrêts de bus',
                interactive: true,
    title: 'Arrêts de bus<br />\
    <img src="styles/legend/Arrtsdebus_0_0.png" /> 20<br />\
    <img src="styles/legend/Arrtsdebus_0_1.png" /> 30<br />\
    <img src="styles/legend/Arrtsdebus_0_2.png" /> 40<br />\
    <img src="styles/legend/Arrtsdebus_0_3.png" /> 50<br />\
    <img src="styles/legend/Arrtsdebus_0_4.png" /> 60<br />\
    <img src="styles/legend/Arrtsdebus_0_5.png" /> 70<br />' });
var format_StationsVlocit_1 = new ol.format.GeoJSON();
var features_StationsVlocit_1 = format_StationsVlocit_1.readFeatures(json_StationsVlocit_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StationsVlocit_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StationsVlocit_1.addFeatures(features_StationsVlocit_1);
var lyr_StationsVlocit_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StationsVlocit_1, 
                style: style_StationsVlocit_1,
                popuplayertitle: 'Stations Vélocité',
                interactive: true,
    title: 'Stations Vélocité<br />\
    <img src="styles/legend/StationsVlocit_1_0.png" /> 10 - 12<br />\
    <img src="styles/legend/StationsVlocit_1_1.png" /> 12 - 20<br />\
    <img src="styles/legend/StationsVlocit_1_2.png" /> 20 - 42<br />' });
var format_Stationsdetramway_2 = new ol.format.GeoJSON();
var features_Stationsdetramway_2 = format_Stationsdetramway_2.readFeatures(json_Stationsdetramway_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stationsdetramway_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stationsdetramway_2.addFeatures(features_Stationsdetramway_2);
var lyr_Stationsdetramway_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stationsdetramway_2, 
                style: style_Stationsdetramway_2,
                popuplayertitle: 'Stations de tramway',
                interactive: false,
                title: '<img src="styles/legend/Stationsdetramway_2.png" /> Stations de tramway'
            });
var format_Hydrologie_3 = new ol.format.GeoJSON();
var features_Hydrologie_3 = format_Hydrologie_3.readFeatures(json_Hydrologie_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hydrologie_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hydrologie_3.addFeatures(features_Hydrologie_3);
var lyr_Hydrologie_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hydrologie_3, 
                style: style_Hydrologie_3,
                popuplayertitle: 'Hydrologie',
                interactive: false,
    title: 'Hydrologie<br />\
    <img src="styles/legend/Hydrologie_3_0.png" /> Ecoulement naturel<br />' });
var format_Limitescommunales_4 = new ol.format.GeoJSON();
var features_Limitescommunales_4 = format_Limitescommunales_4.readFeatures(json_Limitescommunales_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitescommunales_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitescommunales_4.addFeatures(features_Limitescommunales_4);
var lyr_Limitescommunales_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitescommunales_4, 
                style: style_Limitescommunales_4,
                popuplayertitle: 'Limites communales',
                interactive: false,
                title: '<img src="styles/legend/Limitescommunales_4.png" /> Limites communales'
            });

lyr_Arrtsdebus_0.setVisible(true);lyr_StationsVlocit_1.setVisible(true);lyr_Stationsdetramway_2.setVisible(true);lyr_Hydrologie_3.setVisible(true);lyr_Limitescommunales_4.setVisible(true);
var layersList = [lyr_Arrtsdebus_0,lyr_StationsVlocit_1,lyr_Stationsdetramway_2,lyr_Hydrologie_3,lyr_Limitescommunales_4];
lyr_Arrtsdebus_0.set('fieldAliases', {'fid': 'fid', 'stop_id': 'stop_id', 'Nom': 'Nom', 'stop_lat': 'stop_lat', 'stop_lon': 'stop_lon', 'location_type': 'location_type', 'parent_station': 'parent_station', 'wheelchair_boarding': 'wheelchair_boarding', 'ARRETS_TRAM_OK — stop_times_fid': 'ARRETS_TRAM_OK — stop_times_fid', 'ARRETS_TRAM_OK — stop_times_trip_id': 'ARRETS_TRAM_OK — stop_times_trip_id', 'ARRETS_TRAM_OK — stop_times_arrival_time': 'ARRETS_TRAM_OK — stop_times_arrival_time', 'ARRETS_TRAM_OK — stop_times_departure_time': 'ARRETS_TRAM_OK — stop_times_departure_time', 'ARRETS_TRAM_OK — stop_times_stop_sequence': 'ARRETS_TRAM_OK — stop_times_stop_sequence', 'ARRETS_TRAM_OK — stop_times_pickup_type': 'ARRETS_TRAM_OK — stop_times_pickup_type', 'ARRETS_TRAM_OK — stop_times_drop_off_type': 'ARRETS_TRAM_OK — stop_times_drop_off_type', 'ARRETS_TRAM_OK — stop_times_trips_route_id': 'ARRETS_TRAM_OK — stop_times_trips_route_id', 'ARRETS_TRAM_OK — stop_times_routes_route_type': 'ARRETS_TRAM_OK — stop_times_routes_route_type', 'ARRETS_BUS_OK — stop_times_fid': 'ARRETS_BUS_OK — stop_times_fid', 'ARRETS_BUS_OK — stop_times_trip_id': 'ARRETS_BUS_OK — stop_times_trip_id', 'ARRETS_BUS_OK — stop_times_arrival_time': 'ARRETS_BUS_OK — stop_times_arrival_time', 'ARRETS_BUS_OK — stop_times_departure_time': 'ARRETS_BUS_OK — stop_times_departure_time', 'ARRETS_BUS_OK — stop_times_stop_sequence': 'ARRETS_BUS_OK — stop_times_stop_sequence', 'ARRETS_BUS_OK — stop_times_pickup_type': 'ARRETS_BUS_OK — stop_times_pickup_type', 'ARRETS_BUS_OK — stop_times_drop_off_type': 'ARRETS_BUS_OK — stop_times_drop_off_type', 'ARRETS_BUS_OK — stop_times_trips_route_id': 'ARRETS_BUS_OK — stop_times_trips_route_id', 'ARRETS_BUS_OK — stop_times_routes_route_type': 'ARRETS_BUS_OK — stop_times_routes_route_type', 'Typologie ': 'Typologie ', 'ginko_lignes_typologie_num_pub': 'ginko_lignes_typologie_num_pub', });
lyr_StationsVlocit_1.set('fieldAliases', {'fid': 'fid', 'station_id': 'station_id', 'Nom': 'Nom', 'address': 'address', 'Capacité': 'Capacité', 'lat_wgs84': 'lat_wgs84', 'lon_wgs84': 'lon_wgs84', });
lyr_Stationsdetramway_2.set('fieldAliases', {'fid': 'fid', 'TYPO': 'TYPO', });
lyr_Hydrologie_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CODE_HYDRO': 'CODE_HYDRO', 'CODE_PAYS': 'CODE_PAYS', 'NATURE': 'NATURE', 'POS_SOL': 'POS_SOL', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_ALTI': 'PREC_ALTI', 'SRC_COORD': 'SRC_COORD', 'SRC_ALTI': 'SRC_ALTI', 'STATUT': 'STATUT', 'PERSISTANC': 'PERSISTANC', 'SALINITE': 'SALINITE', 'ORIGINE': 'ORIGINE', 'COMMENT': 'COMMENT', 'ID_P_EAU': 'ID_P_EAU', 'ID_C_EAU': 'ID_C_EAU', 'ID_ENT_TR': 'ID_ENT_TR', 'NOM_P_EAU': 'NOM_P_EAU', 'NOM_C_EAU': 'NOM_C_EAU', 'NOM_ENT_TR': 'NOM_ENT_TR', });
lyr_Limitescommunales_4.set('fieldAliases', {'fid': 'fid', 'nom': 'nom', 'nbHabitants': 'nbHabitants', 'surface_totale': 'surface_totale', '%SU_MA': '%SU_MA', });
lyr_Arrtsdebus_0.set('fieldImages', {'fid': 'TextEdit', 'stop_id': 'TextEdit', 'Nom': 'TextEdit', 'stop_lat': 'TextEdit', 'stop_lon': 'TextEdit', 'location_type': 'CheckBox', 'parent_station': 'TextEdit', 'wheelchair_boarding': 'Range', 'ARRETS_TRAM_OK — stop_times_fid': 'TextEdit', 'ARRETS_TRAM_OK — stop_times_trip_id': 'TextEdit', 'ARRETS_TRAM_OK — stop_times_arrival_time': 'TextEdit', 'ARRETS_TRAM_OK — stop_times_departure_time': 'TextEdit', 'ARRETS_TRAM_OK — stop_times_stop_sequence': 'Range', 'ARRETS_TRAM_OK — stop_times_pickup_type': 'Range', 'ARRETS_TRAM_OK — stop_times_drop_off_type': 'Range', 'ARRETS_TRAM_OK — stop_times_trips_route_id': 'Range', 'ARRETS_TRAM_OK — stop_times_routes_route_type': 'Range', 'ARRETS_BUS_OK — stop_times_fid': 'TextEdit', 'ARRETS_BUS_OK — stop_times_trip_id': 'TextEdit', 'ARRETS_BUS_OK — stop_times_arrival_time': 'TextEdit', 'ARRETS_BUS_OK — stop_times_departure_time': 'TextEdit', 'ARRETS_BUS_OK — stop_times_stop_sequence': 'Range', 'ARRETS_BUS_OK — stop_times_pickup_type': 'Range', 'ARRETS_BUS_OK — stop_times_drop_off_type': 'Range', 'ARRETS_BUS_OK — stop_times_trips_route_id': 'Range', 'ARRETS_BUS_OK — stop_times_routes_route_type': 'Range', 'Typologie ': 'Range', 'ginko_lignes_typologie_num_pub': 'TextEdit', });
lyr_StationsVlocit_1.set('fieldImages', {'fid': '', 'station_id': '', 'Nom': '', 'address': '', 'Capacité': '', 'lat_wgs84': '', 'lon_wgs84': '', });
lyr_Stationsdetramway_2.set('fieldImages', {'fid': '', 'TYPO': '', });
lyr_Hydrologie_3.set('fieldImages', {'fid': '', 'ID': '', 'CODE_HYDRO': '', 'CODE_PAYS': '', 'NATURE': '', 'POS_SOL': '', 'ETAT': '', 'DATE_CREAT': '', 'DATE_MAJ': '', 'DATE_APP': '', 'DATE_CONF': '', 'SOURCE': '', 'ID_SOURCE': '', 'ACQU_PLANI': '', 'PREC_PLANI': '', 'ACQU_ALTI': '', 'PREC_ALTI': '', 'SRC_COORD': '', 'SRC_ALTI': '', 'STATUT': '', 'PERSISTANC': '', 'SALINITE': '', 'ORIGINE': '', 'COMMENT': '', 'ID_P_EAU': '', 'ID_C_EAU': '', 'ID_ENT_TR': '', 'NOM_P_EAU': '', 'NOM_C_EAU': '', 'NOM_ENT_TR': '', });
lyr_Limitescommunales_4.set('fieldImages', {'fid': '', 'nom': '', 'nbHabitants': '', 'surface_totale': '', '%SU_MA': '', });
lyr_Arrtsdebus_0.set('fieldLabels', {'fid': 'hidden field', 'stop_id': 'hidden field', 'Nom': 'inline label - always visible', 'stop_lat': 'hidden field', 'stop_lon': 'hidden field', 'location_type': 'hidden field', 'parent_station': 'hidden field', 'wheelchair_boarding': 'hidden field', 'ARRETS_TRAM_OK — stop_times_fid': 'hidden field', 'ARRETS_TRAM_OK — stop_times_trip_id': 'hidden field', 'ARRETS_TRAM_OK — stop_times_arrival_time': 'hidden field', 'ARRETS_TRAM_OK — stop_times_departure_time': 'hidden field', 'ARRETS_TRAM_OK — stop_times_stop_sequence': 'hidden field', 'ARRETS_TRAM_OK — stop_times_pickup_type': 'hidden field', 'ARRETS_TRAM_OK — stop_times_drop_off_type': 'hidden field', 'ARRETS_TRAM_OK — stop_times_trips_route_id': 'hidden field', 'ARRETS_TRAM_OK — stop_times_routes_route_type': 'hidden field', 'ARRETS_BUS_OK — stop_times_fid': 'hidden field', 'ARRETS_BUS_OK — stop_times_trip_id': 'hidden field', 'ARRETS_BUS_OK — stop_times_arrival_time': 'hidden field', 'ARRETS_BUS_OK — stop_times_departure_time': 'hidden field', 'ARRETS_BUS_OK — stop_times_stop_sequence': 'hidden field', 'ARRETS_BUS_OK — stop_times_pickup_type': 'hidden field', 'ARRETS_BUS_OK — stop_times_drop_off_type': 'hidden field', 'ARRETS_BUS_OK — stop_times_trips_route_id': 'hidden field', 'ARRETS_BUS_OK — stop_times_routes_route_type': 'hidden field', 'Typologie ': 'no label', 'ginko_lignes_typologie_num_pub': 'hidden field', });
lyr_StationsVlocit_1.set('fieldLabels', {'fid': 'hidden field', 'station_id': 'hidden field', 'Nom': 'inline label - always visible', 'address': 'hidden field', 'Capacité': 'inline label - always visible', 'lat_wgs84': 'hidden field', 'lon_wgs84': 'hidden field', });
lyr_Stationsdetramway_2.set('fieldLabels', {'fid': 'hidden field', 'TYPO': 'hidden field', });
lyr_Hydrologie_3.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'CODE_HYDRO': 'hidden field', 'CODE_PAYS': 'hidden field', 'NATURE': 'hidden field', 'POS_SOL': 'hidden field', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', 'ACQU_ALTI': 'hidden field', 'PREC_ALTI': 'hidden field', 'SRC_COORD': 'hidden field', 'SRC_ALTI': 'hidden field', 'STATUT': 'hidden field', 'PERSISTANC': 'hidden field', 'SALINITE': 'hidden field', 'ORIGINE': 'hidden field', 'COMMENT': 'hidden field', 'ID_P_EAU': 'hidden field', 'ID_C_EAU': 'hidden field', 'ID_ENT_TR': 'hidden field', 'NOM_P_EAU': 'hidden field', 'NOM_C_EAU': 'hidden field', 'NOM_ENT_TR': 'hidden field', });
lyr_Limitescommunales_4.set('fieldLabels', {'fid': 'hidden field', 'nom': 'hidden field', 'nbHabitants': 'hidden field', 'surface_totale': 'hidden field', '%SU_MA': 'hidden field', });
lyr_Limitescommunales_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});