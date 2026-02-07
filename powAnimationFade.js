// @input SceneObject graphicObject
// @input float popSpeed = 0.05
// @input float maxScale = 30.0

var isPopped = false;
var currentScale = 0;

function onUpdate() {
    if (isPopped && currentScale < 1) {
        currentScale += script.popSpeed;
        
        // Multiply the progress (0 to 1) by our Max Scale
        var s = currentScale * script.maxScale;
        script.graphicObject.getTransform().setLocalScale(new vec3(s, s, s));
    }
}

function onTap() {
    isPopped = true;
    currentScale = 0; 
}

script.createEvent("UpdateEvent").bind(onUpdate);
script.createEvent("TapEvent").bind(onTap);