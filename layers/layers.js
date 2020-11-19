var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_DepartamentosLaRioja_2 = new ol.format.GeoJSON();
var features_DepartamentosLaRioja_2 = format_DepartamentosLaRioja_2.readFeatures(json_DepartamentosLaRioja_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DepartamentosLaRioja_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DepartamentosLaRioja_2.addFeatures(features_DepartamentosLaRioja_2);
var lyr_DepartamentosLaRioja_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DepartamentosLaRioja_2, 
                style: style_DepartamentosLaRioja_2,
                interactive: true,
                title: '<img src="styles/legend/DepartamentosLaRioja_2.png" /> Departamentos La Rioja'
            });
var format_ViviendasenreasRuralesINDEC_3 = new ol.format.GeoJSON();
var features_ViviendasenreasRuralesINDEC_3 = format_ViviendasenreasRuralesINDEC_3.readFeatures(json_ViviendasenreasRuralesINDEC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViviendasenreasRuralesINDEC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViviendasenreasRuralesINDEC_3.addFeatures(features_ViviendasenreasRuralesINDEC_3);
var lyr_ViviendasenreasRuralesINDEC_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViviendasenreasRuralesINDEC_3, 
                style: style_ViviendasenreasRuralesINDEC_3,
                interactive: true,
    title: 'Viviendas en Áreas Rurales  (INDEC)<br />\
    <img src="styles/legend/ViviendasenreasRuralesINDEC_3_0.png" /> 40 - 170<br />\
    <img src="styles/legend/ViviendasenreasRuralesINDEC_3_1.png" /> 171 - 870<br />\
    <img src="styles/legend/ViviendasenreasRuralesINDEC_3_2.png" /> 871 - 1.460<br />\
    <img src="styles/legend/ViviendasenreasRuralesINDEC_3_3.png" /> 1.461 - 2.225<br />'
        });
var format_PEAINDEC_4 = new ol.format.GeoJSON();
var features_PEAINDEC_4 = format_PEAINDEC_4.readFeatures(json_PEAINDEC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEAINDEC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEAINDEC_4.addFeatures(features_PEAINDEC_4);
var lyr_PEAINDEC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEAINDEC_4, 
                style: style_PEAINDEC_4,
                interactive: true,
    title: 'PEA  (INDEC)<br />\
    <img src="styles/legend/PEAINDEC_4_0.png" /> 1.115 - 2.925<br />\
    <img src="styles/legend/PEAINDEC_4_1.png" /> 2.926 - 6.250<br />\
    <img src="styles/legend/PEAINDEC_4_2.png" /> 6.251 - 31.150<br />\
    <img src="styles/legend/PEAINDEC_4_3.png" /> Más de 31.151<br />'
        });
var format_CabezasdeovinosMAGyP_5 = new ol.format.GeoJSON();
var features_CabezasdeovinosMAGyP_5 = format_CabezasdeovinosMAGyP_5.readFeatures(json_CabezasdeovinosMAGyP_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeovinosMAGyP_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeovinosMAGyP_5.addFeatures(features_CabezasdeovinosMAGyP_5);
var lyr_CabezasdeovinosMAGyP_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeovinosMAGyP_5, 
                style: style_CabezasdeovinosMAGyP_5,
                interactive: true,
    title: 'Cabezas de ovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_5_0.png" /> 0<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_5_1.png" /> 0 - 185<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_5_2.png" /> 186 - 790<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_5_3.png" /> 791 - 1.480<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_5_4.png" /> 1.481 - 1972<br />'
        });
var format_CabezasdeporcinosMAGyP_6 = new ol.format.GeoJSON();
var features_CabezasdeporcinosMAGyP_6 = format_CabezasdeporcinosMAGyP_6.readFeatures(json_CabezasdeporcinosMAGyP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeporcinosMAGyP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeporcinosMAGyP_6.addFeatures(features_CabezasdeporcinosMAGyP_6);
var lyr_CabezasdeporcinosMAGyP_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeporcinosMAGyP_6, 
                style: style_CabezasdeporcinosMAGyP_6,
                interactive: true,
    title: 'Cabezas de porcinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_0.png" /> 0<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_1.png" /> 1 - 240<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_2.png" /> 241 - 765<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_3.png" /> 766 - 12.125<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_4.png" /> 12.126 o más<br />'
        });
var format_CabezasdecaprinosMAGyP_7 = new ol.format.GeoJSON();
var features_CabezasdecaprinosMAGyP_7 = format_CabezasdecaprinosMAGyP_7.readFeatures(json_CabezasdecaprinosMAGyP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdecaprinosMAGyP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdecaprinosMAGyP_7.addFeatures(features_CabezasdecaprinosMAGyP_7);
var lyr_CabezasdecaprinosMAGyP_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdecaprinosMAGyP_7, 
                style: style_CabezasdecaprinosMAGyP_7,
                interactive: true,
    title: 'Cabezas de caprinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_7_0.png" /> 0<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_7_1.png" /> 1 - 1.400<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_7_2.png" /> 1.401 - 7.525<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_7_3.png" /> 7.526 - 19.000<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_7_4.png" /> 19.001 o más<br />'
        });
