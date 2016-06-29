/**
 * Created by daniel.irwin on 6/28/16.
 */

function arupex_diff_map(map1, map2){
    var result = {};
    Object.keys(map1).forEach(function(keyOfMap1){
        if(!map2[keyOfMap1]){
            result[keyOfMap1] = map1[keyOfMap1];
        }
    });
    return result;
}


if(typeof module !== 'undefined') {
    module.exports = arupex_diff_map;
}