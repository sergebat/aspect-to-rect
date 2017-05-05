var aspectToRect = require("./");
var assert = require("assert");

describe('aspect-to-rect', function() {
    it('should match exact aspect ratio if within range on height', function() {
        assert.deepEqual(aspectToRect(1280/1920, {
            width: 640,
            height: {min: 832, max: 1136}
        }), {width: 640, height: 960});
    });
    it('should match upper height bound if target rect is very toll', function() {
        assert.deepEqual(aspectToRect(1280/10000, {
            width: 640,
            height: {min: 832, max: 1136}
        }), {width: 640, height: 1136});
    });
    it('should match lower height bound if target rect is very small', function() {
        assert.deepEqual(aspectToRect(1280/100, {
            width: 640,
            height: {min: 832, max: 1136}
        }), {width: 640, height: 832});
    });
    it('should match exact aspect ratio if within range on width', function() {
        assert.deepEqual(aspectToRect(1920/1280, {
            width: {min: 832, max: 1136},
            height: 640
        }), {width: 960, height: 640});
    });
    it('should match upper width bound if target rect is very wide', function() {
        assert.deepEqual(aspectToRect(5000/1280, {
            width: {min: 832, max: 1136},
            height: 640
        }), {width: 1136, height: 640});
    });
    it('should match lower width bound if target rect is very narrow', function() {
        assert.deepEqual(aspectToRect(10/1280, {
            width: {min: 832, max: 1136},
            height: 640
        }), {width: 832, height: 640});
    });


    it('should not fail on zero aspect ratio', function() {
        assert.deepEqual(aspectToRect(0, {
            width: {min: 500, max: 100},
            height: 500
        }), {width: 0, height: 0});
    });
    it('should support fixed canvas', function() {
        assert.deepEqual(aspectToRect(500, {
            width: 300,
            height: 400
        }), {width: 300, height: 400});
    });

    it('should support returning result via last parameter', function() {
        var result = {};
        var r = aspectToRect(500, {
            width: 300,
            height: 400
        }, result);
        assert.equal(result, r);
        assert.deepEqual(result, {width: 300, height: 400});
    });



    it('should support two options - horizontal and vertical', function() {
        assert.deepEqual(aspectToRect(1280/1920, [{
            width: 640,
            height: {min: 832, max: 1136}
        }, {
            width: {min: 900, max: 1136},
            height: 640
        }]), {width: 640, height: 960});
        assert.deepEqual(aspectToRect(1920/1280, [{
            width: 640,
            height: {min: 832, max: 1136}
        }, {
            width: {min: 1000, max: 1136},
            height: 640
        }]), {width: 1000, height: 640});
    });


});