var format_CabezasdebovinosMAGyP_8 = new ol.format.GeoJSON();
var features_CabezasdebovinosMAGyP_8 = format_CabezasdebovinosMAGyP_8.readFeatures(json_CabezasdebovinosMAGyP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdebovinosMAGyP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdebovinosMAGyP_8.addFeatures(features_CabezasdebovinosMAGyP_8);
var lyr_CabezasdebovinosMAGyP_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdebovinosMAGyP_8, 
                style: style_CabezasdebovinosMAGyP_8,
                interactive: true,
    title: 'Cabezas de bovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_8_0.png" /> 0<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_8_1.png" /> 1 - 175<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_8_2.png" /> 176 - 14.600<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_8_3.png" /> 14.601 - 27.225<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_8_4.png" /> 27.226 o más<br />'
        });
var format_HectreasnogalesINDEC_9 = new ol.format.GeoJSON();
var features_HectreasnogalesINDEC_9 = format_HectreasnogalesINDEC_9.readFeatures(json_HectreasnogalesINDEC_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasnogalesINDEC_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasnogalesINDEC_9.addFeatures(features_HectreasnogalesINDEC_9);
var lyr_HectreasnogalesINDEC_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasnogalesINDEC_9, 
                style: style_HectreasnogalesINDEC_9,
                interactive: true,
    title: 'Hectáreas nogales  (INDEC)<br />\
    <img src="styles/legend/HectreasnogalesINDEC_9_0.png" /> 0<br />\
    <img src="styles/legend/HectreasnogalesINDEC_9_1.png" /> 1 - 8<br />\
    <img src="styles/legend/HectreasnogalesINDEC_9_2.png" /> 9 - 97<br />\
    <img src="styles/legend/HectreasnogalesINDEC_9_3.png" /> 98 - 1.000<br />\
    <img src="styles/legend/HectreasnogalesINDEC_9_4.png" /> 1.001 o más<br />'
        });
var format_HectreasVidINDEC_10 = new ol.format.GeoJSON();
var features_HectreasVidINDEC_10 = format_HectreasVidINDEC_10.readFeatures(json_HectreasVidINDEC_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasVidINDEC_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasVidINDEC_10.addFeatures(features_HectreasVidINDEC_10);
var lyr_HectreasVidINDEC_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasVidINDEC_10, 
                style: style_HectreasVidINDEC_10,
                interactive: true,
    title: 'Hectáreas Vid  (INDEC)<br />\
    <img src="styles/legend/HectreasVidINDEC_10_0.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/HectreasVidINDEC_10_1.png" /> 1 - 25<br />\
    <img src="styles/legend/HectreasVidINDEC_10_2.png" /> 26 - 70<br />\
    <img src="styles/legend/HectreasVidINDEC_10_3.png" /> 71 - 700<br />\
    <img src="styles/legend/HectreasVidINDEC_10_4.png" /> Más de 701<br />'
        });
var format_HectreasduraznerosINDEC_11 = new ol.format.GeoJSON();
var features_HectreasduraznerosINDEC_11 = format_HectreasduraznerosINDEC_11.readFeatures(json_HectreasduraznerosINDEC_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasduraznerosINDEC_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasduraznerosINDEC_11.addFeatures(features_HectreasduraznerosINDEC_11);
var lyr_HectreasduraznerosINDEC_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasduraznerosINDEC_11, 
                style: style_HectreasduraznerosINDEC_11,
                interactive: true,
    title: 'Hectáreas durazneros  (INDEC)<br />\
    <img src="styles/legend/HectreasduraznerosINDEC_11_0.png" /> 0<br />\
    <img src="styles/legend/HectreasduraznerosINDEC_11_1.png" /> 1 - 2,50<br />\
    <img src="styles/legend/HectreasduraznerosINDEC_11_2.png" /> 2,51 - 12<br />\
    <img src="styles/legend/HectreasduraznerosINDEC_11_3.png" /> 13 - 21<br />\
    <img src="styles/legend/HectreasduraznerosINDEC_11_4.png" /> Más de 21<br />'
        });
