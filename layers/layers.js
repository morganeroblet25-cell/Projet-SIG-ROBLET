var wms_layers = [];

var format_Pourcentagedesurfaceurbanisedesservieparlesmobilitsalternatives_0 = new ol.format.GeoJSON();
var features_Pourcentagedesurfaceurbanisedesservieparlesmobilitsalternatives_0 = format_Pourcentagedesurfaceurbanisedesservieparlesmobilitsalternatives_0.readFeatures(json_Pourcentagedesurfaceurbanisedesservieparlesmobilitsalternatives_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pourcentagedesurfaceurbanisedesservieparlesmobilitsalternatives_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pourcentagedesurfaceurbanisedesservieparlesmobilitsalternatives_0.addFeatures(features_Pourcentagedesurfaceurbanisedesservieparlesmobilitsalternatives_0);
var lyr_Pourcentagedesurfaceurbanisedesservieparlesmobilitsalternatives_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pourcentagedesurfaceurbanisedesservieparlesmobilitsalternatives_0, 
                style: style_Pourcentagedesurfaceurbanisedesservieparlesmobilitsalternatives_0,
                popuplayertitle: 'Pourcentage de surface urbanisée desservie par les mobilités alternatives',
                interactive: true,
    title: 'Pourcentage de surface urbanisée desservie par les mobilités alternatives<br />\
    <img src="styles/legend/Pourcentagedesurfaceurbanisedesservieparlesmobilitsalternatives_0_0.png" /> 0 - 25<br />\
    <img src="styles/legend/Pourcentagedesurfaceurbanisedesservieparlesmobilitsalternatives_0_1.png" /> 25 - 50<br />\
    <img src="styles/legend/Pourcentagedesurfaceurbanisedesservieparlesmobilitsalternatives_0_2.png" /> 50 - 75<br />\
    <img src="styles/legend/Pourcentagedesurfaceurbanisedesservieparlesmobilitsalternatives_0_3.png" /> 75 - 100<br />' });
var format_Hydrologie_1 = new ol.format.GeoJSON();
var features_Hydrologie_1 = format_Hydrologie_1.readFeatures(json_Hydrologie_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hydrologie_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hydrologie_1.addFeatures(features_Hydrologie_1);
var lyr_Hydrologie_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hydrologie_1, 
                style: style_Hydrologie_1,
                popuplayertitle: 'Hydrologie',
                interactive: false,
    title: 'Hydrologie<br />\
    <img src="styles/legend/Hydrologie_1_0.png" /> Ecoulement naturel<br />' });
var format_Population_2 = new ol.format.GeoJSON();
var features_Population_2 = format_Population_2.readFeatures(json_Population_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Population_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Population_2.addFeatures(features_Population_2);
var lyr_Population_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Population_2, 
                style: style_Population_2,
                popuplayertitle: 'Population',
                interactive: false,
    title: 'Population<br />\
    <img src="styles/legend/Population_2_0.png" /> 0 - 725<br />\
    <img src="styles/legend/Population_2_1.png" /> 725 - 1696<br />\
    <img src="styles/legend/Population_2_2.png" /> 1696 - 4900<br />\
    <img src="styles/legend/Population_2_3.png" /> 4900 - 121012<br />' });
var format_Limitescommunales_3 = new ol.format.GeoJSON();
var features_Limitescommunales_3 = format_Limitescommunales_3.readFeatures(json_Limitescommunales_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitescommunales_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitescommunales_3.addFeatures(features_Limitescommunales_3);
var lyr_Limitescommunales_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitescommunales_3, 
                style: style_Limitescommunales_3,
                popuplayertitle: 'Limites communales',
                interactive: false,
                title: '<img src="styles/legend/Limitescommunales_3.png" /> Limites communales'
            });

