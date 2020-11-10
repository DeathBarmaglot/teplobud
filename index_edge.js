/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: '_1',
                type: 'image',
                rect: ['-2px', '-2px','324px','182px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.png",'0px','0px']
            },
            {
                id: 't1',
                type: 'image',
                rect: ['-997px', '-251px','2230px','580px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t1.svg",'0px','0px','65%','65%'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['-65px', '-51px','212px','245px','auto', 'auto'],
                fill: ["rgba(45,167,234,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                transform: [[],['13'],[],['0.96963','1.13722']]
            },
            {
                id: '_4',
                type: 'image',
                rect: ['-2px', '-2px','306px','181px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"4.png",'0px','0px']
            },
            {
                id: '_2Copy',
                type: 'image',
                rect: ['25px', '110px','521px','56px','auto', 'auto'],
                clip: ['rect(0px 532.5562744140625px 56px 261.5864562988281px)'],
                fill: ["rgba(0,0,0,0)",im+"2.png",'0px','0px'],
                transform: [[],[],[],['1.1','1.1']]
            },
            {
                id: '_2',
                type: 'image',
                rect: ['25px', '13px','521px','56px','auto', 'auto'],
                clip: ['rect(0px 259.8290100097656px 56px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"2.png",'0px','0px'],
                transform: [[],[],[],['1.1','1.1']]
            },
            {
                id: 'Text2Copy',
                type: 'text',
                rect: ['-12px', '28px','324px','159px','auto', 'auto'],
                text: "ВСЕ ДЛЯ УТЕПЛЕННЯ ФАСАДІВ: <br><br>пінопласт, мінвата,  <br>термоблок,  сітка,  грунтівка,  дюбеля,  клеєві суміші<br><br>ГІДРОІЗОЛЯЦІЯ <br>ФУНДАМЕНТІВ<br>",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(255,255,255,1)", "900", "none", "normal"]
            },
            {
                id: 't3',
                type: 'image',
                rect: ['-1244px', '-686px','2790px','1550px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t3.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['12px', '70px','229px','159px','auto', 'auto'],
                text: "Паливні <br>брикети <br>Piny&amp;Key, <br>Ruf ",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 22, "rgba(255,255,255,1)", "900", "none", "normal"]
            },
            {
                id: 't2',
                type: 'image',
                rect: ['-530px', '-406px','1196px','1045px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t2.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'Text3',
                type: 'text',
                rect: ['22px', '81px','346px','123px','auto', 'auto'],
                text: "ДЕКОРАТИВНА ПЛИТКА",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 22, "rgba(1,1,1,1.00)", "900", "none", "normal"]
            },
            {
                id: 't4',
                type: 'image',
                rect: ['-198', '107','2685px','181px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t4.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: '_3',
                type: 'image',
                rect: ['0px', '-1px','300px','219px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3.png",'0px','0px']
            },
            {
                id: '_3Copy',
                type: 'image',
                rect: ['300px', '-39px','300px','219px','auto', 'auto'],
                clip: ['rect(187.5px 300px 219px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"3.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_t1}": [
                ["style", "top", '-251px'],
                ["style", "background-size", [65,65], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "left", '-997px']
            ],
            "${__3}": [
                ["style", "top", '-1px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "height", '219px']
            ],
            "${_Text2Copy}": [
                ["style", "top", '49px'],
                ["style", "width", '324px'],
                ["style", "text-align", 'center'],
                ["style", "clip", [0,324,-41,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "line-height", '20px'],
                ["style", "opacity", '1'],
                ["style", "left", '-10px'],
                ["style", "font-size", '18px']
            ],
            "${__4}": [
                ["style", "top", '-2px'],
                ["style", "height", '181px'],
                ["style", "opacity", '0'],
                ["style", "left", '-2px'],
                ["style", "width", '306px']
            ],
            "${_Text3}": [
                ["style", "top", '81px'],
                ["transform", "scaleY", '0'],
                ["color", "color", 'rgba(1,1,1,1.00)'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '22px'],
                ["style", "width", '346px']
            ],
            "${__2Copy}": [
                ["style", "-webkit-transform-origin", [55,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [55,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [55,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [55,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [55,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '54px'],
                ["style", "width", '521px'],
                ["style", "top", '110px'],
                ["transform", "scaleY", '1.1'],
                ["style", "height", '56px'],
                ["style", "clip", [0,532.5562744140625,56,261.5864562988281], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Text2}": [
                ["style", "top", '70px'],
                ["style", "opacity", '1'],
                ["style", "left", '5px'],
                ["style", "clip", [0,229,-36,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${__2}": [
                ["style", "-webkit-transform-origin", [55,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [55,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [55,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [55,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [55,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '1'],
                ["style", "left", '-270px'],
                ["style", "width", '521px'],
                ["style", "top", '13px'],
                ["transform", "scaleY", '1.1'],
                ["style", "height", '56px'],
                ["style", "clip", [0,259.8290100097656,56,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_TextCopy}": [
                ["style", "top", '5px'],
                ["style", "opacity", '1'],
                ["style", "font-weight", '900'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-family", '\'Arial Black\', Gadget, sans-serif'],
                ["style", "left", '4px'],
                ["style", "font-size", '21px']
            ],
            "${__1}": [
                ["style", "top", '-2px'],
                ["style", "height", '182px'],
                ["style", "opacity", '0'],
                ["style", "left", '-2px'],
                ["style", "width", '324px']
            ],
            "${__3Copy}": [
                ["style", "top", '-39px'],
                ["style", "clip", [187.5,300,219,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "height", '219px'],
                ["style", "opacity", '0'],
                ["style", "left", '300px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '300px'],
                ["style", "height", '180px'],
                ["style", "overflow", 'hidden']
            ],
            "${_t3}": [
                ["style", "top", '-668px'],
                ["style", "opacity", '0'],
                ["style", "left", '-1244px'],
                ["style", "clip", [0,2790,200,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(254,0,0,1.00)'],
                ["transform", "scaleY", '1.13722'],
                ["transform", "rotateZ", '13deg'],
                ["transform", "scaleX", '0.96963'],
                ["style", "opacity", '0'],
                ["style", "left", '-65px'],
                ["style", "top", '-51px']
            ],
            "${_t2}": [
                ["style", "top", '-406px'],
                ["style", "left", '-530px'],
                ["style", "height", '1045px'],
                ["style", "opacity", '1'],
                ["style", "clip", [0,1196,-65,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '1196px']
            ],
            "${_t4}": [
                ["style", "top", '87px'],
                ["style", "height", '181px'],
                ["style", "opacity", '0'],
                ["style", "left", '-818px'],
                ["style", "width", '2685px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 31250,
            autoPlay: true,
            timeline: [
                { id: "eid141", tween: [ "style", "${_t3}", "clip", [0,2790,1550,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,2790,200,0]}], position: 7145, duration: 2216, easing: "easeOutCubic" },
                { id: "eid1", tween: [ "transform", "${_Rectangle}", "scaleX", '2.76781', { fromValue: '0.96963'}], position: 6473, duration: 744, easing: "easeOutCubic" },
                { id: "eid14", tween: [ "transform", "${_Rectangle}", "scaleX", '0', { fromValue: '2.76781'}], position: 10213, duration: 744, easing: "easeOutCubic" },
                { id: "eid63", tween: [ "style", "${__4}", "opacity", '1', { fromValue: '0'}], position: 22698, duration: 1052, easing: "easeOutCubic" },
                { id: "eid65", tween: [ "style", "${__4}", "opacity", '0', { fromValue: '1'}], position: 28224, duration: 3026, easing: "easeOutCubic" },
                { id: "eid147", tween: [ "style", "${_t4}", "top", '2px', { fromValue: '87px'}], position: 16905, duration: 1246, easing: "easeOutCubic" },
                { id: "eid51", tween: [ "style", "${__2}", "opacity", '0', { fromValue: '1'}], position: 22422, duration: 276, easing: "easeOutCubic" },
                { id: "eid144", tween: [ "style", "${_t3}", "opacity", '1', { fromValue: '0'}], position: 7145, duration: 521, easing: "easeOutCubic" },
                { id: "eid143", tween: [ "style", "${_t3}", "opacity", '0', { fromValue: '1'}], position: 10213, duration: 521, easing: "easeOutCubic" },
                { id: "eid108", tween: [ "style", "${__2}", "left", '33px', { fromValue: '-270px'}], position: 16905, duration: 500, easing: "easeOutCubic" },
                { id: "eid95", tween: [ "style", "${__2}", "left", '-270px', { fromValue: '33px'}], position: 21750, duration: 500, easing: "easeOutCubic" },
                { id: "eid145", tween: [ "style", "${_t3}", "top", '-686px', { fromValue: '-668px'}], position: 7145, duration: 744, easing: "easeOutCubic" },
                { id: "eid155", tween: [ "style", "${__3Copy}", "opacity", '1', { fromValue: '0'}], position: 10734, duration: 766, easing: "easeOutCubic" },
                { id: "eid163", tween: [ "style", "${__3Copy}", "opacity", '0', { fromValue: '1'}], position: 16405, duration: 500, easing: "easeOutCubic" },
                { id: "eid154", tween: [ "style", "${__3}", "opacity", '1', { fromValue: '0'}], position: 10734, duration: 766, easing: "easeOutCubic" },
                { id: "eid164", tween: [ "style", "${__3}", "opacity", '0', { fromValue: '1'}], position: 16405, duration: 500, easing: "easeOutCubic" },
                { id: "eid134", tween: [ "style", "${_t2}", "opacity", '0', { fromValue: '1'}], position: 6103, duration: 521, easing: "easeOutCubic" },
                { id: "eid103", tween: [ "style", "${__2Copy}", "opacity", '1', { fromValue: '0'}], position: 16905, duration: 276, easing: "easeOutCubic" },
                { id: "eid104", tween: [ "style", "${__2Copy}", "opacity", '0', { fromValue: '1'}], position: 22422, duration: 276, easing: "easeOutCubic" },
                { id: "eid138", tween: [ "style", "${_t2}", "clip", [0,1196,1045,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,1196,-65,0]}], position: 1750, duration: 3250, easing: "easeOutCubic" },
                { id: "eid126", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(254,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(254,0,0,1.00)'}], position: 6103, duration: 0 },
                { id: "eid160", tween: [ "style", "${__3Copy}", "left", '0px', { fromValue: '300px'}], position: 13750, duration: 500, easing: "easeOutCubic" },
                { id: "eid152", tween: [ "style", "${_t4}", "opacity", '1', { fromValue: '0'}], position: 17405, duration: 966, easing: "easeOutCubic" },
                { id: "eid150", tween: [ "style", "${_t4}", "opacity", '0', { fromValue: '1'}], position: 21905, duration: 276, easing: "easeOutCubic" },
                { id: "eid15", tween: [ "style", "${__1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 521, easing: "easeOutCubic" },
                { id: "eid26", tween: [ "style", "${__1}", "opacity", '0', { fromValue: '1'}], position: 6624, duration: 521, easing: "easeOutCubic" },
                { id: "eid146", tween: [ "style", "${_t4}", "left", '-1192px', { fromValue: '-818px'}], position: 16905, duration: 1246, easing: "easeOutCubic" },
                { id: "eid109", tween: [ "style", "${__2Copy}", "left", '-253px', { fromValue: '54px'}], position: 16905, duration: 500, easing: "easeOutCubic" },
                { id: "eid102", tween: [ "style", "${__2Copy}", "left", '54px', { fromValue: '-253px'}], position: 21750, duration: 500, easing: "easeOutCubic" },
                { id: "eid5", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 6473, duration: 521, easing: "easeOutCubic" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-11969065");
