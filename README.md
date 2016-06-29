# diff-map
Find the Diff of 2 maps based on keys alone

#Install

    npm install diff-map --save

#Usage

    var diffMap = require('diff-map');

    var map1 = { 1 : {}, 3 : {} };

    var map2 = { 1 : {}, 2 : {} };

    diffMap(map1, map2)

Result:

    { 3 : {} }

If you:

    diffMap(map2, map1)

Result:

    { 2 : {} }
