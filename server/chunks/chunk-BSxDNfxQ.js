const lods = [
  {
    "level": 0,
    "levelValue": "0",
    "resolution": 1.4062500262315807,
    "scale": 590995197141669e-6
  },
  {
    "level": 1,
    "levelValue": "1",
    "resolution": 0.7031250131157915,
    "scale": 295497598570835e-6
  },
  {
    "level": 2,
    "levelValue": "2",
    "resolution": 0.3515625065578945,
    "scale": 147748799285417e-6
  },
  {
    "level": 3,
    "levelValue": "3",
    "resolution": 0.1757812532789475,
    "scale": 738743996427086e-7
  },
  {
    "level": 4,
    "levelValue": "4",
    "resolution": 0.08789062663947375,
    "scale": 369371998213543e-7
  },
  {
    "level": 5,
    "levelValue": "5",
    "resolution": 0.043945313319736994,
    "scale": 184685999106772e-7
  },
  {
    "level": 6,
    "levelValue": "6",
    "resolution": 0.02197265665986845,
    "scale": 923429995533858e-8
  },
  {
    "level": 7,
    "levelValue": "7",
    "resolution": 0.010986328329934226,
    "scale": 461714997766929e-8
  },
  {
    "level": 8,
    "levelValue": "8",
    "resolution": 0.005493164164967124,
    "scale": 230857498883465e-8
  },
  {
    "level": 9,
    "levelValue": "9",
    "resolution": 0.0027465820824835504,
    "scale": 115428749441732e-8
  },
  {
    "level": 10,
    "levelValue": "10",
    "resolution": 0.0013732910412417776,
    "scale": 577143.747208661
  },
  {
    "level": 11,
    "levelValue": "11",
    "resolution": 6866455206208899e-19,
    "scale": 288571.873604331
  },
  {
    "level": 12,
    "levelValue": "12",
    "resolution": 3433227603104438e-19,
    "scale": 144285.936802165
  },
  {
    "level": 13,
    "levelValue": "13",
    "resolution": 1716613801552224e-19,
    "scale": 72142.9684010827
  },
  {
    "level": 14,
    "levelValue": "14",
    "resolution": 8583069007761132e-20,
    "scale": 36071.4842005414
  },
  {
    "level": 15,
    "levelValue": "15",
    "resolution": 4291534503880566e-20,
    "scale": 18035.7421002707
  },
  {
    "level": 16,
    "levelValue": "16",
    "resolution": 21457672519402802e-21,
    "scale": 9017.87105013534
  },
  {
    "level": 17,
    "levelValue": "17",
    "resolution": 10728836259701401e-21,
    "scale": 4508.93552506767
  },
  {
    "level": 18,
    "levelValue": "18",
    "resolution": 5364418129850712e-21,
    "scale": 2254.46776253384
  },
  {
    "level": 19,
    "levelValue": "19",
    "resolution": 2682209064925356e-21,
    "scale": 1127.23388126692
  },
  {
    "level": 20,
    "levelValue": "20",
    "resolution": 13411045321451153e-22,
    "scale": 563.6169405
  }
];
const origin = {
  x: -180,
  y: 90
};
const levelToScale = lods.reduce((a, c) => (a[c.level] = c.scale, a), {});
const fullExtent = {
  xmin: -180,
  ymin: -90,
  xmax: 180,
  ymax: 90
};
const tileInfo4490 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  fullExtent,
  levelToScale,
  lods,
  origin
}, Symbol.toStringTag, { value: "Module" }));
export {
  levelToScale as a,
  lods as l,
  origin as o,
  tileInfo4490 as t
};