lyr_Pourcentagedesurfaceurbanisedesservieparlesmobilitsalternatives_0.setVisible(true);lyr_Hydrologie_1.setVisible(true);lyr_Population_2.setVisible(true);lyr_Limitescommunales_3.setVisible(true);
var layersList = [lyr_Pourcentagedesurfaceurbanisedesservieparlesmobilitsalternatives_0,lyr_Hydrologie_1,lyr_Population_2,lyr_Limitescommunales_3];
lyr_Pourcentagedesurfaceurbanisedesservieparlesmobilitsalternatives_0.set('fieldAliases', {'fid': 'fid', 'Commune': 'Commune', 'Nombre d\'habitants en 2022': 'Nombre d\'habitants en 2022', 'surface_totale': 'surface_totale', 'Pourcentage de SU desservi par les MA': 'Pourcentage de SU desservi par les MA', });
lyr_Hydrologie_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CODE_HYDRO': 'CODE_HYDRO', 'CODE_PAYS': 'CODE_PAYS', 'NATURE': 'NATURE', 'POS_SOL': 'POS_SOL', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_ALTI': 'PREC_ALTI', 'SRC_COORD': 'SRC_COORD', 'SRC_ALTI': 'SRC_ALTI', 'STATUT': 'STATUT', 'PERSISTANC': 'PERSISTANC', 'SALINITE': 'SALINITE', 'ORIGINE': 'ORIGINE', 'COMMENT': 'COMMENT', 'ID_P_EAU': 'ID_P_EAU', 'ID_C_EAU': 'ID_C_EAU', 'ID_ENT_TR': 'ID_ENT_TR', 'NOM_P_EAU': 'NOM_P_EAU', 'NOM_C_EAU': 'NOM_C_EAU', 'NOM_ENT_TR': 'NOM_ENT_TR', });
lyr_Population_2.set('fieldAliases', {'fid': 'fid', 'nom': 'nom', 'nbHabitants': 'nbHabitants', 'secteur': 'secteur', 'yx': 'yx', 'surface_totale': 'surface_totale', 'pourcentage_non_couvert': 'pourcentage_non_couvert', 'pourcentage_couvert': 'pourcentage_couvert', });
lyr_Limitescommunales_3.set('fieldAliases', {'fid': 'fid', 'nom': 'nom', 'nbHabitants': 'nbHabitants', 'surface_totale': 'surface_totale', '%SU_MA': '%SU_MA', });
lyr_Pourcentagedesurfaceurbanisedesservieparlesmobilitsalternatives_0.set('fieldImages', {'fid': '', 'Commune': '', 'Nombre d\'habitants en 2022': '', 'surface_totale': '', 'Pourcentage de SU desservi par les MA': '', });
lyr_Hydrologie_1.set('fieldImages', {'fid': '', 'ID': '', 'CODE_HYDRO': '', 'CODE_PAYS': '', 'NATURE': '', 'POS_SOL': '', 'ETAT': '', 'DATE_CREAT': '', 'DATE_MAJ': '', 'DATE_APP': '', 'DATE_CONF': '', 'SOURCE': '', 'ID_SOURCE': '', 'ACQU_PLANI': '', 'PREC_PLANI': '', 'ACQU_ALTI': '', 'PREC_ALTI': '', 'SRC_COORD': '', 'SRC_ALTI': '', 'STATUT': '', 'PERSISTANC': '', 'SALINITE': '', 'ORIGINE': '', 'COMMENT': '', 'ID_P_EAU': '', 'ID_C_EAU': '', 'ID_ENT_TR': '', 'NOM_P_EAU': '', 'NOM_C_EAU': '', 'NOM_ENT_TR': '', });
lyr_Population_2.set('fieldImages', {'fid': '', 'nom': '', 'nbHabitants': '', 'secteur': '', 'yx': '', 'surface_totale': '', 'pourcentage_non_couvert': '', 'pourcentage_couvert': '', });
lyr_Limitescommunales_3.set('fieldImages', {'fid': '', 'nom': '', 'nbHabitants': '', 'surface_totale': '', '%SU_MA': '', });
lyr_Pourcentagedesurfaceurbanisedesservieparlesmobilitsalternatives_0.set('fieldLabels', {'fid': 'hidden field', 'Commune': 'no label', 'Nombre d\'habitants en 2022': 'no label', 'surface_totale': 'hidden field', 'Pourcentage de SU desservi par les MA': 'no label', });
lyr_Hydrologie_1.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'CODE_HYDRO': 'hidden field', 'CODE_PAYS': 'hidden field', 'NATURE': 'hidden field', 'POS_SOL': 'hidden field', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', 'ACQU_ALTI': 'hidden field', 'PREC_ALTI': 'hidden field', 'SRC_COORD': 'hidden field', 'SRC_ALTI': 'hidden field', 'STATUT': 'hidden field', 'PERSISTANC': 'hidden field', 'SALINITE': 'hidden field', 'ORIGINE': 'hidden field', 'COMMENT': 'hidden field', 'ID_P_EAU': 'hidden field', 'ID_C_EAU': 'hidden field', 'ID_ENT_TR': 'hidden field', 'NOM_P_EAU': 'hidden field', 'NOM_C_EAU': 'hidden field', 'NOM_ENT_TR': 'hidden field', });
lyr_Population_2.set('fieldLabels', {'fid': 'hidden field', 'nom': 'inline label - always visible', 'nbHabitants': 'inline label - always visible', 'secteur': 'hidden field', 'yx': 'hidden field', 'surface_totale': 'hidden field', 'pourcentage_non_couvert': 'hidden field', 'pourcentage_couvert': 'hidden field', });
lyr_Limitescommunales_3.set('fieldLabels', {'fid': 'hidden field', 'nom': 'hidden field', 'nbHabitants': 'hidden field', 'surface_totale': 'hidden field', '%SU_MA': 'hidden field', });
lyr_Limitescommunales_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});