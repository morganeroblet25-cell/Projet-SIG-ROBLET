var wms_layers = [];

var format_Hydrologie_0 = new ol.format.GeoJSON();
var features_Hydrologie_0 = format_Hydrologie_0.readFeatures(json_Hydrologie_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hydrologie_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hydrologie_0.addFeatures(features_Hydrologie_0);
var lyr_Hydrologie_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hydrologie_0, 
                style: style_Hydrologie_0,
                popuplayertitle: 'Hydrologie',
                interactive: false,
    title: 'Hydrologie<br />\
    <img src="styles/legend/Hydrologie_0_0.png" /> Ecoulement naturel<br />' });
var format_Population_1 = new ol.format.GeoJSON();
var features_Population_1 = format_Population_1.readFeatures(json_Population_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Population_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Population_1.addFeatures(features_Population_1);
var lyr_Population_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Population_1, 
                style: style_Population_1,
                popuplayertitle: 'Population',
                interactive: false,
    title: 'Population<br />\
    <img src="styles/legend/Population_1_0.png" /> 0 - 725<br />\
    <img src="styles/legend/Population_1_1.png" /> 725 - 1696<br />\
    <img src="styles/legend/Population_1_2.png" /> 1696 - 4900<br />\
    <img src="styles/legend/Population_1_3.png" /> 4900 - 121012<br />' });
var format_IndicedAccessibilitSpatialemaxparcommune_2 = new ol.format.GeoJSON();
var features_IndicedAccessibilitSpatialemaxparcommune_2 = format_IndicedAccessibilitSpatialemaxparcommune_2.readFeatures(json_IndicedAccessibilitSpatialemaxparcommune_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndicedAccessibilitSpatialemaxparcommune_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndicedAccessibilitSpatialemaxparcommune_2.addFeatures(features_IndicedAccessibilitSpatialemaxparcommune_2);
var lyr_IndicedAccessibilitSpatialemaxparcommune_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IndicedAccessibilitSpatialemaxparcommune_2, 
                style: style_IndicedAccessibilitSpatialemaxparcommune_2,
                popuplayertitle: 'Indice d\'Accessibilité Spatiale max. par commune',
                interactive: true,
    title: 'Indice d\'Accessibilité Spatiale max. par commune<br />\
    <img src="styles/legend/IndicedAccessibilitSpatialemaxparcommune_2_0.png" /> 1 - 1,1<br />\
    <img src="styles/legend/IndicedAccessibilitSpatialemaxparcommune_2_1.png" /> 1,1 - 2<br />\
    <img src="styles/legend/IndicedAccessibilitSpatialemaxparcommune_2_2.png" /> 2 - 3,1<br />\
    <img src="styles/legend/IndicedAccessibilitSpatialemaxparcommune_2_3.png" /> 3,1 - 4<br />' });
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