var format_HectreasconolivosINDEC_12 = new ol.format.GeoJSON();
var features_HectreasconolivosINDEC_12 = format_HectreasconolivosINDEC_12.readFeatures(json_HectreasconolivosINDEC_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasconolivosINDEC_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasconolivosINDEC_12.addFeatures(features_HectreasconolivosINDEC_12);
var lyr_HectreasconolivosINDEC_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasconolivosINDEC_12, 
                style: style_HectreasconolivosINDEC_12,
                interactive: true,
    title: 'Hectáreas con olivos (INDEC)<br />\
    <img src="styles/legend/HectreasconolivosINDEC_12_0.png" /> 0<br />\
    <img src="styles/legend/HectreasconolivosINDEC_12_1.png" /> 1 - 45<br />\
    <img src="styles/legend/HectreasconolivosINDEC_12_2.png" /> 46 - 360<br />\
    <img src="styles/legend/HectreasconolivosINDEC_12_3.png" /> 361 - 7.880<br />\
    <img src="styles/legend/HectreasconolivosINDEC_12_4.png" /> Más de 7.881<br />'
        });
var format_LocalidadesLaRioja_13 = new ol.format.GeoJSON();
var features_LocalidadesLaRioja_13 = format_LocalidadesLaRioja_13.readFeatures(json_LocalidadesLaRioja_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalidadesLaRioja_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalidadesLaRioja_13.addFeatures(features_LocalidadesLaRioja_13);
var lyr_LocalidadesLaRioja_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LocalidadesLaRioja_13, 
                style: style_LocalidadesLaRioja_13,
                interactive: true,
                title: '<img src="styles/legend/LocalidadesLaRioja_13.png" /> Localidades La Rioja'
            });
var format_BERLaRioja_14 = new ol.format.GeoJSON();
var features_BERLaRioja_14 = format_BERLaRioja_14.readFeatures(json_BERLaRioja_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BERLaRioja_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BERLaRioja_14.addFeatures(features_BERLaRioja_14);
var lyr_BERLaRioja_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BERLaRioja_14, 
                style: style_BERLaRioja_14,
                interactive: true,
                title: '<img src="styles/legend/BERLaRioja_14.png" /> BER La Rioja'
            });
var format_BERLaRioja_15 = new ol.format.GeoJSON();
var features_BERLaRioja_15 = format_BERLaRioja_15.readFeatures(json_BERLaRioja_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BERLaRioja_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BERLaRioja_15.addFeatures(features_BERLaRioja_15);
var lyr_BERLaRioja_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BERLaRioja_15, 
                style: style_BERLaRioja_15,
                interactive: true,
                title: '<img src="styles/legend/BERLaRioja_15.png" /> BER La Rioja'
            });
var format_DelegacinLaRioja_16 = new ol.format.GeoJSON();
var features_DelegacinLaRioja_16 = format_DelegacinLaRioja_16.readFeatures(json_DelegacinLaRioja_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DelegacinLaRioja_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DelegacinLaRioja_16.addFeatures(features_DelegacinLaRioja_16);
var lyr_DelegacinLaRioja_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DelegacinLaRioja_16, 
                style: style_DelegacinLaRioja_16,
                interactive: true,
                title: '<img src="styles/legend/DelegacinLaRioja_16.png" /> Delegación La Rioja'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_DepartamentosLaRioja_2.setVisible(true);lyr_ViviendasenreasRuralesINDEC_3.setVisible(true);lyr_PEAINDEC_4.setVisible(true);lyr_CabezasdeovinosMAGyP_5.setVisible(true);lyr_CabezasdeporcinosMAGyP_6.setVisible(true);lyr_CabezasdecaprinosMAGyP_7.setVisible(true);lyr_CabezasdebovinosMAGyP_8.setVisible(true);lyr_HectreasnogalesINDEC_9.setVisible(true);lyr_HectreasVidINDEC_10.setVisible(true);lyr_HectreasduraznerosINDEC_11.setVisible(true);lyr_HectreasconolivosINDEC_12.setVisible(true);lyr_LocalidadesLaRioja_13.setVisible(true);lyr_BERLaRioja_14.setVisible(true);lyr_BERLaRioja_15.setVisible(true);lyr_DelegacinLaRioja_16.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleHybrid_1,lyr_DepartamentosLaRioja_2,lyr_ViviendasenreasRuralesINDEC_3,lyr_PEAINDEC_4,lyr_CabezasdeovinosMAGyP_5,lyr_CabezasdeporcinosMAGyP_6,lyr_CabezasdecaprinosMAGyP_7,lyr_CabezasdebovinosMAGyP_8,lyr_HectreasnogalesINDEC_9,lyr_HectreasVidINDEC_10,lyr_HectreasduraznerosINDEC_11,lyr_HectreasconolivosINDEC_12,lyr_LocalidadesLaRioja_13,lyr_BERLaRioja_14,lyr_BERLaRioja_15,lyr_DelegacinLaRioja_16];
