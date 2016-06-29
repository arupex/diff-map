/**
 * Created by daniel.irwin on 6/28/16.
 */
describe('diff-map', function(){

    var assert = require('assert-diff').deepEqual;

    var diffMap = require('../index');

    var map1 = { 1 : {}, 3 : {} };

    var map2 = { 1 : {}, 2 : {} };

    it('map1 - map2', function(){
        assert(diffMap(map1, map2),{ 3 : {} })
    });

    it('map2 - map1', function(){
        assert(diffMap(map2, map1), {2 : {} });
    });

});