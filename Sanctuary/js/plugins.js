// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"TitleCommandPosition","status":true,"description":"Changes the position of the title command window.","parameters":{"Offset X":"0","Offset Y":"0","Width":"240","Background":"0"}},
{"name":"MadeWithMv","status":true,"description":"Show a Splash Screen \"Made with MV\" and/or a Custom Splash Screen before going to main screen.","parameters":{"Show Made With MV":"true","Made with MV Image":"MadeWithMv","Show Custom Splash":"false","Custom Image":"","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160"}},
{"name":"KhasCore","status":true,"description":"[2.0] Required by Khas plugins.","parameters":{}},
{"name":"KhasGraphics","status":true,"description":"[1.1] Required by Khas graphics plugins.","parameters":{}},
{"name":"KhasUltraLighting","status":true,"description":"[4.2] Adds lighting and real-time shadows to your game.","parameters":{"Custom Blending":"ON","Transfer Reset":"OFF","Auto Battle Lighting":"ON"}},
{"name":"Q+","status":true,"description":"<QPlus> (Should go above all Q Plugins)\r\nSome small changes to MV for easier plugin development.","parameters":{"Quick Test":"true","Default Enabled Switches":"[]","Ignore Mouse when inactive":"false"}},
{"name":"QMovement","status":true,"description":"<QMovement>\r\nMore control over character movement","parameters":{"Main Settings":"","Grid":"1","Tile Size":"48","Off Grid":"true","Optional Settings":"","Smart Move":"2","Mid Pass":"false","Move on click":"true","Diagonal":"true","Diagonal Speed":"0","Colliders":"","Player Collider":"{\"Type\":\"box\",\"Width\":\"24\",\"Height\":\"24\",\"Offset X\":\"12\",\"Offset Y\":\"18\"}","Event Collider":"{\"Type\":\"circle\",\"Width\":\"24\",\"Height\":\"24\",\"Offset X\":\"12\",\"Offset Y\":\"18\"}","Presets":"[\"{\\\"ID\\\":\\\"c1\\\",\\\"Type\\\":\\\"circle\\\",\\\"Width\\\":\\\"24\\\",\\\"Height\\\":\\\"24\\\",\\\"Offset X\\\":\\\"12\\\",\\\"Offset Y\\\":\\\"18\\\"}\"]","Debug Settings":"","Show Colliders":"false"}},
{"name":"QMovement+","status":true,"description":"<QMCollisionMap>\r\nQMovement Addon: Adds image collision map feature","parameters":{"Scan Size":"4","Folder":"img/lights/"}},
{"name":"QSight","status":true,"description":"<QSight>\r\nReal time line of sight","parameters":{"See Through Terrain":"[]","Show":"false"}},
{"name":"Eli_Book","status":true,"description":"♦5.3.1♦ Essential plugin for all Eli plugins.","parameters":{"engine":"{\"pixelPerfect\":\"false\",\"styleOverflow\":\"false\",\"--- MZ ONLY ---\":\"\",\"disableEffekseer\":\"false\"}","playtest":"{\"openDevTools\":\"false\",\"nwWindowPos\":\"0, 0\",\"--- MZ ONLY ---\":\"\",\"gameFocus\":\"true\",\"quickRestart\":\"true\"}"}},
{"name":"Eli_ButtonCommonEvents","status":true,"description":"♦5.2.3♦ Bind common events to keyboard/gamepad buttons!","parameters":{"presetKeys":"[\"{\\\"key\\\":\\\"y\\\",\\\"id\\\":\\\"3\\\",\\\"isParallel\\\":\\\"false\\\",\\\"overwrite\\\":\\\"true\\\"}\",\"{\\\"key\\\":\\\"u\\\",\\\"id\\\":\\\"2\\\",\\\"isParallel\\\":\\\"false\\\",\\\"overwrite\\\":\\\"true\\\"}\",\"{\\\"key\\\":\\\"z\\\",\\\"id\\\":\\\"4\\\",\\\"isParallel\\\":\\\"false\\\",\\\"overwrite\\\":\\\"true\\\"}\",\"{\\\"key\\\":\\\"shift\\\",\\\"id\\\":\\\"6\\\",\\\"isParallel\\\":\\\"false\\\",\\\"overwrite\\\":\\\"true\\\"}\",\"{\\\"key\\\":\\\"a\\\",\\\"id\\\":\\\"14\\\",\\\"isParallel\\\":\\\"false\\\",\\\"overwrite\\\":\\\"true\\\"}\"]","presetKeysGamePad":"[]"}},
{"name":"GALV_MessageSoundEffects","status":true,"description":"Play sound effects when during Show Text event commands.","parameters":{"Delay Time":"5","Default Talk SE":"Cursor1,80,150","Default Confirm SE":"Cursor2,80,150","-----------":"","Quick SE 1":"","Quick SE 2":"","Quick SE 3":"","Quick SE 4":""}},
{"name":"SRD_SuperToolsEngine","status":true,"description":"The heart of all maker-style plugins; it adds a playtesting editor that can be opened with F12.","parameters":{"Connect Editor":"true","Auto Open Window":"false","Auto Move Window":"true","Menu Editor Exempt List":"[\"Window_BattleLog\",\"Window_MapName\"]"}},
{"name":"SRD_HUDMaker","status":true,"description":"Allows developers to create their own map-based HUD through an in-game GUI window!","parameters":{"Active Updating":"false","Show During Events":"transparent","Map Global Condition":"","Battle Global Condition":"","Disable Delete Key":"true"}},
{"name":"YEP_GabWindow","status":true,"description":"v1.04 The Gab Window functions as a window for random\njibber jabber that does not require a message window.","parameters":{"---General---":"","Gab Font Name":"GameFont","Gab Font Size":"28","Character X Pos":"36","Character Y Pos":"60","Base Wait Time":"90","Time Per Character":"4","Fade Rate":"16","Anti-Repeat":"true","---Map---":"","Map Y Location":"72","Map Dim Color 1":"rgba(0, 0, 0, 0.6)","Map Dim Color 2":"rgba(0, 0, 0, 0.3)","---Battle---":"","Battle Y Location":"108","Battle Dim Color 1":"rgba(0, 0, 0, 0.6)","Battle Dim Color 2":"rgba(0, 0, 0, 0)"}},
{"name":"GALV_DisableDash","status":true,"description":"Disable dash in your game.","parameters":{"Disable Option":"true"}},
{"name":"GALV_MapProjectiles","status":true,"description":"(v.1.8) Create projectiles that can interact with the map and map characters","parameters":{"Tile Size":"48","Fade Speed":"40","Disable Mouse Move":"false","Premade 1":"-1,0,2,4,'bullet2',1,'|s(B:on)',[20],[],3,1,10","Premade 2":"-1,0,8,6,'bulletBlast',1,'|c(1),e,S(1:on)',[1],[],3,1,60","Premade 3":"","Premade 4":"","Premade 5":"","Premade 6":"","Premade 7":"","Premade 8":"","Premade 9":"","Premade 10":"","Premade 11":"","Premade 12":"","Premade 13":"","Premade 14":"","Premade 15":"","Premade 16":"","Premade 17":"","Premade 18":"","Premade 19":"","Premade 20":""}},
{"name":"AG_CharacterNoisySteps","status":true,"description":"Characters will produce stepping sound effects when they move on the map terrain.","parameters":{"Player Step SE Volume":"5","Events Step SE Volume":"5","Step SE Pitch":"100","Pitch Variance":"5","Pan Variance":"40","Disable Player Noisy Steps Switch ID":"0","Disable Events Noisy Steps Switch ID":"0","Terrain Tag 0 SE":"","Terrain Tag 1 SE":"Move1","Terrain Tag 2 SE":"Move2","Terrain Tag 3 SE":"carpet","Terrain Tag 4 SE":"grass","Terrain Tag 5 SE":"Move1","Terrain Tag 6 SE":"wood","Terrain Tag 7 SE":"dirt","Size Tag Pitch Increment":"40","Special Tag 1 SE":"robot","Special Tag 2 SE":"wheels","Special Tag 3 SE":"claws","Special Tag 4 SE":"chains","Special Tag 5 SE":"dragged\r"}},
{"name":"DMY_SkipVideo","status":true,"description":"Skip video on key press","parameters":{"Disabler switch":"0"}},
{"name":"InteractiveMap","status":true,"description":"Pivert Interactive map.","parameters":{"Images directory":"img/map","Font size":"16"}},
{"name":"TouchInputUpdate","status":true,"description":"Pivert Touch Input Update.","parameters":{}},
{"name":"removefrommenu","status":true,"description":"","parameters":{}},
{"name":"SRD_GoldWindowCustomizer","status":true,"description":"A Plugin that allows you to manipulate the information presented on the Gold Window.","parameters":{"Rows":"0","Columns":"0","X":"this._goldWindow.x","Y":"this._commandWindow.height","Width":"240 * this.infoCols()","Height":"this.fittingHeight(this.infoRows())","Font Size":"28","== Labels ==":"","Battle Label":"Battles","Map Label":"(Map)","D-Map Label":"(Map)","BGM Label":"(BGM)","No BGM Label":"None","Time Label":"(Time)","ON Label":"ON","OFF Label":"OFF","== Information ==":"","Information 1":"gold","Information 2":"","Information 3":"","Information 4":"","Information 5":"","Information 6":"","Information 7":"","Information 8":"","Information 9":"","Information 10":"","Information 11":"","Information 12":"","Information 13":"","Information 14":"","Information 15":"","Information 16":"","Information 17":"","Information 18":"","Information 19":"","Information 20":"","Information 21":"","Information 22":"","Information 23":"","Information 24":"","Information 25":"","Information 26":"","Information 27":"","Information 28":"","Information 29":"","Information 30":"","Information 31":"","Information 32":"","Information 33":"","Information 34":"","Information 35":"","Information 36":"","Information 37":"","Information 38":"","Information 39":"","Information 40":"","Information 41":"","Information 42":"","Information 43":"","Information 44":"","Information 45":"","Information 46":"","Information 47":"","Information 48":"","Information 49":"","Information 50":""}}
];
