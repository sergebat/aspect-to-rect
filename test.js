var aspectToRect = require("./");
var assert = require("assert");

describe('aspect-to-rect', function() {
    it('should match exact aspect ratio if within range', function() {
        assert.deepEqual(aspectToRect(1280/1920, {
            width: 640,
            height: {min: 832, max: 1136}
        }), {width: 640, height: 960});
    });
});