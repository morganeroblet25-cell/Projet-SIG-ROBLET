var size = 0;
var placement = 'point';

var style_Pourcentagedesurfaceurbanisedesservieparlesmobilitsalternatives_0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Pourcentage de SU desservi par les MA");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 0.000000 && value <= 25.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(242,218,236,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 25.000000 && value <= 50.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(231,165,198,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 50.000000 && value <= 75.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(214,107,162,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 75.000000 && value <= 100.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(158,67,107,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