lyr_Hydrologie_0.setVisible(true);lyr_Population_1.setVisible(true);lyr_IndicedAccessibilitSpatialemaxparcommune_2.setVisible(true);lyr_Limitescommunales_3.setVisible(true);
var layersList = [lyr_Hydrologie_0,lyr_Population_1,lyr_IndicedAccessibilitSpatialemaxparcommune_2,lyr_Limitescommunales_3];
lyr_Hydrologie_0.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CODE_HYDRO': 'CODE_HYDRO', 'CODE_PAYS': 'CODE_PAYS', 'NATURE': 'NATURE', 'POS_SOL': 'POS_SOL', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_ALTI': 'PREC_ALTI', 'SRC_COORD': 'SRC_COORD', 'SRC_ALTI': 'SRC_ALTI', 'STATUT': 'STATUT', 'PERSISTANC': 'PERSISTANC', 'SALINITE': 'SALINITE', 'ORIGINE': 'ORIGINE', 'COMMENT': 'COMMENT', 'ID_P_EAU': 'ID_P_EAU', 'ID_C_EAU': 'ID_C_EAU', 'ID_ENT_TR': 'ID_ENT_TR', 'NOM_P_EAU': 'NOM_P_EAU', 'NOM_C_EAU': 'NOM_C_EAU', 'NOM_ENT_TR': 'NOM_ENT_TR', });
lyr_Population_1.set('fieldAliases', {'fid': 'fid', 'nom': 'nom', 'nbHabitants': 'nbHabitants', 'secteur': 'secteur', 'yx': 'yx', 'surface_totale': 'surface_totale', 'pourcentage_non_couvert': 'pourcentage_non_couvert', 'pourcentage_couvert': 'pourcentage_couvert', });
lyr_IndicedAccessibilitSpatialemaxparcommune_2.set('fieldAliases', {'fid': 'fid', 'Commune': 'Commune', 'Nombre d\'habitants en 2022': 'Nombre d\'habitants en 2022', 'surface_totale': 'surface_totale', '%SU_MA': '%SU_MA', '  surf_urbaOK': '  surf_urbaOK', 'TAMP_MA_acc_all_velo': 'TAMP_MA_acc_all_velo', 'TAMP_MA_acc_TC': 'TAMP_MA_acc_TC', 'IAS max. ': 'IAS max. ', 'TAMP_MA_surf_MA': 'TAMP_MA_surf_MA', });
lyr_Limitescommunales_3.set('fieldAliases', {'fid': 'fid', 'nom': 'nom', 'nbHabitants': 'nbHabitants', 'surface_totale': 'surface_totale', '%SU_MA': '%SU_MA', });
lyr_Hydrologie_0.set('fieldImages', {'fid': '', 'ID': '', 'CODE_HYDRO': '', 'CODE_PAYS': '', 'NATURE': '', 'POS_SOL': '', 'ETAT': '', 'DATE_CREAT': '', 'DATE_MAJ': '', 'DATE_APP': '', 'DATE_CONF': '', 'SOURCE': '', 'ID_SOURCE': '', 'ACQU_PLANI': '', 'PREC_PLANI': '', 'ACQU_ALTI': '', 'PREC_ALTI': '', 'SRC_COORD': '', 'SRC_ALTI': '', 'STATUT': '', 'PERSISTANC': '', 'SALINITE': '', 'ORIGINE': '', 'COMMENT': '', 'ID_P_EAU': '', 'ID_C_EAU': '', 'ID_ENT_TR': '', 'NOM_P_EAU': '', 'NOM_C_EAU': '', 'NOM_ENT_TR': '', });
lyr_Population_1.set('fieldImages', {'fid': '', 'nom': '', 'nbHabitants': '', 'secteur': '', 'yx': '', 'surface_totale': '', 'pourcentage_non_couvert': '', 'pourcentage_couvert': '', });
lyr_IndicedAccessibilitSpatialemaxparcommune_2.set('fieldImages', {'fid': 'TextEdit', 'Commune': '', 'Nombre d\'habitants en 2022': '', 'surface_totale': 'Range', '%SU_MA': '', '  surf_urbaOK': 'Range', 'TAMP_MA_acc_all_velo': 'Range', 'TAMP_MA_acc_TC': 'Range', 'IAS max. ': '', 'TAMP_MA_surf_MA': 'Range', });
lyr_Limitescommunales_3.set('fieldImages', {'fid': '', 'nom': '', 'nbHabitants': '', 'surface_totale': '', '%SU_MA': '', });
lyr_Hydrologie_0.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'CODE_HYDRO': 'hidden field', 'CODE_PAYS': 'hidden field', 'NATURE': 'hidden field', 'POS_SOL': 'hidden field', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', 'ACQU_ALTI': 'hidden field', 'PREC_ALTI': 'hidden field', 'SRC_COORD': 'hidden field', 'SRC_ALTI': 'hidden field', 'STATUT': 'hidden field', 'PERSISTANC': 'hidden field', 'SALINITE': 'hidden field', 'ORIGINE': 'hidden field', 'COMMENT': 'hidden field', 'ID_P_EAU': 'hidden field', 'ID_C_EAU': 'hidden field', 'ID_ENT_TR': 'hidden field', 'NOM_P_EAU': 'hidden field', 'NOM_C_EAU': 'hidden field', 'NOM_ENT_TR': 'hidden field', });
lyr_Population_1.set('fieldLabels', {'fid': 'hidden field', 'nom': 'inline label - always visible', 'nbHabitants': 'inline label - always visible', 'secteur': 'hidden field', 'yx': 'hidden field', 'surface_totale': 'hidden field', 'pourcentage_non_couvert': 'hidden field', 'pourcentage_couvert': 'hidden field', });
lyr_IndicedAccessibilitSpatialemaxparcommune_2.set('fieldLabels', {'fid': 'hidden field', 'Commune': 'inline label - always visible', 'Nombre d\'habitants en 2022': 'inline label - always visible', 'surface_totale': 'hidden field', '%SU_MA': 'hidden field', '  surf_urbaOK': 'hidden field', 'TAMP_MA_acc_all_velo': 'hidden field', 'TAMP_MA_acc_TC': 'hidden field', 'IAS max. ': 'inline label - always visible', 'TAMP_MA_surf_MA': 'hidden field', });
lyr_Limitescommunales_3.set('fieldLabels', {'fid': 'hidden field', 'nom': 'hidden field', 'nbHabitants': 'hidden field', 'surface_totale': 'hidden field', '%SU_MA': 'hidden field', });
lyr_Limitescommunales_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});