lyr_DepartamentosLaRioja_2.set('fieldAliases', {'Depto.': 'Depto.', });
lyr_ViviendasenreasRuralesINDEC_3.set('fieldAliases', {'Viv. Rur': 'Viv. Rur', });
lyr_PEAINDEC_4.set('fieldAliases', {'PEA': 'PEA', });
lyr_CabezasdeovinosMAGyP_5.set('fieldAliases', {'ovinos': 'ovinos', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldAliases', {'porcinos': 'porcinos', });
lyr_CabezasdecaprinosMAGyP_7.set('fieldAliases', {'caprinos': 'caprinos', });
lyr_CabezasdebovinosMAGyP_8.set('fieldAliases', {'bovinos': 'bovinos', });
lyr_HectreasnogalesINDEC_9.set('fieldAliases', {'nogal': 'nogal', });
lyr_HectreasVidINDEC_10.set('fieldAliases', {'vid': 'vid', });
lyr_HectreasduraznerosINDEC_11.set('fieldAliases', {'durazno': 'durazno', });
lyr_HectreasconolivosINDEC_12.set('fieldAliases', {'olivo': 'olivo', });
lyr_LocalidadesLaRioja_13.set('fieldAliases', {'localidad': 'localidad', 'personas': 'personas', });
lyr_BERLaRioja_14.set('fieldAliases', {'Num.': 'Num.', 'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Admin': 'Admin', });
lyr_BERLaRioja_15.set('fieldAliases', {'Num.': 'Num.', 'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Admin': 'Admin', });
lyr_DelegacinLaRioja_16.set('fieldAliases', {'ID': 'ID', 'localidad': 'localidad', });
lyr_DepartamentosLaRioja_2.set('fieldImages', {'Depto.': '', });
lyr_ViviendasenreasRuralesINDEC_3.set('fieldImages', {'Viv. Rur': 'TextEdit', });
lyr_PEAINDEC_4.set('fieldImages', {'PEA': 'TextEdit', });
lyr_CabezasdeovinosMAGyP_5.set('fieldImages', {'ovinos': 'TextEdit', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldImages', {'porcinos': 'TextEdit', });
lyr_CabezasdecaprinosMAGyP_7.set('fieldImages', {'caprinos': 'TextEdit', });
lyr_CabezasdebovinosMAGyP_8.set('fieldImages', {'bovinos': 'TextEdit', });
lyr_HectreasnogalesINDEC_9.set('fieldImages', {'nogal': 'TextEdit', });
lyr_HectreasVidINDEC_10.set('fieldImages', {'vid': 'TextEdit', });
lyr_HectreasduraznerosINDEC_11.set('fieldImages', {'durazno': 'TextEdit', });
lyr_HectreasconolivosINDEC_12.set('fieldImages', {'olivo': 'TextEdit', });
lyr_LocalidadesLaRioja_13.set('fieldImages', {'localidad': 'TextEdit', 'personas': 'TextEdit', });
lyr_BERLaRioja_14.set('fieldImages', {'Num.': 'TextEdit', 'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Admin': 'TextEdit', });
lyr_BERLaRioja_15.set('fieldImages', {'Num.': 'TextEdit', 'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Admin': 'TextEdit', });
lyr_DelegacinLaRioja_16.set('fieldImages', {'ID': 'TextEdit', 'localidad': 'TextEdit', });
lyr_DepartamentosLaRioja_2.set('fieldLabels', {'Depto.': 'inline label', });
lyr_ViviendasenreasRuralesINDEC_3.set('fieldLabels', {'Viv. Rur': 'inline label', });
lyr_PEAINDEC_4.set('fieldLabels', {'PEA': 'inline label', });
lyr_CabezasdeovinosMAGyP_5.set('fieldLabels', {'ovinos': 'inline label', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldLabels', {'porcinos': 'inline label', });
lyr_CabezasdecaprinosMAGyP_7.set('fieldLabels', {'caprinos': 'inline label', });
lyr_CabezasdebovinosMAGyP_8.set('fieldLabels', {'bovinos': 'inline label', });
lyr_HectreasnogalesINDEC_9.set('fieldLabels', {'nogal': 'inline label', });
lyr_HectreasVidINDEC_10.set('fieldLabels', {'vid': 'inline label', });
lyr_HectreasduraznerosINDEC_11.set('fieldLabels', {'durazno': 'inline label', });
lyr_HectreasconolivosINDEC_12.set('fieldLabels', {'olivo': 'inline label', });
lyr_LocalidadesLaRioja_13.set('fieldLabels', {'localidad': 'inline label', 'personas': 'inline label', });
lyr_BERLaRioja_14.set('fieldLabels', {'Num.': 'inline label', 'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Admin': 'inline label', });
lyr_BERLaRioja_15.set('fieldLabels', {'Num.': 'inline label', 'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Admin': 'inline label', });
lyr_DelegacinLaRioja_16.set('fieldLabels', {'ID': 'no label', 'localidad': 'inline label', });
lyr_DelegacinLaRioja_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});