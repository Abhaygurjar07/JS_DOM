// locomotive lagana haaa ,joo smooth scrolling ke leye use hota ha.
// gsap lagana joo image ko animate karne ke leye  use hota ha.
// shery js ka use karnege apn poore webpage ko animate karne ke leye .


const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
gsap.from(".anime1",{
    stagger: .5,
    y: 10,
    duration: .5,
    // ease: power1,
    opacity: 0
})

Shery.textAnimate(".anime2 " , {
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 1,
    // ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    // multiplier: 0.1,
});
gsap.from(".anime3" ,{
    y: 20,
    stagger: .4,
    opacity: 0,
    ease: Expo,
    duration: 1,
})

Shery.imageEffect(".center-img img" ,{
    style: 3,
    config: {"uFrequencyX":{"value":12,"range":[0,100]},
    "uFrequencyY":{"value":8.4,"range":[0,100]},"uFrequencyZ":
    {"value":9.92,"range":[0,100]},"geoVertex":{"range":[1,64],
        "value":1},"zindex":{"value":-9996999,"range":[-9999999,9999999]},
        "aspect":{"value":0.6874999475479165},"ignoreShapeAspect":{"value":false},
        "shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.61,"y":0.49}},
        "shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},
        "currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},
        "growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},
        "displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.52,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":
        {"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},
        "antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    
})

Shery.imageEffect(".left-side img" ,{
    style: 1,
    config: {"a":{"value":1,"range":[0,30]},"b":{"value":0.7,"range":[-1,1]},
    "zindex":{"value":-9996999,"range":[-9999999,9999999]},
    "aspect":{"value":0.7200000170898427},"ignoreShapeAspect":{"value":true},
    "shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},
    "shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},
    "currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},
    "infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,
    "range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},
    "masker":{"value":true},"maskVal":{"value":1.15,"range":[1,5]},"scrollType":{"value":0},
    "geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},
    "noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    
})

Shery.imageEffect(".pani img" ,{
    style: 2,
    config: {"resolutionXY":{"value":100},"distortion":{"value":true},"mode":{"value":-3},"mousemove":{"value":0},"modeA":{"value":1},"modeN":{"value":0},"speed":{"value":1,"range":[-500,500],"rangep":[-10,10]},"frequency":{"value":50,"range":[-800,800],"rangep":[-50,50]},"angle":{"value":0.5,"range":[0,3.141592653589793]},"waveFactor":{"value":1.4,"range":[-3,3]},"color":{"value":10212607},"pixelStrength":{"value":3,"range":[-20,100],"rangep":[-20,20]},"quality":{"value":5,"range":[0,10]},"contrast":{"value":1,"range":[-25,25]},"brightness":{"value":1,"range":[-1,25]},"colorExposer":{"value":0.18,"range":[-5,5]},"strength":{"value":0.2,"range":[-40,40],"rangep":[-5,5]},"exposer":{"value":8,"range":[-100,100]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7000000183105458},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.21,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},    
})

Shery.imageEffect(".cloud img" ,{
    style: 2,
    config: {"resolutionXY":{"value":100},"distortion":{"value":true},"mode":{"value":-3},"mousemove":{"value":1},"modeA":{"value":1},"modeN":{"value":0},"speed":{"value":1,"range":[-500,500],"rangep":[-10,10]},"frequency":{"value":-184.62,"range":[-800,800],"rangep":[-50,50]},"angle":{"value":1.55,"range":[0,3.141592653589793]},"waveFactor":{"value":1.54,"range":[-3,3]},"color":{"value":10212607},"pixelStrength":{"value":-5.38,"range":[-20,100],"rangep":[-20,20]},"quality":{"value":9.55,"range":[0,10]},"contrast":{"value":1,"range":[-25,25]},"brightness":{"value":1,"range":[-1,25]},"colorExposer":{"value":0.18,"range":[-5,5]},"strength":{"value":0.2,"range":[-40,40],"rangep":[-5,5]},"exposer":{"value":8,"range":[-100,100]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666531032998},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.21,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
})

Shery.imageEffect(".botel-img" ,{
   style: 4,
   config: {"uColor":{"value":false},"uSpeed":{"value":0.29,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.5,"range":[0,5]},"uFrequency":{"value":3.5,"range":[0,10]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.0337498508237126},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.21,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.15,"range":[0,10]},"metaball":{"value":0.17,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
 debug: true,
   gooey: true,
})
