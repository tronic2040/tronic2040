var express = require('express');
var router = express.Router();
var sqlcon = require('../config.js');4

var request = require('request');

var vegdata = {
  "data": [{
          "type": "crops",
          "id": "554048243736360003070000",
          "attributes": {
              "name": "Fuji Apple",
              "slug": "fuji-apple",
              "binomial_name": "Malus pumila",
              "common_names": ["Fuji", "Fuji apple"],
              "description": "Fuji apples are a hybrid developed in Fujisaki, Japan in the late 1930s by crossing Red Delicious and Virginia Ralls Genet apples. The tree produces round, medium to large, thick-skinned fruits that are red with a yellow blush and faint stripes. The apples have a crisp texture and sweetness, somewhat reminiscent of Asian pears. They can be eaten fresh, baked, roasted, or made into cider. Fuji apples have a remarkably long shelf life of nearly 12 months. The trees have a lower winter-chill requirement than most other apple varieties. Blossoms are white to pinkish. Tree requires pollination by a tree of another variety with the same bloom period within 50 feet (Gala, Golden Delicious, Jonathan, Red Delicious, Lodi, Braeburn). Apples are propagated through grafting because seeds do not breed true. Semi-dwarf and standard rootstocks are available.",
              "sun_requirements": "Full Sun",
              "sowing_method": "Transplant bare-root plant",
              "spread": 360,
              "row_spacing": 900,
              "height": 360,
              "processing_pictures": 0,
              "guides_count": 1,
              "main_image_path": "/assets/baren_field_square-4a827e5f09156962937eb100e4484f87e1e788f28a7c9daefe2a9297711a562a.jpg",
              "taxon": "Species",
              "tags_array": [],
              "growing_degree_days": null,
              "svg_icon": "\u003c?xml version=\"1.0\" encoding=\"utf-8\"?\u003e\n\u003c!-- Generator: Adobe Illustrator 20.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\u003e\n\u003csvg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 500 500\" style=\"enable-background:new 0 0 500 500;\" xml:space=\"preserve\"\u003e\n\u003cstyle type=\"text/css\"\u003e\n\t.st0{fill:#B47E22;}\n\t.st1{fill:#442105;}\n\t.st2{fill:#BF793A;stroke:#590000;stroke-width:4;stroke-miterlimit:10;}\n\t.st3{fill:#528B1C;stroke:#123C08;stroke-width:3;stroke-miterlimit:10;}\n\t.st4{fill:#BF793A;stroke:#590000;stroke-width:4;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st5{fill:#FDE270;}\n\t.st6{fill:#FBDE74;}\n\t.st7{fill:#F8D96C;}\n\t.st8{fill:#F5D464;}\n\t.st9{fill:#F2CF5C;}\n\t.st10{fill:#EFCA54;}\n\t.st11{fill:#D50000;}\n\t.st12{fill:#ED3A00;}\n\t.st13{fill:#D50000;stroke:#590000;stroke-width:6;stroke-miterlimit:10;}\n\t.st14{fill:#487E41;}\n\t.st15{fill:#123C08;}\n\t.st16{fill:#D50000;stroke:#590000;stroke-width:3;stroke-miterlimit:10;}\n\t.st17{fill:none;stroke:#FFFFFF;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st18{fill:#FFFFFF;}\n\t.st19{fill:#7FC731;stroke:#246901;stroke-width:3;stroke-miterlimit:10;}\n\t.st20{fill:#7FC731;stroke:#246901;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st21{fill:none;stroke:#246901;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st22{fill:#292F37;}\n\t.st23{fill:#577B1D;}\n\t.st24{fill:#AD2F26;}\n\t.st25{fill:#264415;}\n\t.st26{fill:#539243;}\n\t.st27{fill:#7F415B;}\n\t.st28{fill:#246901;}\n\t.st29{fill:#8A1100;}\n\t.st30{fill:#5EC865;}\n\t.st31{fill:#007500;}\n\t.st32{fill:#FF3D50;}\n\t.st33{fill:none;stroke:#246901;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st34{fill:none;stroke:#FFFFFF;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st35{fill:#FF3D50;stroke:#CC3248;stroke-miterlimit:10;}\n\t.st36{fill:none;stroke:#007500;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st37{fill:none;stroke:#264415;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st38{fill:#528B1C;}\n\t.st39{fill:#20420B;}\n\t.st40{fill:#314773;}\n\t.st41{fill:#7389B5;}\n\t.st42{fill:#528B1C;stroke:#20420B;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st43{fill:none;stroke:#314773;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st44{fill:#00FFFF;}\n\t.st45{fill:#22B473;stroke:#184C28;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st46{fill:#2E368E;}\n\t.st47{fill:#9A0D90;}\n\t.st48{fill:#161542;}\n\t.st49{fill:#251749;}\n\t.st50{fill:none;stroke:#FBA954;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st51{fill:#61303F;}\n\t.st52{fill:#EEB683;}\n\t.st53{fill:#1B631A;}\n\t.st54{fill:#FBA954;}\n\t.st55{fill:#ECD8A1;}\n\t.st56{fill:#DC0900;stroke:#184C28;stroke-width:1.7008;stroke-miterlimit:10;}\n\t.st57{fill:none;stroke:#007500;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st58{fill:#F10A00;stroke:#8A1100;stroke-miterlimit:10;}\n\t.st59{fill:none;stroke:#007500;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st60{fill:#F10A00;}\n\t.st61{fill:#7389B5;stroke:#314773;stroke-miterlimit:10;}\n\t.st62{fill:none;stroke:#314773;stroke-miterlimit:10;}\n\t.st63{opacity:0.4;fill:#314773;}\n\t.st64{fill:#7389B5;stroke:#314773;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st65{fill:#8BA3CD;stroke:#314773;stroke-miterlimit:10;}\n\t.st66{fill:#5A7098;}\n\t.st67{fill:none;stroke:#FFFFFF;stroke-width:8;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st68{fill:#FF3D50;stroke:#AD2F26;stroke-miterlimit:10;}\n\t.st69{fill:#FF3D50;stroke:#CC3248;stroke-width:1.058;stroke-miterlimit:10;}\n\t.st70{fill:#539243;stroke:#246901;stroke-width:3;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st71{clip-path:url(#SVGID_2_);}\n\t.st72{fill:url(#SVGID_3_);}\n\t.st73{fill:none;stroke:#CC652B;stroke-width:1.4939;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st74{fill:none;stroke:#CC652B;stroke-width:0.8407;stroke-miterlimit:10;}\n\t.st75{fill:#F9C153;}\n\t.st76{fill:#FC7351;stroke:#CC652B;stroke-width:3;stroke-miterlimit:10;}\n\t.st77{fill:none;stroke:#994A22;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st78{fill:none;stroke:#F9C153;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st79{opacity:0.8;fill:none;stroke:#F9C153;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st80{opacity:0.6;fill:none;stroke:#F9C153;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st81{opacity:0.4;fill:none;stroke:#F9C153;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st82{opacity:0.2;fill:none;stroke:#F9C153;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st83{fill:none;stroke:#994A22;stroke-width:3;stroke-miterlimit:10;}\n\t.st84{fill:#7FC731;stroke:#246901;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st85{fill:none;stroke:#ADD980;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st86{fill:#ADD980;}\n\t.st87{fill:#FC7351;}\n\t.st88{fill:#F8B05C;}\n\t.st89{fill:#F8A15A;}\n\t.st90{fill:#F99259;}\n\t.st91{fill:#F98357;}\n\t.st92{fill:#994A22;}\n\t.st93{fill:#7FC731;}\n\t.st94{fill:#FDE3DD;}\n\t.st95{fill:#F8B413;stroke:#7A4100;stroke-width:6;stroke-miterlimit:10;}\n\t.st96{fill:#487E41;stroke:#123C08;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st97{opacity:0.8;fill:none;stroke:#FFFFFF;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st98{fill:none;stroke:#123C08;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st99{opacity:0.8;fill:#FFFFFF;}\n\t.st100{fill:#F8B413;stroke:#7A4100;stroke-miterlimit:10;}\n\t.st101{opacity:0.7;fill:none;stroke:#FFFFFF;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st102{fill:none;stroke:#7A4100;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st103{opacity:0.7;fill:none;stroke:#AD2F26;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st104{opacity:0.5;fill:none;stroke:#AD2F26;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st105{opacity:0.3;fill:none;stroke:#AD2F26;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st106{opacity:0.1;fill:none;stroke:#AD2F26;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st107{opacity:0.7;fill:#FFFFFF;}\n\t.st108{fill:#DAE5D9;}\n\t.st109{fill:#F8B413;}\n\t.st110{fill:#FCE8BB;}\n\t.st111{fill:#C25729;}\n\t.st112{fill:#D1722A;}\n\t.st113{fill:#E08B2C;}\n\t.st114{fill:#EFA62E;}\n\t.st115{fill:#7A4100;}\n\t.st116{fill:none;stroke:#487E41;stroke-width:2;stroke-miterlimit:10;}\n\t.st117{fill:#D50000;stroke:#590000;stroke-miterlimit:10;}\n\t.st118{fill:#6BB25F;}\n\t.st119{fill:#590000;}\n\t.st120{fill:#7F0603;}\n\t.st121{fill:#BF793A;stroke:#590000;stroke-width:3;stroke-miterlimit:10;}\n\t.st122{fill:none;stroke:#590000;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st123{fill:none;stroke:#590000;stroke-miterlimit:10;}\n\t.st124{fill:#BF793A;stroke:#590000;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st125{fill:#6EB226;}\n\t.st126{fill:none;stroke:#123C08;stroke-width:3;stroke-miterlimit:10;}\n\t.st127{fill:#BF793A;}\n\t.st128{fill:#970231;stroke:#590000;stroke-width:3;stroke-miterlimit:10;}\n\t.st129{fill:#AF96CB;}\n\t.st130{fill:#9C325F;}\n\t.st131{opacity:0.5;fill:#AF96CB;}\n\t.st132{fill:none;stroke:#590000;stroke-width:3;stroke-miterlimit:10;}\n\t.st133{fill:#D23841;}\n\t.st134{fill:none;stroke:#9C325F;stroke-miterlimit:10;}\n\t.st135{fill:#5A9800;stroke:#225A00;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st136{opacity:0.4;fill:none;stroke:#FFFFFF;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st137{fill:none;stroke:#225A00;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st138{opacity:0.4;fill:#FFFFFF;}\n\t.st139{fill:#970231;}\n\t.st140{opacity:0.5;}\n\t.st141{fill:#DFB3C1;}\n\t.st142{fill:#5A9800;}\n\t.st143{fill:#9DC06B;}\n\t.st144{fill:#225A00;}\n\t.st145{fill:none;stroke:#9DC06B;stroke-width:3;stroke-miterlimit:10;}\n\t.st146{fill:none;stroke:#9DC06B;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st147{fill:none;stroke:#9DC06B;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st148{fill:#E73123;stroke:#8E1A00;stroke-width:3;stroke-miterlimit:10;}\n\t.st149{fill:#E73123;stroke:#8E1A00;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st150{fill:#E73123;stroke:#8E1A00;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st151{fill:#F5BA6B;}\n\t.st152{opacity:0.7;fill:#F5BA6B;}\n\t.st153{fill:none;stroke:#8E1A00;stroke-width:3;stroke-miterlimit:10;}\n\t.st154{fill:none;stroke:#8E1A00;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st155{fill:#E73123;}\n\t.st156{fill:#EF915B;}\n\t.st157{fill:#8E1A00;}\n\t.st158{fill:#BE4228;}\n\t.st159{fill:#D3954B;}\n\t.st160{fill:#CD8143;}\n\t.st161{fill:#C76C3C;}\n\t.st162{fill:#C25735;}\n\t.st163{fill:#7F2A1C;}\n\t.st164{fill:#DAAB4A;}\n\u003c/style\u003e\n\u003cg id=\"Layer_1\"\u003e\n\t\u003cpath class=\"st158\" d=\"M459.8,252.5c0,149.2-67.1,234-207.3,234S45.2,363.1,45.2,252.5S112.3,86,252.5,86S459.8,141.9,459.8,252.5z\n\t\t\"/\u003e\n\t\u003cpath class=\"st18\" d=\"M205.7,168.5c-0.1,0-0.3,0-0.4,0c-15.9-1.7-31.6-4.3-46.7-7.7c-2.1-0.5-3.4-2.5-2.9-4.6\n\t\tc0.5-2.1,2.5-3.4,4.6-2.9c14.9,3.3,30.3,5.8,45.9,7.5c2.1,0.2,3.7,2.1,3.4,4.3C209.3,167,207.6,168.5,205.7,168.5z\"/\u003e\n\t\u003cpath class=\"st18\" d=\"M253.6,171c-9.6,0-19.3-0.3-28.8-0.9c-2.1-0.1-3.8-2-3.6-4.1c0.1-2.1,2-3.8,4.1-3.6\n\t\tc9.3,0.6,18.8,0.9,28.3,0.9c2.1,0,3.9,1.7,3.9,3.9S255.8,171,253.6,171z\"/\u003e\n\t\u003ccircle class=\"st18\" cx=\"140.6\" cy=\"152.5\" r=\"4.2\"/\u003e\n\t\u003cpath class=\"st159\" d=\"M363,454.9c32.8-18.7,56.5-47.3,71.4-85c10.4-36.4,15.7-78.2,15.7-125.1c0-16.1-1.1-31.3-3.4-45.7\n\t\tc-9.2-33-27.8-58.3-56.1-76.1c23.8,30.5,35.4,70.6,35.4,121.8c0,90.9-20.4,160.6-60.6,207.4C364.5,453.2,363.7,454,363,454.9z\"/\u003e\n\t\u003cpath class=\"st160\" d=\"M372.5,452c35.8-50.4,54-119.9,54-207.1c0-47.9-10-88.3-29.7-120.8c-14.4-9.8-31.4-17.5-51.1-23.1\n\t\tc38.2,32.2,56.7,79.3,56.7,143.9c0,90.9-20.4,160.6-60.6,207.4c-7.2,8.4-15.2,16.1-23.8,23C338.5,470.1,356.7,462.3,372.5,452z\"/\u003e\n\t\u003cpath class=\"st161\" d=\"M338.7,465.4c42.7-51.2,64.3-125.3,64.3-220.5c0-54.7-13-99.5-38.6-134c-13.6-5.5-28.7-9.7-45.5-12.6\n\t\tc0.3,0.3,0.7,0.5,1,0.8c39.8,32.2,59.1,79.9,59.1,145.8c0,90.9-20.4,160.6-60.6,207.4c-7.8,9.1-16.5,17.3-25.8,24.7\n\t\tC309.2,474.6,324.7,470.8,338.7,465.4z\"/\u003e\n\t\u003cpath class=\"st162\" d=\"M296.4,99c39.8,32.2,59.1,79.9,59.1,145.8c0,90.9-20.4,160.6-60.6,207.4c-8.7,10.1-18.3,19.1-28.9,27.1\n\t\tc14.7-0.6,28.4-2.3,41.3-4.9c2-2.1,3.9-4.3,5.8-6.5c44.1-51.2,66.5-126.3,66.5-223.1c0-60-15.6-108.2-46.5-143.7\n\t\tc-13.1-3-27.2-5.2-42.5-6.6C292.6,96,294.5,97.5,296.4,99z\"/\u003e\n\t\u003cpath class=\"st163\" d=\"M252.5,74.5c-145.2,0-218.9,59.9-218.9,178.1c0,60.9,19.5,121.3,53.5,165.6c40.2,52.4,97.4,80.1,165.4,80.1\n\t\tc72.3,0,127.8-21.9,165-65.1c35.7-41.5,53.9-102.3,53.9-180.5C471.4,134.4,397.7,74.5,252.5,74.5z M298,466\n\t\tc5.9-4.8,11.6-10.6,16.9-17.4c1.1-1.4,1.2-3.5,0-4.9c-1.7-1.9-4.5-1.8-6,0.1c-16.3,20.8-35.2,31.3-56.4,31.3\n\t\tc-21.1,0-40.1-10.5-56.4-31.3c-1.3-1.7-3.7-2-5.4-0.7c-1.7,1.3-2,3.7-0.7,5.4c4.5,5.7,9.1,10.7,14,15c2.3,2,0.3,5.8-2.7,5\n\t\tC106.3,443.1,56.8,347.3,56.8,252.5c0-52.4,15.3-90.2,46.8-115.7c32.1-26,82.2-39.2,148.9-39.2c66.7,0,116.8,13.2,148.9,39.2\n\t\tc31.5,25.5,46.8,63.4,46.8,115.7c0,128.2-49.7,201.5-147.9,218.6C297.4,471.6,295.7,467.9,298,466z\"/\u003e\n\t\u003cpath class=\"st164\" d=\"M109.7,218.3c-5.1,0-5.2,8,0,8C114.8,226.3,114.8,218.3,109.7,218.3z\"/\u003e\n\t\u003cpath class=\"st164\" d=\"M97.2,291.1c-5.1,0-5.2,8,0,8C102.3,299.1,102.3,291.1,97.2,291.1z\"/\u003e\n\t\u003cpath class=\"st164\" d=\"M132.9,368.6c-5.1,0-5.2,8,0,8C138.1,376.6,138.1,368.6,132.9,368.6z\"/\u003e\n\t\u003cpath class=\"st164\" d=\"M240.4,399.8c-5.1,0-5.2,8,0,8C245.5,407.8,245.5,399.8,240.4,399.8z\"/\u003e\n\t\u003cpath class=\"st164\" d=\"M220.8,337.4c-5.1,0-5.2,8,0,8C226,345.4,226,337.4,220.8,337.4z\"/\u003e\n\t\u003cpath class=\"st164\" d=\"M240.6,230.1c-5.1,0-5.2,8,0,8C245.8,238.1,245.8,230.1,240.6,230.1z\"/\u003e\n\t\u003cpath class=\"st164\" d=\"M210,276.3c-5.1,0-5.2,8,0,8C215.2,284.3,215.2,276.3,210,276.3z\"/\u003e\n\t\u003cpath class=\"st164\" d=\"M156,258c-5.1,0-5.2,8,0,8C161.1,266,161.1,258,156,258z\"/\u003e\n\t\u003cpath class=\"st164\" d=\"M162.4,312.9c-5.1,0-5.2,8,0,8C167.6,320.9,167.6,312.9,162.4,312.9z\"/\u003e\n\t\u003cpath class=\"st1\" d=\"M269.5,74.7c2.7,0.1,5.3,0.2,8,0.3c-7.6-32.3-27.4-55.8-57.5-67.8c-2.8-1.1-5.7-1.7-8.6-1.7\n\t\tc-5.4,0-10.9,1.9-15.3,5.7c-3.3,2.9-5.7,6.7-7,10.9l-7.5,23.5c-1.9,6-1.5,12.6,1.5,18.1c3.2,5.8,8.5,9.9,15,11.4\n\t\tc0.5,0.1,2.4,0.7,5.1,1.9c4.9-0.6,10-1,15.1-1.4c6.1-0.4,12,2.4,15.3,7.6c5,7.9,8.3,18.4,7.7,32.1c2.5,0.1,5.1,0.2,7.7,0.3\n\t\tc0.8-18.3-4.6-31.5-12-41c0,0,0,0,0,0c-0.1-0.2-0.3-0.3-0.4-0.5c-0.1-0.1-0.1-0.1-0.2-0.2c-0.4-0.6-0.9-1.1-1.4-1.6\n\t\tc0,0-0.1-0.1-0.1-0.1c0,0,0,0,0,0c-8.7-10-19.4-15.3-25.8-17.8c-3-1.2-4.6-4.5-3.6-7.7l3.6-11.3c1.2-3.7,5.3-5.4,8.7-3.6\n\t\tc19.7,10,29.9,25.9,35,41.5c0,0,0,0,0,0c5.6,17.1,5,34,4.1,42.4c2.6-0.1,5.2-0.2,7.8-0.3c0.7-7.4,1-19.6-1.6-33.1l0-0.1\n\t\tC262.4,78.3,265.5,74.6,269.5,74.7z\"/\u003e\n\t\u003cg\u003e\n\t\t\u003cpath class=\"st0\" d=\"M248.9,115.7c-0.7,0-1.4,0-2.2-0.1C247.5,115.7,248.2,115.7,248.9,115.7z\"/\u003e\n\t\t\u003cpath class=\"st0\" d=\"M257,115.7c1.6-16.3,2.3-63.9-40.6-84.6c-2.7-1.3-5.9,0.1-6.8,2.9l-4.5,14c-0.8,2.5,0.5,5.1,3,6.1\n\t\t\tc11.8,4.4,42.8,19.9,40.9,61.7c1.2,0,2.3,0,3.5,0c2.8,0,5.6-0.1,8.4-0.2c0,0,0,0,0,0C259.6,115.6,258.3,115.7,257,115.7z\"/\u003e\n\t\u003c/g\u003e\n\t\u003cpath class=\"st163\" d=\"M252.5,119.6c-16.4,0-32.3-1.9-44.8-5.3c-2.1-0.6-3.3-2.7-2.7-4.8c0.6-2.1,2.7-3.3,4.8-2.7\n\t\tc11.8,3.2,27,5,42.7,5c15.4,0,30.3-1.7,42.1-4.8c2.1-0.6,4.2,0.7,4.7,2.7c0.6,2.1-0.7,4.2-2.7,4.7\n\t\tC284.2,117.8,268.6,119.6,252.5,119.6z\"/\u003e\n\u003c/g\u003e\n\u003cg id=\"Layer_2\"\u003e\n\u003c/g\u003e\n\u003cg id=\"Layer_3\"\u003e\n\u003c/g\u003e\n\u003c/svg\u003e"
          },
          "links": {
              "self": {
                  "api": "/api/v1/crops/554048243736360003070000",
                  "website": "/crops/554048243736360003070000"
              }
          },
          "relationships": {
              "companions": {
                  "links": {
                      "related": "/api/v1/crops/554048243736360003070000/companions"
                  }
              },
              "pictures": {
                  "links": {
                      "related": "/api/v1/crops/554048243736360003070000/pictures"
                  },
                  "data": []
              }
          }
      }, {
          "type": "crops",
          "id": "551dbfed3938340003160000",
          "attributes": {
              "name": "Apple",
              "slug": "apple",
              "binomial_name": "Malus pumila",
              "common_names": null,
              "description": "The apple is a deciduous tree in the Rose family grown for it's sweet fruit. The apple originated in Central Asia and has spread across the world. There are now over 7,500 cultivars bred for a variety of climates and characteristics. Apples are propagated through grafting because seeds do not breed true.",
              "sun_requirements": "Full Sun",
              "sowing_method": "Bare root tree",
              "spread": 500,
              "row_spacing": null,
              "height": 300,
              "processing_pictures": 0,
              "guides_count": 1,
              "main_image_path": "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/5939df7401f8790004000005.jpg?1496964975",
              "taxon": "Species",
              "tags_array": [],
              "growing_degree_days": null,
              "svg_icon": "\u003c?xml version=\"1.0\" encoding=\"utf-8\"?\u003e\n\u003c!-- Generator: Adobe Illustrator 20.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\u003e\n\u003csvg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 500 500\" style=\"enable-background:new 0 0 500 500;\" xml:space=\"preserve\"\u003e\n\u003cstyle type=\"text/css\"\u003e\n\t.st0{fill:#FDE270;}\n\t.st1{fill:#7D692F;}\n\t.st2{fill:#595C13;}\n\t.st3{fill:#BF793A;stroke:#590000;stroke-width:4;stroke-miterlimit:10;}\n\t.st4{fill:#528B1C;stroke:#123C08;stroke-width:3;stroke-miterlimit:10;}\n\t.st5{fill:#BF793A;stroke:#590000;stroke-width:4;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st6{fill:#FBDE74;}\n\t.st7{fill:#F8D96C;}\n\t.st8{fill:#F5D464;}\n\t.st9{fill:#F2CF5C;}\n\t.st10{fill:#EFCA54;}\n\t.st11{fill:#D50000;}\n\t.st12{fill:#ED3A00;}\n\t.st13{fill:#D50000;stroke:#590000;stroke-width:6;stroke-miterlimit:10;}\n\t.st14{fill:#487E41;}\n\t.st15{fill:#123C08;}\n\t.st16{fill:#D50000;stroke:#590000;stroke-width:3;stroke-miterlimit:10;}\n\t.st17{fill:none;stroke:#FFFFFF;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st18{fill:#FFFFFF;}\n\t.st19{fill:#7FC731;stroke:#246901;stroke-width:3;stroke-miterlimit:10;}\n\t.st20{fill:#7FC731;stroke:#246901;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st21{fill:none;stroke:#246901;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st22{fill:#292F37;}\n\t.st23{fill:#577B1D;}\n\t.st24{fill:#AD2F26;}\n\t.st25{fill:#264415;}\n\t.st26{fill:#539243;}\n\t.st27{fill:#7F415B;}\n\t.st28{fill:#246901;}\n\t.st29{fill:#8A1100;}\n\t.st30{fill:#5EC865;}\n\t.st31{fill:#007500;}\n\t.st32{fill:#FF3D50;}\n\t.st33{fill:none;stroke:#246901;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st34{fill:none;stroke:#FFFFFF;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st35{fill:#FF3D50;stroke:#CC3248;stroke-miterlimit:10;}\n\t.st36{fill:none;stroke:#007500;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st37{fill:none;stroke:#264415;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st38{fill:#528B1C;}\n\t.st39{fill:#20420B;}\n\t.st40{fill:#314773;}\n\t.st41{fill:#7389B5;}\n\t.st42{fill:#528B1C;stroke:#20420B;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st43{fill:none;stroke:#314773;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st44{fill:#00FFFF;}\n\t.st45{fill:#22B473;stroke:#184C28;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st46{fill:#2E368E;}\n\t.st47{fill:#9A0D90;}\n\t.st48{fill:#161542;}\n\t.st49{fill:#251749;}\n\t.st50{fill:none;stroke:#FBA954;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st51{fill:#61303F;}\n\t.st52{fill:#EEB683;}\n\t.st53{fill:#1B631A;}\n\t.st54{fill:#FBA954;}\n\t.st55{fill:#ECD8A1;}\n\t.st56{fill:#DC0900;stroke:#184C28;stroke-width:1.7008;stroke-miterlimit:10;}\n\t.st57{fill:none;stroke:#007500;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st58{fill:#F10A00;stroke:#8A1100;stroke-miterlimit:10;}\n\t.st59{fill:none;stroke:#007500;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st60{fill:#F10A00;}\n\t.st61{fill:#7389B5;stroke:#314773;stroke-miterlimit:10;}\n\t.st62{fill:none;stroke:#314773;stroke-miterlimit:10;}\n\t.st63{opacity:0.4;fill:#314773;}\n\t.st64{fill:#7389B5;stroke:#314773;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st65{fill:#8BA3CD;stroke:#314773;stroke-miterlimit:10;}\n\t.st66{fill:#5A7098;}\n\t.st67{fill:none;stroke:#FFFFFF;stroke-width:8;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st68{fill:#FF3D50;stroke:#AD2F26;stroke-miterlimit:10;}\n\t.st69{fill:#FF3D50;stroke:#CC3248;stroke-width:1.058;stroke-miterlimit:10;}\n\t.st70{fill:#539243;stroke:#246901;stroke-width:3;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st71{clip-path:url(#SVGID_2_);}\n\t.st72{fill:url(#SVGID_3_);}\n\t.st73{fill:none;stroke:#CC652B;stroke-width:1.4939;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st74{fill:none;stroke:#CC652B;stroke-width:0.8407;stroke-miterlimit:10;}\n\t.st75{fill:#F9C153;}\n\t.st76{fill:#FC7351;stroke:#CC652B;stroke-width:3;stroke-miterlimit:10;}\n\t.st77{fill:none;stroke:#994A22;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st78{fill:none;stroke:#F9C153;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st79{opacity:0.8;fill:none;stroke:#F9C153;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st80{opacity:0.6;fill:none;stroke:#F9C153;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st81{opacity:0.4;fill:none;stroke:#F9C153;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st82{opacity:0.2;fill:none;stroke:#F9C153;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st83{fill:none;stroke:#994A22;stroke-width:3;stroke-miterlimit:10;}\n\t.st84{fill:#7FC731;stroke:#246901;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st85{fill:none;stroke:#ADD980;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st86{fill:#ADD980;}\n\t.st87{fill:#FC7351;}\n\t.st88{fill:#F8B05C;}\n\t.st89{fill:#F8A15A;}\n\t.st90{fill:#F99259;}\n\t.st91{fill:#F98357;}\n\t.st92{fill:#994A22;}\n\t.st93{fill:#7FC731;}\n\t.st94{fill:#FDE3DD;}\n\t.st95{fill:#BD0000;}\n\t.st96{fill:#E19D36;}\n\t.st97{fill:#DA842E;}\n\t.st98{fill:#D46A28;}\n\t.st99{fill:#CE4F22;}\n\t.st100{fill:#C52E19;}\n\t.st101{fill:#661F28;}\n\t.st102{fill:#83C300;}\n\t.st103{fill:#486600;}\n\t.st104{fill:#E6F2CD;}\n\t.st105{fill:#F8B413;stroke:#7A4100;stroke-width:6;stroke-miterlimit:10;}\n\t.st106{fill:#487E41;stroke:#123C08;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st107{opacity:0.8;fill:none;stroke:#FFFFFF;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st108{fill:none;stroke:#123C08;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st109{opacity:0.8;fill:#FFFFFF;}\n\t.st110{fill:#F8B413;stroke:#7A4100;stroke-miterlimit:10;}\n\t.st111{opacity:0.7;fill:none;stroke:#FFFFFF;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st112{fill:none;stroke:#7A4100;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st113{opacity:0.7;fill:none;stroke:#AD2F26;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st114{opacity:0.5;fill:none;stroke:#AD2F26;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st115{opacity:0.3;fill:none;stroke:#AD2F26;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st116{opacity:0.1;fill:none;stroke:#AD2F26;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st117{opacity:0.7;fill:#FFFFFF;}\n\t.st118{fill:#DAE5D9;}\n\t.st119{fill:#F8B413;}\n\t.st120{fill:#FCE8BB;}\n\t.st121{fill:#C25729;}\n\t.st122{fill:#D1722A;}\n\t.st123{fill:#E08B2C;}\n\t.st124{fill:#EFA62E;}\n\t.st125{fill:#7A4100;}\n\t.st126{fill:none;stroke:#487E41;stroke-width:2;stroke-miterlimit:10;}\n\t.st127{fill:#D50000;stroke:#590000;stroke-miterlimit:10;}\n\t.st128{fill:#6BB25F;}\n\t.st129{fill:#590000;}\n\t.st130{fill:#7F0603;}\n\t.st131{fill:#BF793A;stroke:#590000;stroke-width:3;stroke-miterlimit:10;}\n\t.st132{fill:none;stroke:#590000;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st133{fill:none;stroke:#590000;stroke-miterlimit:10;}\n\t.st134{fill:#BF793A;stroke:#590000;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st135{fill:#6EB226;}\n\t.st136{fill:none;stroke:#123C08;stroke-width:3;stroke-miterlimit:10;}\n\t.st137{fill:#BF793A;}\n\t.st138{fill:#970231;stroke:#590000;stroke-width:3;stroke-miterlimit:10;}\n\t.st139{fill:#AF96CB;}\n\t.st140{fill:#9C325F;}\n\t.st141{opacity:0.5;fill:#AF96CB;}\n\t.st142{fill:none;stroke:#590000;stroke-width:3;stroke-miterlimit:10;}\n\t.st143{fill:#D23841;}\n\t.st144{fill:none;stroke:#9C325F;stroke-miterlimit:10;}\n\t.st145{fill:#5A9800;stroke:#225A00;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st146{opacity:0.4;fill:none;stroke:#FFFFFF;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st147{fill:none;stroke:#225A00;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st148{opacity:0.4;fill:#FFFFFF;}\n\t.st149{fill:#970231;}\n\t.st150{opacity:0.5;}\n\t.st151{fill:#DFB3C1;}\n\t.st152{fill:#5A9800;}\n\t.st153{fill:#9DC06B;}\n\t.st154{fill:#225A00;}\n\t.st155{fill:none;stroke:#9DC06B;stroke-width:3;stroke-miterlimit:10;}\n\t.st156{fill:none;stroke:#9DC06B;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st157{fill:none;stroke:#9DC06B;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st158{fill:#FFFFFF;stroke:#9DC06B;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st159{fill:#00FFFF;stroke:#000000;stroke-width:3;stroke-miterlimit:10;}\n\t.st160{fill:none;stroke:#000000;stroke-miterlimit:10;}\n\t.st161{fill:#B8B54B;stroke:#595C13;stroke-width:3;stroke-miterlimit:10;}\n\t.st162{fill:#FDE270;stroke:#595C13;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st163{fill:#B26A39;}\n\t.st164{fill:#B8B54B;}\n\t.st165{fill:none;stroke:#595C13;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st166{fill:#D1A362;}\n\t.st167{clip-path:url(#SVGID_5_);}\n\t.st168{clip-path:url(#SVGID_9_);}\n\t.st169{clip-path:url(#SVGID_10_);}\n\t.st170{clip-path:url(#SVGID_11_);}\n\t.st171{fill:#D0C785;}\n\t.st172{clip-path:url(#SVGID_13_);}\n\t.st173{clip-path:url(#SVGID_16_);}\n\t.st174{clip-path:url(#SVGID_17_);}\n\t.st175{clip-path:url(#SVGID_19_);}\n\t.st176{clip-path:url(#SVGID_23_);}\n\t.st177{clip-path:url(#SVGID_24_);}\n\t.st178{clip-path:url(#SVGID_25_);}\n\t.st179{clip-path:url(#SVGID_27_);}\n\t.st180{clip-path:url(#SVGID_30_);}\n\t.st181{clip-path:url(#SVGID_31_);}\n\t.st182{clip-path:url(#SVGID_33_);}\n\t.st183{clip-path:url(#SVGID_35_);}\n\t.st184{clip-path:url(#SVGID_37_);}\n\t.st185{fill:#B28E56;}\n\t.st186{fill:#885C0B;}\n\t.st187{fill:#737C00;}\n\t.st188{fill:none;stroke:#595C13;stroke-width:3;stroke-miterlimit:10;}\n\t.st189{fill:#C7493F;}\n\t.st190{fill:#992623;}\n\t.st191{fill:#521D0C;}\n\t.st192{fill:#E73123;}\n\t.st193{fill:#F5BA6B;}\n\t.st194{fill:#EF915B;}\n\t.st195{fill:#8E1A00;}\n\t.st196{fill:#442105;}\n\t.st197{fill:#B47E22;}\n\t.st198{fill:#BE4228;}\n\t.st199{fill:#D3954B;}\n\t.st200{fill:#CD8143;}\n\t.st201{fill:#C76C3C;}\n\t.st202{fill:#C25735;}\n\t.st203{fill:#7F2A1C;}\n\t.st204{fill:#A7BB41;}\n\t.st205{fill:#677F08;}\n\t.st206{fill:#C9DC85;}\n\t.st207{fill:#E1CA56;}\n\t.st208{fill:#E1CA56;stroke:#7D692F;stroke-width:3;stroke-miterlimit:10;}\n\t.st209{fill:#CC8F66;}\n\t.st210{fill:none;stroke:#7D692F;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st211{fill:#9F9A2F;}\n\t.st212{fill:#CC2825;}\n\t.st213{fill:#C37B2C;}\n\t.st214{fill:#7F0701;}\n\t.st215{fill:#75AD45;}\n\t.st216{fill:#5A7099;}\n\u003c/style\u003e\n\u003cg id=\"Layer_1_6_\"\u003e\n\t\u003cpath class=\"st192\" d=\"M456.1,250.7c0,149.2-67.1,234-207.3,234S41.5,361.3,41.5,250.7S108.6,84.2,248.8,84.2\n\t\tS456.1,140.1,456.1,250.7z\"/\u003e\n\t\u003cpath class=\"st18\" d=\"M202,166.7c-0.1,0-0.3,0-0.4,0c-15.9-1.7-31.6-4.3-46.7-7.7c-2.1-0.5-3.4-2.5-2.9-4.6s2.5-3.4,4.6-2.9\n\t\tc14.9,3.3,30.3,5.8,45.9,7.5c2.1,0.2,3.7,2.1,3.4,4.3C205.6,165.2,203.9,166.7,202,166.7z\"/\u003e\n\t\u003cpath class=\"st18\" d=\"M249.9,169.2c-9.6,0-19.3-0.3-28.8-0.9c-2.1-0.1-3.8-2-3.6-4.1c0.1-2.1,2-3.8,4.1-3.6\n\t\tc9.3,0.6,18.8,0.9,28.3,0.9c2.1,0,3.9,1.7,3.9,3.9S252.1,169.2,249.9,169.2z\"/\u003e\n\t\u003ccircle class=\"st18\" cx=\"136.9\" cy=\"150.7\" r=\"4.2\"/\u003e\n\t\u003cpath class=\"st195\" d=\"M248.8,72.7c-145.2,0-218.9,59.9-218.9,178.1c0,60.9,19.5,121.3,53.5,165.6c40.2,52.4,97.4,80.1,165.4,80.1\n\t\tc72.3,0,127.8-21.9,165-65.1c35.7-41.5,53.9-102.3,53.9-180.5C467.7,132.6,394,72.7,248.8,72.7z M294.3,464.2\n\t\tc5.9-4.8,11.6-10.6,16.9-17.4c1.1-1.4,1.2-3.5,0-4.9c-1.7-1.9-4.5-1.8-6,0.1c-16.3,20.8-35.2,31.3-56.4,31.3\n\t\tc-21.1,0-40.1-10.5-56.4-31.3c-1.3-1.7-3.7-2-5.4-0.7s-2,3.7-0.7,5.4c4.5,5.7,9.1,10.7,14,15c2.3,2,0.3,5.8-2.7,5\n\t\tc-95-25.4-144.5-121.2-144.5-216c0-52.4,15.3-90.2,46.8-115.7c32.1-26,82.2-39.2,148.9-39.2S365.6,109,397.7,135\n\t\tc31.5,25.5,46.8,63.4,46.8,115.7c0,128.2-49.7,201.5-147.9,218.6C293.7,469.8,292,466.1,294.3,464.2z\"/\u003e\n\t\u003cpath class=\"st196\" d=\"M265.8,72.9c2.7,0.1,5.3,0.2,8,0.3c-7.6-32.3-27.4-55.8-57.5-67.8c-2.8-1.1-5.7-1.7-8.6-1.7\n\t\tc-5.4,0-10.9,1.9-15.3,5.7c-3.3,2.9-5.7,6.7-7,10.9l-7.5,23.5c-1.9,6-1.5,12.6,1.5,18.1c3.2,5.8,8.5,9.9,15,11.4\n\t\tc0.5,0.1,2.4,0.7,5.1,1.9c4.9-0.6,10-1,15.1-1.4c6.1-0.4,12,2.4,15.3,7.6c5,7.9,8.3,18.4,7.7,32.1c2.5,0.1,5.1,0.2,7.7,0.3\n\t\tc0.8-18.3-4.6-31.5-12-41l0,0c-0.1-0.2-0.3-0.3-0.4-0.5c-0.1-0.1-0.1-0.1-0.2-0.2c-0.4-0.6-0.9-1.1-1.4-1.6l-0.1-0.1l0,0\n\t\tc-8.7-10-19.4-15.3-25.8-17.8c-3-1.2-4.6-4.5-3.6-7.7l3.6-11.3c1.2-3.7,5.3-5.4,8.7-3.6c19.7,10,29.9,25.9,35,41.5l0,0\n\t\tc5.6,17.1,5,34,4.1,42.4c2.6-0.1,5.2-0.2,7.8-0.3c0.7-7.4,1-19.6-1.6-33.1v-0.1C258.7,76.5,261.8,72.8,265.8,72.9z\"/\u003e\n\t\u003cg\u003e\n\t\t\u003cpath class=\"st197\" d=\"M245.2,113.9c-0.7,0-1.4,0-2.2-0.1C243.8,113.9,244.5,113.9,245.2,113.9z\"/\u003e\n\t\t\u003cpath class=\"st197\" d=\"M253.3,113.9c1.6-16.3,2.3-63.9-40.6-84.6c-2.7-1.3-5.9,0.1-6.8,2.9l-4.5,14c-0.8,2.5,0.5,5.1,3,6.1\n\t\t\tc11.8,4.4,42.8,19.9,40.9,61.7c1.2,0,2.3,0,3.5,0c2.8,0,5.6-0.1,8.4-0.2l0,0C255.9,113.8,254.6,113.9,253.3,113.9z\"/\u003e\n\t\u003c/g\u003e\n\t\u003cpath class=\"st195\" d=\"M248.8,117.8c-16.4,0-32.3-1.9-44.8-5.3c-2.1-0.6-3.3-2.7-2.7-4.8c0.6-2.1,2.7-3.3,4.8-2.7\n\t\tc11.8,3.2,27,5,42.7,5c15.4,0,30.3-1.7,42.1-4.8c2.1-0.6,4.2,0.7,4.7,2.7c0.6,2.1-0.7,4.2-2.7,4.7\n\t\tC280.5,116,264.9,117.8,248.8,117.8z\"/\u003e\n\u003c/g\u003e\n\u003c/svg\u003e"
          },
          "links": {
              "self": {
                  "api": "/api/v1/crops/551dbfed3938340003160000",
                  "website": "/crops/551dbfed3938340003160000"
              }
          },
          "relationships": {
              "companions": {
                  "links": {
                      "related": "/api/v1/crops/551dbfed3938340003160000/companions"
                  }
              },
              "pictures": {
                  "links": {
                      "related": "/api/v1/crops/551dbfed3938340003160000/pictures"
                  },
                  "data": [{
                          "type": "crops-pictures",
                          "id": "5939df7401f8790004000005"
                      }, {
                          "type": "crops-pictures",
                          "id": "5939df7901f8790004000006"
                      }
                  ]
              }
          }
      }, {
          "type": "crops",
          "id": "54afdbcd3166630002050000",
          "attributes": {
              "name": "kai apple",
              "slug": "kai-apple",
              "binomial_name": "aberia caffra",
              "common_names": ["kai apple", " kau apple", " kei appel", " kei apple"],
              "description": null,
              "sun_requirements": null,
              "sowing_method": null,
              "spread": null,
              "row_spacing": null,
              "height": null,
              "processing_pictures": 0,
              "guides_count": 0,
              "main_image_path": "/assets/baren_field_square-4a827e5f09156962937eb100e4484f87e1e788f28a7c9daefe2a9297711a562a.jpg",
              "taxon": null,
              "tags_array": [],
              "growing_degree_days": null,
              "svg_icon": null
          },
          "links": {
              "self": {
                  "api": "/api/v1/crops/54afdbcd3166630002050000",
                  "website": "/crops/54afdbcd3166630002050000"
              }
          },
          "relationships": {
              "companions": {
                  "links": {
                      "related": "/api/v1/crops/54afdbcd3166630002050000/companions"
                  }
              },
              "pictures": {
                  "links": {
                      "related": "/api/v1/crops/54afdbcd3166630002050000/pictures"
                  },
                  "data": []
              }
          }
      }, {
          "type": "crops",
          "id": "542ea5bd6331360002051c00",
          "attributes": {
              "name": "apple blossom",
              "slug": "apple-blossom",
              "binomial_name": "Cassia javanica",
              "common_names": ["apple blossom"],
              "description": null,
              "sun_requirements": null,
              "sowing_method": null,
              "spread": null,
              "row_spacing": null,
              "height": null,
              "processing_pictures": 0,
              "guides_count": 0,
              "main_image_path": "/assets/baren_field_square-4a827e5f09156962937eb100e4484f87e1e788f28a7c9daefe2a9297711a562a.jpg",
              "taxon": null,
              "tags_array": [],
              "growing_degree_days": null,
              "svg_icon": null
          },
          "links": {
              "self": {
                  "api": "/api/v1/crops/542ea5bd6331360002051c00",
                  "website": "/crops/542ea5bd6331360002051c00"
              }
          },
          "relationships": {
              "companions": {
                  "links": {
                      "related": "/api/v1/crops/542ea5bd6331360002051c00/companions"
                  }
              },
              "pictures": {
                  "links": {
                      "related": "/api/v1/crops/542ea5bd6331360002051c00/pictures"
                  },
                  "data": []
              }
          }
      }, {
          "type": "crops",
          "id": "542e9fc66331360002be1500",
          "attributes": {
              "name": "star apple",
              "slug": "star-apple",
              "binomial_name": "Chrysophyllum cainito",
              "common_names": ["star apple"],
              "description": null,
              "sun_requirements": null,
              "sowing_method": null,
              "spread": null,
              "row_spacing": null,
              "height": null,
              "processing_pictures": 0,
              "guides_count": 0,
              "main_image_path": "/assets/baren_field_square-4a827e5f09156962937eb100e4484f87e1e788f28a7c9daefe2a9297711a562a.jpg",
              "taxon": null,
              "tags_array": [],
              "growing_degree_days": null,
              "svg_icon": null
          },
          "links": {
              "self": {
                  "api": "/api/v1/crops/542e9fc66331360002be1500",
                  "website": "/crops/542e9fc66331360002be1500"
              }
          },
          "relationships": {
              "companions": {
                  "links": {
                      "related": "/api/v1/crops/542e9fc66331360002be1500/companions"
                  }
              },
              "pictures": {
                  "links": {
                      "related": "/api/v1/crops/542e9fc66331360002be1500/pictures"
                  },
                  "data": []
              }
          }
      }, {
          "type": "crops",
          "id": "542e9fd06331360002d11500",
          "attributes": {
              "name": "black apple",
              "slug": "black-apple",
              "binomial_name": "Diospyros revoluta",
              "common_names": ["black apple"],
              "description": null,
              "sun_requirements": null,
              "sowing_method": null,
              "spread": null,
              "row_spacing": null,
              "height": null,
              "processing_pictures": 0,
              "guides_count": 0,
              "main_image_path": "/assets/baren_field_square-4a827e5f09156962937eb100e4484f87e1e788f28a7c9daefe2a9297711a562a.jpg",
              "taxon": null,
              "tags_array": [],
              "growing_degree_days": null,
              "svg_icon": null
          },
          "links": {
              "self": {
                  "api": "/api/v1/crops/542e9fd06331360002d11500",
                  "website": "/crops/542e9fd06331360002d11500"
              }
          },
          "relationships": {
              "companions": {
                  "links": {
                      "related": "/api/v1/crops/542e9fd06331360002d11500/companions"
                  }
              },
              "pictures": {
                  "links": {
                      "related": "/api/v1/crops/542e9fd06331360002d11500/pictures"
                  },
                  "data": []
              }
          }
      }, {
          "type": "crops",
          "id": "542ea14863313600020b1800",
          "attributes": {
              "name": "apple haw",
              "slug": "apple-haw",
              "binomial_name": "Crataegus opaca",
              "common_names": ["apple haw"],
              "description": null,
              "sun_requirements": null,
              "sowing_method": null,
              "spread": null,
              "row_spacing": null,
              "height": null,
              "processing_pictures": 0,
              "guides_count": 0,
              "main_image_path": "/assets/baren_field_square-4a827e5f09156962937eb100e4484f87e1e788f28a7c9daefe2a9297711a562a.jpg",
              "taxon": null,
              "tags_array": [],
              "growing_degree_days": null,
              "svg_icon": null
          },
          "links": {
              "self": {
                  "api": "/api/v1/crops/542ea14863313600020b1800",
                  "website": "/crops/542ea14863313600020b1800"
              }
          },
          "relationships": {
              "companions": {
                  "links": {
                      "related": "/api/v1/crops/542ea14863313600020b1800/companions"
                  }
              },
              "pictures": {
                  "links": {
                      "related": "/api/v1/crops/542ea14863313600020b1800/pictures"
                  },
                  "data": []
              }
          }
      }, {
          "type": "crops",
          "id": "542ea30d6331360002b11900",
          "attributes": {
              "name": "apple shadbush",
              "slug": "apple-shadbush",
              "binomial_name": "Amelanchier arborea",
              "common_names": ["apple shadbush"],
              "description": null,
              "sun_requirements": null,
              "sowing_method": null,
              "spread": null,
              "row_spacing": null,
              "height": null,
              "processing_pictures": 0,
              "guides_count": 0,
              "main_image_path": "/assets/baren_field_square-4a827e5f09156962937eb100e4484f87e1e788f28a7c9daefe2a9297711a562a.jpg",
              "taxon": null,
              "tags_array": [],
              "growing_degree_days": null,
              "svg_icon": null
          },
          "links": {
              "self": {
                  "api": "/api/v1/crops/542ea30d6331360002b11900",
                  "website": "/crops/542ea30d6331360002b11900"
              }
          },
          "relationships": {
              "companions": {
                  "links": {
                      "related": "/api/v1/crops/542ea30d6331360002b11900/companions"
                  }
              },
              "pictures": {
                  "links": {
                      "related": "/api/v1/crops/542ea30d6331360002b11900/pictures"
                  },
                  "data": []
              }
          }
      }, {
          "type": "crops",
          "id": "542ea3836331360002191a00",
          "attributes": {
              "name": "gopher apple",
              "slug": "gopher-apple",
              "binomial_name": "Licania michauxii",
              "common_names": ["gopher apple"],
              "description": null,
              "sun_requirements": null,
              "sowing_method": null,
              "spread": null,
              "row_spacing": null,
              "height": null,
              "processing_pictures": 0,
              "guides_count": 0,
              "main_image_path": "/assets/baren_field_square-4a827e5f09156962937eb100e4484f87e1e788f28a7c9daefe2a9297711a562a.jpg",
              "taxon": null,
              "tags_array": [],
              "growing_degree_days": null,
              "svg_icon": null
          },
          "links": {
              "self": {
                  "api": "/api/v1/crops/542ea3836331360002191a00",
                  "website": "/crops/542ea3836331360002191a00"
              }
          },
          "relationships": {
              "companions": {
                  "links": {
                      "related": "/api/v1/crops/542ea3836331360002191a00/companions"
                  }
              },
              "pictures": {
                  "links": {
                      "related": "/api/v1/crops/542ea3836331360002191a00/pictures"
                  },
                  "data": []
              }
          }
      }, {
          "type": "crops",
          "id": "542ea38b6331360002201a00",
          "attributes": {
              "name": "paradise apple",
              "slug": "paradise-apple",
              "binomial_name": "Malus pumila",
              "common_names": ["paradise apple"],
              "description": null,
              "sun_requirements": null,
              "sowing_method": null,
              "spread": null,
              "row_spacing": null,
              "height": null,
              "processing_pictures": 0,
              "guides_count": 0,
              "main_image_path": "/assets/baren_field_square-4a827e5f09156962937eb100e4484f87e1e788f28a7c9daefe2a9297711a562a.jpg",
              "taxon": null,
              "tags_array": [],
              "growing_degree_days": null,
              "svg_icon": null
          },
          "links": {
              "self": {
                  "api": "/api/v1/crops/542ea38b6331360002201a00",
                  "website": "/crops/542ea38b6331360002201a00"
              }
          },
          "relationships": {
              "companions": {
                  "links": {
                      "related": "/api/v1/crops/542ea38b6331360002201a00/companions"
                  }
              },
              "pictures": {
                  "links": {
                      "related": "/api/v1/crops/542ea38b6331360002201a00/pictures"
                  },
                  "data": []
              }
          }
      }, {
          "type": "crops",
          "id": "542e997a6331360002730500",
          "attributes": {
              "name": "Indian-apple",
              "slug": "indian-apple",
              "binomial_name": "Podophyllum peltatum",
              "common_names": ["Indian-apple"],
              "description": null,
              "sun_requirements": null,
              "sowing_method": null,
              "spread": null,
              "row_spacing": null,
              "height": null,
              "processing_pictures": 0,
              "guides_count": 0,
              "main_image_path": "/assets/baren_field_square-4a827e5f09156962937eb100e4484f87e1e788f28a7c9daefe2a9297711a562a.jpg",
              "taxon": null,
              "tags_array": [],
              "growing_degree_days": null,
              "svg_icon": null
          },
          "links": {
              "self": {
                  "api": "/api/v1/crops/542e997a6331360002730500",
                  "website": "/crops/542e997a6331360002730500"
              }
          },
          "relationships": {
              "companions": {
                  "links": {
                      "related": "/api/v1/crops/542e997a6331360002730500/companions"
                  }
              },
              "pictures": {
                  "links": {
                      "related": "/api/v1/crops/542e997a6331360002730500/pictures"
                  },
                  "data": []
              }
          }
      }, {
          "type": "crops",
          "id": "542e997a6331360002740500",
          "attributes": {
              "name": "May apple",
              "slug": "may-apple",
              "binomial_name": "Podophyllum peltatum",
              "common_names": ["May apple"],
              "description": null,
              "sun_requirements": null,
              "sowing_method": null,
              "spread": null,
              "row_spacing": null,
              "height": null,
              "processing_pictures": 0,
              "guides_count": 0,
              "main_image_path": "/assets/baren_field_square-4a827e5f09156962937eb100e4484f87e1e788f28a7c9daefe2a9297711a562a.jpg",
              "taxon": null,
              "tags_array": [],
              "growing_degree_days": null,
              "svg_icon": null
          },
          "links": {
              "self": {
                  "api": "/api/v1/crops/542e997a6331360002740500",
                  "website": "/crops/542e997a6331360002740500"
              }
          },
          "relationships": {
              "companions": {
                  "links": {
                      "related": "/api/v1/crops/542e997a6331360002740500/companions"
                  }
              },
              "pictures": {
                  "links": {
                      "related": "/api/v1/crops/542e997a6331360002740500/pictures"
                  },
                  "data": []
              }
          }
      }, {
          "type": "crops",
          "id": "542e9bc563313600024e0e00",
          "attributes": {
              "name": "mammee apple",
              "slug": "mammee-apple",
              "binomial_name": "Mammea americana",
              "common_names": ["mammee apple"],
              "description": null,
              "sun_requirements": null,
              "sowing_method": null,
              "spread": null,
              "row_spacing": null,
              "height": null,
              "processing_pictures": 0,
              "guides_count": 0,
              "main_image_path": "/assets/baren_field_square-4a827e5f09156962937eb100e4484f87e1e788f28a7c9daefe2a9297711a562a.jpg",
              "taxon": null,
              "tags_array": [],
              "growing_degree_days": null,
              "svg_icon": null
          },
          "links": {
              "self": {
                  "api": "/api/v1/crops/542e9bc563313600024e0e00",
                  "website": "/crops/542e9bc563313600024e0e00"
              }
          },
          "relationships": {
              "companions": {
                  "links": {
                      "related": "/api/v1/crops/542e9bc563313600024e0e00/companions"
                  }
              },
              "pictures": {
                  "links": {
                      "related": "/api/v1/crops/542e9bc563313600024e0e00/pictures"
                  },
                  "data": []
              }
          }
      }, {
          "type": "crops",
          "id": "542e9cb56331360002491000",
          "attributes": {
              "name": "conch apple",
              "slug": "conch-apple",
              "binomial_name": "Passiflora maliformis",
              "common_names": ["conch apple"],
              "description": null,
              "sun_requirements": null,
              "sowing_method": null,
              "spread": null,
              "row_spacing": null,
              "height": null,
              "processing_pictures": 0,
              "guides_count": 0,
              "main_image_path": "/assets/baren_field_square-4a827e5f09156962937eb100e4484f87e1e788f28a7c9daefe2a9297711a562a.jpg",
              "taxon": null,
              "tags_array": [],
              "growing_degree_days": null,
              "svg_icon": null
          },
          "links": {
              "self": {
                  "api": "/api/v1/crops/542e9cb56331360002491000",
                  "website": "/crops/542e9cb56331360002491000"
              }
          },
          "relationships": {
              "companions": {
                  "links": {
                      "related": "/api/v1/crops/542e9cb56331360002491000/companions"
                  }
              },
              "pictures": {
                  "links": {
                      "related": "/api/v1/crops/542e9cb56331360002491000/pictures"
                  },
                  "data": []
              }
          }
      }, {
          "type": "crops",
          "id": "542e991e6331360002470300",
          "attributes": {
              "name": "custard apple",
              "slug": "custard-apple",
              "binomial_name": "Annona reticulata",
              "common_names": ["custard apple"],
              "description": null,
              "sun_requirements": null,
              "sowing_method": null,
              "spread": null,
              "row_spacing": null,
              "height": null,
              "processing_pictures": 0,
              "guides_count": 0,
              "main_image_path": "/assets/baren_field_square-4a827e5f09156962937eb100e4484f87e1e788f28a7c9daefe2a9297711a562a.jpg",
              "taxon": null,
              "tags_array": [],
              "growing_degree_days": null,
              "svg_icon": null
          },
          "links": {
              "self": {
                  "api": "/api/v1/crops/542e991e6331360002470300",
                  "website": "/crops/542e991e6331360002470300"
              }
          },
          "relationships": {
              "companions": {
                  "links": {
                      "related": "/api/v1/crops/542e991e6331360002470300/companions"
                  }
              },
              "pictures": {
                  "links": {
                      "related": "/api/v1/crops/542e991e6331360002470300/pictures"
                  },
                  "data": []
              }
          }
      }, {
          "type": "crops",
          "id": "542e991e6331360002480300",
          "attributes": {
              "name": "sugar apple",
              "slug": "sugar-apple",
              "binomial_name": "Annona squamosa",
              "common_names": ["sugar apple"],
              "description": null,
              "sun_requirements": null,
              "sowing_method": null,
              "spread": null,
              "row_spacing": null,
              "height": null,
              "processing_pictures": 0,
              "guides_count": 0,
              "main_image_path": "/assets/baren_field_square-4a827e5f09156962937eb100e4484f87e1e788f28a7c9daefe2a9297711a562a.jpg",
              "taxon": null,
              "tags_array": [],
              "growing_degree_days": null,
              "svg_icon": null
          },
          "links": {
              "self": {
                  "api": "/api/v1/crops/542e991e6331360002480300",
                  "website": "/crops/542e991e6331360002480300"
              }
          },
          "relationships": {
              "companions": {
                  "links": {
                      "related": "/api/v1/crops/542e991e6331360002480300/companions"
                  }
              },
              "pictures": {
                  "links": {
                      "related": "/api/v1/crops/542e991e6331360002480300/pictures"
                  },
                  "data": []
              }
          }
      }, {
          "type": "crops",
          "id": "542e991e63313600024a0300",
          "attributes": {
              "name": "pond apple",
              "slug": "pond-apple",
              "binomial_name": "Annona glabra",
              "common_names": ["pond apple"],
              "description": null,
              "sun_requirements": null,
              "sowing_method": null,
              "spread": null,
              "row_spacing": null,
              "height": null,
              "processing_pictures": 0,
              "guides_count": 0,
              "main_image_path": "/assets/baren_field_square-4a827e5f09156962937eb100e4484f87e1e788f28a7c9daefe2a9297711a562a.jpg",
              "taxon": null,
              "tags_array": [],
              "growing_degree_days": null,
              "svg_icon": null
          },
          "links": {
              "self": {
                  "api": "/api/v1/crops/542e991e63313600024a0300",
                  "website": "/crops/542e991e63313600024a0300"
              }
          },
          "relationships": {
              "companions": {
                  "links": {
                      "related": "/api/v1/crops/542e991e63313600024a0300/companions"
                  }
              },
              "pictures": {
                  "links": {
                      "related": "/api/v1/crops/542e991e63313600024a0300/pictures"
                  },
                  "data": []
              }
          }
      }, {
          "type": "crops",
          "id": "554045913235350003000000",
          "attributes": {
              "name": "Granny Smith Apple",
              "slug": "granny-smith-apple",
              "binomial_name": "Malus domestica × M. sylvestris",
              "common_names": ["Granny Smith Apple"],
              "description": "Granny Smith apples are tip-bearing apple cultivars that were developed in Australia in 1868 by Maria Anna Smith. They are thought to be a hybrid of Malus sylvestris, the European Wild Apple, with the domestic apple M. domestica. The fruit has hard, light green skin and crisp, tart juicy flesh.They can be eaten fresh and are a very popular apple for baking. They have a longer storage life than other apples due to their low ethylene content. Blossoms are white. Trees require 400 hours below 7°C each winter. Granny Smith apples are self-pollinating but benefit from having a tree of another variety with the same bloom period within 50 feet (Rome, Akane, Cripps Pink, Golden Delicious). Apples are propagated through grafting because they are genetic hybrids that produce new genetic combinations in their seedlings. Semi-dwarf and dwarf rootstocks are available. Depending on the size chosen, the tree will bear fruit within 2-5 years of planting.",
              "sun_requirements": "Full Sun",
              "sowing_method": "Transplant bare-root plant",
              "spread": 450,
              "row_spacing": 450,
              "height": 450,
              "processing_pictures": 0,
              "guides_count": 0,
              "main_image_path": "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/5540461d36303600032d0000.jpg?1430275613",
              "taxon": "Species",
              "tags_array": [],
              "growing_degree_days": null,
              "svg_icon": "\u003c?xml version=\"1.0\" encoding=\"utf-8\"?\u003e\n\u003c!-- Generator: Adobe Illustrator 20.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\u003e\n\u003csvg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 500 500\" style=\"enable-background:new 0 0 500 500;\" xml:space=\"preserve\"\u003e\n\u003cstyle type=\"text/css\"\u003e\n\t.st0{fill:#B47E22;}\n\t.st1{fill:#442105;}\n\t.st2{fill:#BF793A;stroke:#590000;stroke-width:4;stroke-miterlimit:10;}\n\t.st3{fill:#528B1C;stroke:#123C08;stroke-width:3;stroke-miterlimit:10;}\n\t.st4{fill:#BF793A;stroke:#590000;stroke-width:4;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st5{fill:#FDE270;}\n\t.st6{fill:#FBDE74;}\n\t.st7{fill:#F8D96C;}\n\t.st8{fill:#F5D464;}\n\t.st9{fill:#F2CF5C;}\n\t.st10{fill:#EFCA54;}\n\t.st11{fill:#D50000;}\n\t.st12{fill:#ED3A00;}\n\t.st13{fill:#D50000;stroke:#590000;stroke-width:6;stroke-miterlimit:10;}\n\t.st14{fill:#487E41;}\n\t.st15{fill:#123C08;}\n\t.st16{fill:#D50000;stroke:#590000;stroke-width:3;stroke-miterlimit:10;}\n\t.st17{fill:none;stroke:#FFFFFF;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st18{fill:#FFFFFF;}\n\t.st19{fill:#7FC731;stroke:#246901;stroke-width:3;stroke-miterlimit:10;}\n\t.st20{fill:#7FC731;stroke:#246901;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st21{fill:none;stroke:#246901;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st22{fill:#292F37;}\n\t.st23{fill:#577B1D;}\n\t.st24{fill:#AD2F26;}\n\t.st25{fill:#264415;}\n\t.st26{fill:#539243;}\n\t.st27{fill:#7F415B;}\n\t.st28{fill:#246901;}\n\t.st29{fill:#8A1100;}\n\t.st30{fill:#5EC865;}\n\t.st31{fill:#007500;}\n\t.st32{fill:#FF3D50;}\n\t.st33{fill:none;stroke:#246901;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st34{fill:none;stroke:#FFFFFF;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st35{fill:#FF3D50;stroke:#CC3248;stroke-miterlimit:10;}\n\t.st36{fill:none;stroke:#007500;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st37{fill:none;stroke:#264415;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st38{fill:#528B1C;}\n\t.st39{fill:#20420B;}\n\t.st40{fill:#314773;}\n\t.st41{fill:#7389B5;}\n\t.st42{fill:#528B1C;stroke:#20420B;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st43{fill:none;stroke:#314773;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st44{fill:#00FFFF;}\n\t.st45{fill:#22B473;stroke:#184C28;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st46{fill:#2E368E;}\n\t.st47{fill:#9A0D90;}\n\t.st48{fill:#161542;}\n\t.st49{fill:#251749;}\n\t.st50{fill:none;stroke:#FBA954;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st51{fill:#61303F;}\n\t.st52{fill:#EEB683;}\n\t.st53{fill:#1B631A;}\n\t.st54{fill:#FBA954;}\n\t.st55{fill:#ECD8A1;}\n\t.st56{fill:#DC0900;stroke:#184C28;stroke-width:1.7008;stroke-miterlimit:10;}\n\t.st57{fill:none;stroke:#007500;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st58{fill:#F10A00;stroke:#8A1100;stroke-miterlimit:10;}\n\t.st59{fill:none;stroke:#007500;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st60{fill:#F10A00;}\n\t.st61{fill:#7389B5;stroke:#314773;stroke-miterlimit:10;}\n\t.st62{fill:none;stroke:#314773;stroke-miterlimit:10;}\n\t.st63{opacity:0.4;fill:#314773;}\n\t.st64{fill:#7389B5;stroke:#314773;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st65{fill:#8BA3CD;stroke:#314773;stroke-miterlimit:10;}\n\t.st66{fill:#5A7098;}\n\t.st67{fill:none;stroke:#FFFFFF;stroke-width:8;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st68{fill:#FF3D50;stroke:#AD2F26;stroke-miterlimit:10;}\n\t.st69{fill:#FF3D50;stroke:#CC3248;stroke-width:1.058;stroke-miterlimit:10;}\n\t.st70{fill:#539243;stroke:#246901;stroke-width:3;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st71{clip-path:url(#SVGID_2_);}\n\t.st72{fill:url(#SVGID_3_);}\n\t.st73{fill:none;stroke:#CC652B;stroke-width:1.4939;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st74{fill:none;stroke:#CC652B;stroke-width:0.8407;stroke-miterlimit:10;}\n\t.st75{fill:#F9C153;}\n\t.st76{fill:#FC7351;stroke:#CC652B;stroke-width:3;stroke-miterlimit:10;}\n\t.st77{fill:none;stroke:#994A22;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st78{fill:none;stroke:#F9C153;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st79{opacity:0.8;fill:none;stroke:#F9C153;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st80{opacity:0.6;fill:none;stroke:#F9C153;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st81{opacity:0.4;fill:none;stroke:#F9C153;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st82{opacity:0.2;fill:none;stroke:#F9C153;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st83{fill:none;stroke:#994A22;stroke-width:3;stroke-miterlimit:10;}\n\t.st84{fill:#7FC731;stroke:#246901;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st85{fill:none;stroke:#ADD980;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st86{fill:#ADD980;}\n\t.st87{fill:#FC7351;}\n\t.st88{fill:#F8B05C;}\n\t.st89{fill:#F8A15A;}\n\t.st90{fill:#F99259;}\n\t.st91{fill:#F98357;}\n\t.st92{fill:#994A22;}\n\t.st93{fill:#7FC731;}\n\t.st94{fill:#FDE3DD;}\n\t.st95{fill:#F8B413;stroke:#7A4100;stroke-width:6;stroke-miterlimit:10;}\n\t.st96{fill:#487E41;stroke:#123C08;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st97{opacity:0.8;fill:none;stroke:#FFFFFF;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st98{fill:none;stroke:#123C08;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st99{opacity:0.8;fill:#FFFFFF;}\n\t.st100{fill:#F8B413;stroke:#7A4100;stroke-miterlimit:10;}\n\t.st101{opacity:0.7;fill:none;stroke:#FFFFFF;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st102{fill:none;stroke:#7A4100;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st103{opacity:0.7;fill:none;stroke:#AD2F26;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st104{opacity:0.5;fill:none;stroke:#AD2F26;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st105{opacity:0.3;fill:none;stroke:#AD2F26;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st106{opacity:0.1;fill:none;stroke:#AD2F26;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st107{opacity:0.7;fill:#FFFFFF;}\n\t.st108{fill:#DAE5D9;}\n\t.st109{fill:#F8B413;}\n\t.st110{fill:#FCE8BB;}\n\t.st111{fill:#C25729;}\n\t.st112{fill:#D1722A;}\n\t.st113{fill:#E08B2C;}\n\t.st114{fill:#EFA62E;}\n\t.st115{fill:#7A4100;}\n\t.st116{fill:none;stroke:#487E41;stroke-width:2;stroke-miterlimit:10;}\n\t.st117{fill:#D50000;stroke:#590000;stroke-miterlimit:10;}\n\t.st118{fill:#6BB25F;}\n\t.st119{fill:#590000;}\n\t.st120{fill:#7F0603;}\n\t.st121{fill:#BF793A;stroke:#590000;stroke-width:3;stroke-miterlimit:10;}\n\t.st122{fill:none;stroke:#590000;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st123{fill:none;stroke:#590000;stroke-miterlimit:10;}\n\t.st124{fill:#BF793A;stroke:#590000;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st125{fill:#6EB226;}\n\t.st126{fill:none;stroke:#123C08;stroke-width:3;stroke-miterlimit:10;}\n\t.st127{fill:#BF793A;}\n\t.st128{fill:#970231;stroke:#590000;stroke-width:3;stroke-miterlimit:10;}\n\t.st129{fill:#AF96CB;}\n\t.st130{fill:#9C325F;}\n\t.st131{opacity:0.5;fill:#AF96CB;}\n\t.st132{fill:none;stroke:#590000;stroke-width:3;stroke-miterlimit:10;}\n\t.st133{fill:#D23841;}\n\t.st134{fill:none;stroke:#9C325F;stroke-miterlimit:10;}\n\t.st135{fill:#5A9800;stroke:#225A00;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st136{opacity:0.4;fill:none;stroke:#FFFFFF;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st137{fill:none;stroke:#225A00;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st138{opacity:0.4;fill:#FFFFFF;}\n\t.st139{fill:#970231;}\n\t.st140{opacity:0.5;}\n\t.st141{fill:#DFB3C1;}\n\t.st142{fill:#5A9800;}\n\t.st143{fill:#9DC06B;}\n\t.st144{fill:#225A00;}\n\t.st145{fill:none;stroke:#9DC06B;stroke-width:3;stroke-miterlimit:10;}\n\t.st146{fill:none;stroke:#9DC06B;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st147{fill:none;stroke:#9DC06B;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st148{fill:#E73123;stroke:#8E1A00;stroke-width:3;stroke-miterlimit:10;}\n\t.st149{fill:#E73123;stroke:#8E1A00;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st150{fill:#E73123;stroke:#8E1A00;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st151{fill:#F5BA6B;}\n\t.st152{opacity:0.7;fill:#F5BA6B;}\n\t.st153{fill:none;stroke:#8E1A00;stroke-width:3;stroke-miterlimit:10;}\n\t.st154{fill:none;stroke:#8E1A00;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st155{fill:#E73123;}\n\t.st156{fill:#EF915B;}\n\t.st157{fill:#8E1A00;}\n\t.st158{fill:#BE4228;}\n\t.st159{fill:#D3954B;}\n\t.st160{fill:#CD8143;}\n\t.st161{fill:#C76C3C;}\n\t.st162{fill:#C25735;}\n\t.st163{fill:#7F2A1C;}\n\t.st164{fill:#DAAB4A;}\n\t.st165{fill:#FADE18;}\n\t.st166{fill:#AB9A00;}\n\t.st167{fill:#C09000;}\n\t.st168{fill:#A7BB41;}\n\t.st169{fill:#677F08;}\n\t.st170{fill:#C9DC85;}\n\u003c/style\u003e\n\u003cg id=\"Layer_1\"\u003e\n\t\u003cpath class=\"st168\" d=\"M459.8,252.5c0,149.2-67.1,234-207.3,234S45.2,363.1,45.2,252.5S112.3,86,252.5,86S459.8,141.9,459.8,252.5z\n\t\t\"/\u003e\n\t\u003cpath class=\"st18\" d=\"M205.7,168.5c-0.1,0-0.3,0-0.4,0c-15.9-1.7-31.6-4.3-46.7-7.7c-2.1-0.5-3.4-2.5-2.9-4.6\n\t\tc0.5-2.1,2.5-3.4,4.6-2.9c14.9,3.3,30.3,5.8,45.9,7.5c2.1,0.2,3.7,2.1,3.4,4.3C209.3,167,207.6,168.5,205.7,168.5z\"/\u003e\n\t\u003cpath class=\"st18\" d=\"M253.6,171c-9.6,0-19.3-0.3-28.8-0.9c-2.1-0.1-3.8-2-3.6-4.1c0.1-2.1,2-3.8,4.1-3.6\n\t\tc9.3,0.6,18.8,0.9,28.3,0.9c2.1,0,3.9,1.7,3.9,3.9S255.8,171,253.6,171z\"/\u003e\n\t\u003ccircle class=\"st18\" cx=\"140.6\" cy=\"152.5\" r=\"4.2\"/\u003e\n\t\u003cpath class=\"st169\" d=\"M252.5,74.5c-145.2,0-218.9,59.9-218.9,178.1c0,60.9,19.5,121.3,53.5,165.6c40.2,52.4,97.4,80.1,165.4,80.1\n\t\tc72.3,0,127.8-21.9,165-65.1c35.7-41.5,53.9-102.3,53.9-180.5C471.4,134.4,397.7,74.5,252.5,74.5z M298,466\n\t\tc5.9-4.8,11.6-10.6,16.9-17.4c1.1-1.4,1.2-3.5,0-4.9c-1.7-1.9-4.5-1.8-6,0.1c-16.3,20.8-35.2,31.3-56.4,31.3\n\t\tc-21.1,0-40.1-10.5-56.4-31.3c-1.3-1.7-3.7-2-5.4-0.7c-1.7,1.3-2,3.7-0.7,5.4c4.5,5.7,9.1,10.7,14,15c2.3,2,0.3,5.8-2.7,5\n\t\tC106.3,443.1,56.8,347.3,56.8,252.5c0-52.4,15.3-90.2,46.8-115.7c32.1-26,82.2-39.2,148.9-39.2c66.7,0,116.8,13.2,148.9,39.2\n\t\tc31.5,25.5,46.8,63.4,46.8,115.7c0,128.2-49.7,201.5-147.9,218.6C297.4,471.6,295.7,467.9,298,466z\"/\u003e\n\t\u003cpath class=\"st170\" d=\"M109.7,218.3c-5.1,0-5.2,8,0,8C114.8,226.3,114.8,218.3,109.7,218.3z\"/\u003e\n\t\u003cpath class=\"st170\" d=\"M119.7,168.3c-5.1,0-5.2,8,0,8C124.8,176.3,124.8,168.3,119.7,168.3z\"/\u003e\n\t\u003cpath class=\"st170\" d=\"M97.2,291.1c-5.1,0-5.2,8,0,8C102.3,299.1,102.3,291.1,97.2,291.1z\"/\u003e\n\t\u003cpath class=\"st170\" d=\"M132.9,368.6c-5.1,0-5.2,8,0,8C138.1,376.6,138.1,368.6,132.9,368.6z\"/\u003e\n\t\u003cpath class=\"st170\" d=\"M240.4,399.8c-5.1,0-5.2,8,0,8C245.5,407.8,245.5,399.8,240.4,399.8z\"/\u003e\n\t\u003cpath class=\"st170\" d=\"M220.8,337.4c-5.1,0-5.2,8,0,8C226,345.4,226,337.4,220.8,337.4z\"/\u003e\n\t\u003cpath class=\"st170\" d=\"M240.6,230.1c-5.1,0-5.2,8,0,8C245.8,238.1,245.8,230.1,240.6,230.1z\"/\u003e\n\t\u003cpath class=\"st170\" d=\"M210,306.3c-5.1,0-5.2,8,0,8C215.2,314.3,215.2,306.3,210,306.3z\"/\u003e\n\t\u003cpath class=\"st170\" d=\"M175.2,193.2c-5.1,0-5.2,8,0,8C180.4,201.2,180.4,193.2,175.2,193.2z\"/\u003e\n\t\u003cpath class=\"st170\" d=\"M156,228c-5.1,0-5.2,8,0,8C161.1,236,161.1,228,156,228z\"/\u003e\n\t\u003cpath class=\"st170\" d=\"M152.4,343c-5.1,0-5.2,8,0,8C157.6,351,157.6,343,152.4,343z\"/\u003e\n\t\u003cpath class=\"st170\" d=\"M371.6,396.2c5,1.1,6.7-6.7,1.7-7.8C368.3,387.3,366.6,395.1,371.6,396.2z\"/\u003e\n\t\u003cpath class=\"st170\" d=\"M409.4,327.8c5,1.1,6.7-6.7,1.7-7.8C406.1,318.9,404.4,326.7,409.4,327.8z\"/\u003e\n\t\u003cpath class=\"st170\" d=\"M391.1,244.4c5,1.1,6.7-6.7,1.7-7.8C387.8,235.5,386,243.3,391.1,244.4z\"/\u003e\n\t\u003cpath class=\"st170\" d=\"M368,176.2c5,1.1,6.7-6.7,1.7-7.8C364.6,167.3,362.9,175.1,368,176.2z\"/\u003e\n\t\u003cpath class=\"st170\" d=\"M312.8,191c5,1.1,6.7-6.7,1.7-7.8C309.5,182.1,307.7,189.9,312.8,191z\"/\u003e\n\t\u003cpath class=\"st170\" d=\"M323.8,147c5,1.1,6.7-6.7,1.7-7.8C320.5,138,318.8,145.8,323.8,147z\"/\u003e\n\t\u003cpath class=\"st170\" d=\"M298.5,256.1c5,1.1,6.7-6.7,1.7-7.8C295.2,247.2,293.5,255,298.5,256.1z\"/\u003e\n\t\u003cpath class=\"st170\" d=\"M326,318.1c5,1.1,6.7-6.7,1.7-7.8C322.7,309.1,321,317,326,318.1z\"/\u003e\n\t\u003cpath class=\"st170\" d=\"M344.9,347.5c5,1.1,6.7-6.7,1.7-7.8C341.5,338.6,339.8,346.4,344.9,347.5z\"/\u003e\n\t\u003cpath class=\"st170\" d=\"M301,399c5,1.1,6.7-6.7,1.7-7.8C297.7,390.1,296,397.9,301,399z\"/\u003e\n\t\u003cpath class=\"st170\" d=\"M350.3,292.5c5,1.1,6.7-6.7,1.7-7.8C347,283.6,345.3,291.4,350.3,292.5z\"/\u003e\n\t\u003cpath class=\"st1\" d=\"M269.5,74.7c2.7,0.1,5.3,0.2,8,0.3c-7.6-32.3-27.4-55.8-57.5-67.8c-2.8-1.1-5.7-1.7-8.6-1.7\n\t\tc-5.4,0-10.9,1.9-15.3,5.7c-3.3,2.9-5.7,6.7-7,10.9l-7.5,23.5c-1.9,6-1.5,12.6,1.5,18.1c3.2,5.8,8.5,9.9,15,11.4\n\t\tc0.5,0.1,2.4,0.7,5.1,1.9c4.9-0.6,10-1,15.1-1.4c6.1-0.4,12,2.4,15.3,7.6c5,7.9,8.3,18.4,7.7,32.1c2.5,0.1,5.1,0.2,7.7,0.3\n\t\tc0.8-18.3-4.6-31.5-12-41c0,0,0,0,0,0c-0.1-0.2-0.3-0.3-0.4-0.5c-0.1-0.1-0.1-0.1-0.2-0.2c-0.4-0.6-0.9-1.1-1.4-1.6\n\t\tc0,0-0.1-0.1-0.1-0.1c0,0,0,0,0,0c-8.7-10-19.4-15.3-25.8-17.8c-3-1.2-4.6-4.5-3.6-7.7l3.6-11.3c1.2-3.7,5.3-5.4,8.7-3.6\n\t\tc19.7,10,29.9,25.9,35,41.5c0,0,0,0,0,0c5.6,17.1,5,34,4.1,42.4c2.6-0.1,5.2-0.2,7.8-0.3c0.7-7.4,1-19.6-1.6-33.1l0-0.1\n\t\tC262.4,78.3,265.5,74.6,269.5,74.7z\"/\u003e\n\t\u003cg\u003e\n\t\t\u003cpath class=\"st0\" d=\"M248.9,115.7c-0.7,0-1.4,0-2.2-0.1C247.5,115.7,248.2,115.7,248.9,115.7z\"/\u003e\n\t\t\u003cpath class=\"st0\" d=\"M257,115.7c1.6-16.3,2.3-63.9-40.6-84.6c-2.7-1.3-5.9,0.1-6.8,2.9l-4.5,14c-0.8,2.5,0.5,5.1,3,6.1\n\t\t\tc11.8,4.4,42.8,19.9,40.9,61.7c1.2,0,2.3,0,3.5,0c2.8,0,5.6-0.1,8.4-0.2c0,0,0,0,0,0C259.6,115.6,258.3,115.7,257,115.7z\"/\u003e\n\t\u003c/g\u003e\n\t\u003cpath class=\"st169\" d=\"M252.5,119.6c-16.4,0-32.3-1.9-44.8-5.3c-2.1-0.6-3.3-2.7-2.7-4.8c0.6-2.1,2.7-3.3,4.8-2.7\n\t\tc11.8,3.2,27,5,42.7,5c15.4,0,30.3-1.7,42.1-4.8c2.1-0.6,4.2,0.7,4.7,2.7c0.6,2.1-0.7,4.2-2.7,4.7\n\t\tC284.2,117.8,268.6,119.6,252.5,119.6z\"/\u003e\n\u003c/g\u003e\n\u003cg id=\"Layer_2\"\u003e\n\u003c/g\u003e\n\u003cg id=\"Layer_3\"\u003e\n\u003c/g\u003e\n\u003c/svg\u003e"
          },
          "links": {
              "self": {
                  "api": "/api/v1/crops/554045913235350003000000",
                  "website": "/crops/554045913235350003000000"
              }
          },
          "relationships": {
              "companions": {
                  "links": {
                      "related": "/api/v1/crops/554045913235350003000000/companions"
                  }
              },
              "pictures": {
                  "links": {
                      "related": "/api/v1/crops/554045913235350003000000/pictures"
                  },
                  "data": [{
                          "type": "crops-pictures",
                          "id": "5540461d36303600032d0000"
                      }
                  ]
              }
          }
      }, {
          "type": "crops",
          "id": "5939e1cdf731ad0004000016",
          "attributes": {
              "name": "Apple Mint",
              "slug": "apple-mint",
              "binomial_name": "Mentha suaveolens",
              "common_names": ["apple mint", "woolly mint", "round-leafed mint", "hierbabuena"],
              "description": "Apple Mint is an herbaceous, perennial member of the Mint family that is often grown as a culinary herb, ornamental, or ground cover. The plant has light green wrinkled leaves, white or pinkish flowers, and a fruity, minty flavor. It's leaves can be used as a garnish, in salads, and to make tea or apple mint jelly. It has a worldwide history of medicinal use. Like other members of the Mint family, it spreads by underground roots called rhizomes and can become invasive in a garden. Plant in a container or deadhead before flowers go to seed to prevent this.",
              "sun_requirements": "Full Sun",
              "sowing_method": "Direct seed or rhizomes",
              "spread": null,
              "row_spacing": 35,
              "height": 75,
              "processing_pictures": 0,
              "guides_count": 0,
              "main_image_path": "/assets/baren_field_square-4a827e5f09156962937eb100e4484f87e1e788f28a7c9daefe2a9297711a562a.jpg",
              "taxon": null,
              "tags_array": [],
              "growing_degree_days": null,
              "svg_icon": null
          },
          "links": {
              "self": {
                  "api": "/api/v1/crops/5939e1cdf731ad0004000016",
                  "website": "/crops/5939e1cdf731ad0004000016"
              }
          },
          "relationships": {
              "companions": {
                  "links": {
                      "related": "/api/v1/crops/5939e1cdf731ad0004000016/companions"
                  }
              },
              "pictures": {
                  "links": {
                      "related": "/api/v1/crops/5939e1cdf731ad0004000016/pictures"
                  },
                  "data": []
              }
          }
      }, {
          "type": "crops",
          "id": "54afe1e231666300025a0f00",
          "attributes": {
              "name": "african star apple",
              "slug": "african-star-apple",
              "binomial_name": "chrysophyllum africanum",
              "common_names": ["african star apple"],
              "description": null,
              "sun_requirements": null,
              "sowing_method": null,
              "spread": null,
              "row_spacing": null,
              "height": null,
              "processing_pictures": 0,
              "guides_count": 0,
              "main_image_path": "/assets/baren_field_square-4a827e5f09156962937eb100e4484f87e1e788f28a7c9daefe2a9297711a562a.jpg",
              "taxon": null,
              "tags_array": [],
              "growing_degree_days": null,
              "svg_icon": null
          },
          "links": {
              "self": {
                  "api": "/api/v1/crops/54afe1e231666300025a0f00",
                  "website": "/crops/54afe1e231666300025a0f00"
              }
          },
          "relationships": {
              "companions": {
                  "links": {
                      "related": "/api/v1/crops/54afe1e231666300025a0f00/companions"
                  }
              },
              "pictures": {
                  "links": {
                      "related": "/api/v1/crops/54afe1e231666300025a0f00/pictures"
                  },
                  "data": []
              }
          }
      }, {
          "type": "crops",
          "id": "542ea38463313600021a1a00",
          "attributes": {
              "name": "southern crab apple",
              "slug": "southern-crab-apple",
              "binomial_name": "Malus angustifolia",
              "common_names": ["southern crab apple"],
              "description": null,
              "sun_requirements": null,
              "sowing_method": null,
              "spread": null,
              "row_spacing": null,
              "height": null,
              "processing_pictures": 0,
              "guides_count": 0,
              "main_image_path": "/assets/baren_field_square-4a827e5f09156962937eb100e4484f87e1e788f28a7c9daefe2a9297711a562a.jpg",
              "taxon": null,
              "tags_array": [],
              "growing_degree_days": null,
              "svg_icon": null
          },
          "links": {
              "self": {
                  "api": "/api/v1/crops/542ea38463313600021a1a00",
                  "website": "/crops/542ea38463313600021a1a00"
              }
          },
          "relationships": {
              "companions": {
                  "links": {
                      "related": "/api/v1/crops/542ea38463313600021a1a00/companions"
                  }
              },
              "pictures": {
                  "links": {
                      "related": "/api/v1/crops/542ea38463313600021a1a00/pictures"
                  },
                  "data": []
              }
          }
      }, {
          "type": "crops",
          "id": "542ea38463313600021b1a00",
          "attributes": {
              "name": "Siberian crab apple",
              "slug": "siberian-crab-apple",
              "binomial_name": "Malus baccata",
              "common_names": ["Siberian crab apple"],
              "description": null,
              "sun_requirements": null,
              "sowing_method": null,
              "spread": null,
              "row_spacing": null,
              "height": null,
              "processing_pictures": 0,
              "guides_count": 0,
              "main_image_path": "/assets/baren_field_square-4a827e5f09156962937eb100e4484f87e1e788f28a7c9daefe2a9297711a562a.jpg",
              "taxon": null,
              "tags_array": [],
              "growing_degree_days": null,
              "svg_icon": null
          },
          "links": {
              "self": {
                  "api": "/api/v1/crops/542ea38463313600021b1a00",
                  "website": "/crops/542ea38463313600021b1a00"
              }
          },
          "relationships": {
              "companions": {
                  "links": {
                      "related": "/api/v1/crops/542ea38463313600021b1a00/companions"
                  }
              },
              "pictures": {
                  "links": {
                      "related": "/api/v1/crops/542ea38463313600021b1a00/pictures"
                  },
                  "data": []
              }
          }
      }, {
          "type": "crops",
          "id": "542ea38563313600021c1a00",
          "attributes": {
              "name": "sweet crab apple",
              "slug": "sweet-crab-apple",
              "binomial_name": "Malus coronaria",
              "common_names": ["sweet crab apple"],
              "description": null,
              "sun_requirements": null,
              "sowing_method": null,
              "spread": null,
              "row_spacing": null,
              "height": null,
              "processing_pictures": 0,
              "guides_count": 0,
              "main_image_path": "/assets/baren_field_square-4a827e5f09156962937eb100e4484f87e1e788f28a7c9daefe2a9297711a562a.jpg",
              "taxon": null,
              "tags_array": [],
              "growing_degree_days": null,
              "svg_icon": null
          },
          "links": {
              "self": {
                  "api": "/api/v1/crops/542ea38563313600021c1a00",
                  "website": "/crops/542ea38563313600021c1a00"
              }
          },
          "relationships": {
              "companions": {
                  "links": {
                      "related": "/api/v1/crops/542ea38563313600021c1a00/companions"
                  }
              },
              "pictures": {
                  "links": {
                      "related": "/api/v1/crops/542ea38563313600021c1a00/pictures"
                  },
                  "data": []
              }
          }
      }, {
          "type": "crops",
          "id": "542ea38663313600021d1a00",
          "attributes": {
              "name": "Oregon crab apple",
              "slug": "oregon-crab-apple",
              "binomial_name": "Malus fusca",
              "common_names": ["Oregon crab apple"],
              "description": null,
              "sun_requirements": null,
              "sowing_method": null,
              "spread": null,
              "row_spacing": null,
              "height": null,
              "processing_pictures": 0,
              "guides_count": 0,
              "main_image_path": "/assets/baren_field_square-4a827e5f09156962937eb100e4484f87e1e788f28a7c9daefe2a9297711a562a.jpg",
              "taxon": null,
              "tags_array": [],
              "growing_degree_days": null,
              "svg_icon": null
          },
          "links": {
              "self": {
                  "api": "/api/v1/crops/542ea38663313600021d1a00",
                  "website": "/crops/542ea38663313600021d1a00"
              }
          },
          "relationships": {
              "companions": {
                  "links": {
                      "related": "/api/v1/crops/542ea38663313600021d1a00/companions"
                  }
              },
              "pictures": {
                  "links": {
                      "related": "/api/v1/crops/542ea38663313600021d1a00/pictures"
                  },
                  "data": []
              }
          }
      }, {
          "type": "crops",
          "id": "542ea38863313600021e1a00",
          "attributes": {
              "name": "prairie crab apple",
              "slug": "prairie-crab-apple",
              "binomial_name": "Malus ioensis",
              "common_names": ["prairie crab apple"],
              "description": null,
              "sun_requirements": null,
              "sowing_method": null,
              "spread": null,
              "row_spacing": null,
              "height": null,
              "processing_pictures": 0,
              "guides_count": 0,
              "main_image_path": "/assets/baren_field_square-4a827e5f09156962937eb100e4484f87e1e788f28a7c9daefe2a9297711a562a.jpg",
              "taxon": null,
              "tags_array": [],
              "growing_degree_days": null,
              "svg_icon": null
          },
          "links": {
              "self": {
                  "api": "/api/v1/crops/542ea38863313600021e1a00",
                  "website": "/crops/542ea38863313600021e1a00"
              }
          },
          "relationships": {
              "companions": {
                  "links": {
                      "related": "/api/v1/crops/542ea38863313600021e1a00/companions"
                  }
              },
              "pictures": {
                  "links": {
                      "related": "/api/v1/crops/542ea38863313600021e1a00/pictures"
                  },
                  "data": []
              }
          }
      }
  ],
  "included": [{
          "type": "crops-pictures",
          "id": "5939df7401f8790004000005",
          "attributes": {
              "id": "5939df7401f8790004000005",
              "photographic_id": "551dbfed3938340003160000",
              "image_url": "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/5939df7401f8790004000005.?1496964975",
              "small_url": "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/5939df7401f8790004000005.jpg?1496964975",
              "thumbnail_url": "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/5939df7401f8790004000005.jpg?1496964975",
              "medium_url": "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/5939df7401f8790004000005.jpg?1496964975",
              "large_url": "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/5939df7401f8790004000005.jpg?1496964975",
              "canopy_url": "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/5939df7401f8790004000005.jpg?1496964975"
          }
      }, {
          "type": "crops-pictures",
          "id": "5939df7901f8790004000006",
          "attributes": {
              "id": "5939df7901f8790004000006",
              "photographic_id": "551dbfed3938340003160000",
              "image_url": "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/5939df7901f8790004000006.?1496964983",
              "small_url": "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/5939df7901f8790004000006.jpg?1496964983",
              "thumbnail_url": "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/5939df7901f8790004000006.jpg?1496964983",
              "medium_url": "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/5939df7901f8790004000006.jpg?1496964983",
              "large_url": "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/5939df7901f8790004000006.jpg?1496964983",
              "canopy_url": "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/5939df7901f8790004000006.jpg?1496964983"
          }
      }, {
          "type": "crops-pictures",
          "id": "5540461d36303600032d0000",
          "attributes": {
              "id": "5540461d36303600032d0000",
              "photographic_id": "554045913235350003000000",
              "image_url": "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/5540461d36303600032d0000.?1430275613",
              "small_url": "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/5540461d36303600032d0000.jpg?1430275613",
              "thumbnail_url": "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/5540461d36303600032d0000.jpg?1430275613",
              "medium_url": "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/5540461d36303600032d0000.jpg?1430275613",
              "large_url": "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/5540461d36303600032d0000.jpg?1430275613",
              "canopy_url": "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/5540461d36303600032d0000.jpg?1430275613"
          }
      }
  ]
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Customer API CRUD Calls
router.get('/customers', function(req, res, next) {
  var sql = "SELECT * FROM CUSTOMERS;";
  sqlcon.query(sql, function (err, result, fields) {
      if (err) throw err;
      //res.send(result[0].NAME);
      res.render('index', { data: result[1] });
  });
});


router.get('/veg', function(req, res, next) {

  request({
    method: 'GET',
    uri: 'https://openfarm.cc/api/v1/crops/?filter=apple'
  }, function (error, response, body){
    if(!error && response.statusCode == 200){
      res.send(data);
    }
  })  

});

router.get('/veg1', function(req, res, next) {


  res.json(vegdata);

});

module.exports = router;
