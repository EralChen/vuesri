import { ip as t$1, aM as s$1, c2 as F, de as b$1, iq as u, hO as o, b$ as n, ie as z, g_ as h$1, cq as a, ir as t$2, aw as u$1, is as _$1, dz as u$2, dy as m, cy as x$1, it as R$1 } from "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
class t {
  constructor(t2, l2 = null) {
    if (this.tile = t2, null != l2 && null != t2) {
      const e = t2.extent;
      this._samplerData = new t$1(l2, e);
    }
  }
  get zmin() {
    return null != this._samplerData ? this._samplerData.data.minValue : 0;
  }
  get zmax() {
    return null != this._samplerData ? this._samplerData.data.maxValue : 0;
  }
  sample(a2, t2) {
    if (null == this._samplerData)
      return;
    const { safeWidth: e, data: r, dx: s, dy: n2, y1: i, x0: u2 } = this._samplerData, { width: m2, values: o2, noDataValue: h } = r, p = l(n2 * (i - t2), 0, e), D = l(s * (a2 - u2), 0, e), f = Math.floor(p), c = Math.floor(D), d = f * m2 + c, _2 = d + m2, x2 = o2[d], V = o2[_2], g2 = o2[d + 1], v2 = o2[_2 + 1];
    if (x2 !== h && V !== h && g2 !== h && v2 !== h) {
      const a3 = D - c, t3 = x2 + (g2 - x2) * a3;
      return t3 + (V + (v2 - V) * a3 - t3) * (p - f);
    }
  }
}
function l(a2, t2, l2) {
  return a2 < t2 ? t2 : a2 > l2 ? l2 : a2;
}
class T {
  async queryAll(e, i, n2) {
    if (!(e = n2 && n2.ignoreInvisibleLayers ? e.filter((e2) => e2.visible) : e.slice()).length)
      throw new s$1("elevation-query:invalid-layer", "Elevation queries require at least one elevation layer to fetch tiles from");
    const l2 = v.fromGeometry(i);
    let s = false;
    n2 && n2.returnSampleInfo || (s = true);
    const o2 = { ...R, ...n2, returnSampleInfo: true }, a2 = await this.query(e[e.length - 1], l2, o2), r = await this._queryAllContinue(e, a2, o2);
    return r.geometry = r.geometry.export(), s && delete r.sampleInfo, r;
  }
  async query(e, i, n2) {
    if (!e)
      throw new s$1("elevation-query:invalid-layer", "Elevation queries require an elevation layer to fetch tiles from");
    if (!i || !(i instanceof v) && "point" !== i.type && "multipoint" !== i.type && "polyline" !== i.type)
      throw new s$1("elevation-query:invalid-geometry", "Only point, polyline and multipoint geometries can be used to query elevation");
    const l2 = { ...R, ...n2 }, s = new x(e, i.spatialReference, l2), o2 = l2.signal;
    return await e.load({ signal: o2 }), await this._createGeometryDescriptor(s, i, o2), await this._selectTiles(s, o2), await this._populateElevationTiles(s, o2), this._sampleGeometryWithElevation(s), this._createQueryResult(s, o2);
  }
  async createSampler(e, i, n2) {
    if (!e)
      throw new s$1("elevation-query:invalid-layer", "Elevation queries require an elevation layer to fetch tiles from");
    if (!i || "extent" !== i.type)
      throw new s$1("elevation-query:invalid-extent", "Invalid or undefined extent");
    const l2 = { ...R, ...n2 };
    return this._createSampler(e, i, l2);
  }
  async createSamplerAll(e, i, n2) {
    if (!(e = n2 && n2.ignoreInvisibleLayers ? e.filter((e2) => e2.visible) : e.slice()).length)
      throw new s$1("elevation-query:invalid-layer", "Elevation queries require at least one elevation layer to fetch tiles from");
    if (!i || "extent" !== i.type)
      throw new s$1("elevation-query:invalid-extent", "Invalid or undefined extent");
    const l2 = { ...R, ...n2, returnSampleInfo: true }, s = await this._createSampler(e[e.length - 1], i, l2);
    return this._createSamplerAllContinue(e, i, s, l2);
  }
  async _createSampler(e, t2, i, n2) {
    const l2 = i.signal;
    await e.load({ signal: l2 });
    const s = t2.spatialReference, o2 = e.tileInfo.spatialReference;
    s.equals(o2) || (await F([{ source: s, dest: o2 }], { signal: l2 }), t2 = b$1(t2, o2));
    const a2 = new _(e, t2, i, n2);
    return await this._selectTiles(a2, l2), await this._populateElevationTiles(a2, l2), new u(a2.elevationTiles, a2.layer.tileInfo, a2.options.noDataValue);
  }
  async _createSamplerAllContinue(e, t2, i, n2) {
    if (e.pop(), !e.length)
      return i;
    const l2 = i.samplers.map((e2) => o(e2.extent)), s = await this._createSampler(e[e.length - 1], t2, n2, l2);
    if (0 === s.samplers.length)
      return i;
    const o$1 = i.samplers.concat(s.samplers), a2 = new u(o$1, n2.noDataValue);
    return this._createSamplerAllContinue(e, t2, a2, n2);
  }
  async _queryAllContinue(e, t2, n$1) {
    const l2 = e.pop(), s = t2.geometry.coordinates, o2 = t2.sampleInfo;
    n(o2);
    const a2 = [], r = [];
    for (let i = 0; i < s.length; i++) {
      const t3 = o2[i];
      t3.demResolution >= 0 ? t3.source || (t3.source = l2) : e.length && (a2.push(s[i]), r.push(i));
    }
    if (!e.length || 0 === a2.length)
      return t2;
    const c = t2.geometry.clone(a2), u2 = await this.query(e[e.length - 1], c, n$1), h = u2.sampleInfo;
    if (!h)
      throw new Error("no sampleInfo");
    return r.forEach((e2, t3) => {
      s[e2].z = u2.geometry.coordinates[t3].z, o2[e2].demResolution = h[t3].demResolution;
    }), this._queryAllContinue(e, t2, n$1);
  }
  async _createQueryResult(e, t2) {
    const n$1 = await e.geometry.project(e.outSpatialReference, t2);
    n(n$1);
    const l2 = { geometry: n$1.export(), noDataValue: e.options.noDataValue };
    return e.options.returnSampleInfo && (l2.sampleInfo = this._extractSampleInfo(e)), e.geometry.coordinates.forEach((e2) => {
      e2.tile = null, e2.elevationTile = null;
    }), l2;
  }
  async _createGeometryDescriptor(e, i, n2) {
    let l2;
    const s = e.layer.tileInfo.spatialReference;
    if (i instanceof v ? l2 = await i.project(s, n2) : (await F([{ source: i.spatialReference, dest: s }], { signal: n2 }), l2 = b$1(i, s)), !l2)
      throw new s$1("elevation-query:spatial-reference-mismatch", `Cannot query elevation in '${i.spatialReference.wkid}' on an elevation service in '${s.wkid}'`);
    e.geometry = v.fromGeometry(l2);
  }
  async _selectTiles(e, i) {
    "geometry" === e.type && this._preselectOutsideLayerExtent(e);
    const n2 = e.options.demResolution;
    if ("number" == typeof n2)
      this._selectTilesClosestResolution(e, n2);
    else if ("finest-contiguous" === n2)
      await this._selectTilesFinestContiguous(e, i);
    else {
      if ("auto" !== n2)
        throw new s$1("elevation-query:invalid-dem-resolution", `Invalid dem resolution value '${n2}', expected a number, "finest-contiguous" or "auto"`);
      await this._selectTilesAuto(e, i);
    }
  }
  _preselectOutsideLayerExtent(e) {
    if (null == e.layer.fullExtent)
      return;
    const t$12 = new t(null);
    t$12.sample = () => e.options.noDataValue, e.outsideExtentTile = t$12;
    const i = e.layer.fullExtent;
    e.geometry.coordinates.forEach((e2) => {
      const n2 = e2.x, l2 = e2.y;
      (n2 < i.xmin || n2 > i.xmax || l2 < i.ymin || l2 > i.ymax) && (e2.elevationTile = t$12);
    });
  }
  _selectTilesClosestResolution(e, t2) {
    const i = this._findNearestDemResolutionLODIndex(e, t2);
    e.selectTilesAtLOD(i);
  }
  _findNearestDemResolutionLODIndex(e, t2) {
    const { tileInfo: i, tilemapCache: n2 } = e.layer, l2 = t2 / z(i.spatialReference), o2 = q(i, n2);
    let a2 = o2[0], r = 0;
    for (let s = 1; s < o2.length; s++) {
      const e2 = o2[s];
      Math.abs(e2.resolution - l2) < Math.abs(a2.resolution - l2) && (a2 = e2, r = s);
    }
    return r;
  }
  async _selectTilesFinestContiguous(e, t2) {
    const { tileInfo: i, tilemapCache: n2 } = e.layer, l2 = E(i, n2, e.options.minDemResolution);
    await this._selectTilesFinestContiguousAt(e, l2, t2);
  }
  async _selectTilesFinestContiguousAt(e, i, s) {
    const o2 = e.layer;
    if (e.selectTilesAtLOD(i), i < 0)
      return;
    const a$1 = o2.tilemapCache, r = e.getTilesToFetch();
    try {
      if (a$1 && !I(a$1))
        await h$1(Promise.all(r.map((e2) => a$1.fetchAvailability(e2.level, e2.row, e2.col, { signal: s }))), s);
      else if (await this._populateElevationTiles(e, s), !e.allElevationTilesFetched())
        throw e.clearElevationTiles(), new s$1("elevation-query:has-unavailable-tiles");
    } catch (c) {
      a(c), await this._selectTilesFinestContiguousAt(e, i - 1, s);
    }
  }
  async _populateElevationTiles(e, t$12) {
    const i = e.getTilesToFetch(), l2 = {}, s = e.options.cache, o2 = e.options.noDataValue, a2 = i.map(async (i2) => {
      if (null == i2.id)
        return;
      const n2 = `${e.layer.uid}:${i2.id}:${o2}`, a3 = null != s ? s.get(n2) : null, r = null != a3 ? a3 : await e.layer.fetchTile(i2.level, i2.row, i2.col, { noDataValue: o2, signal: t$12 });
      null != s && s.put(n2, r), l2[i2.id] = new t(i2, r);
    });
    await h$1(Promise.allSettled(a2), t$12), e.populateElevationTiles(l2);
  }
  async _selectTilesAuto(t2, i) {
    this._selectTilesAutoFinest(t2), this._reduceTilesForMaximumRequests(t2);
    const s = t2.layer.tilemapCache;
    if (!s || I(s))
      return this._selectTilesAutoPrefetchUpsample(t2, i);
    const o2 = t2.getTilesToFetch(), a$1 = {}, r = o2.map(async (t3) => {
      const n2 = new t$2(null, 0, 0, 0, u$1()), o3 = await _$1(s.fetchAvailabilityUpsample(t3.level, t3.row, t3.col, n2, { signal: i }));
      false !== o3.ok ? null != t3.id && (a$1[t3.id] = n2) : a(o3.error);
    });
    await h$1(Promise.all(r), i), t2.remapTiles(a$1);
  }
  _reduceTilesForMaximumRequests(e) {
    const t2 = e.layer.tileInfo;
    let i = 0;
    const n2 = {}, l2 = (e2) => {
      null != e2.id && (e2.id in n2 ? n2[e2.id]++ : (n2[e2.id] = 1, i++));
    }, s = (e2) => {
      if (null == e2.id)
        return;
      const t3 = n2[e2.id];
      1 === t3 ? (delete n2[e2.id], i--) : n2[e2.id] = t3 - 1;
    };
    e.forEachTileToFetch(l2, s);
    let o2 = true;
    for (; o2 && (o2 = false, e.forEachTileToFetch((n3) => {
      i <= e.options.maximumAutoTileRequests || (s(n3), t2.upsampleTile(n3) && (o2 = true), l2(n3));
    }, s), o2); )
      ;
  }
  _selectTilesAutoFinest(e) {
    const { tileInfo: t2, tilemapCache: i } = e.layer, n2 = E(t2, i, e.options.minDemResolution);
    e.selectTilesAtLOD(n2, e.options.maximumAutoTileRequests);
  }
  async _selectTilesAutoPrefetchUpsample(e, t2) {
    const i = e.layer.tileInfo;
    await this._populateElevationTiles(e, t2);
    let n2 = false;
    e.forEachTileToFetch((e2, t3) => {
      i.upsampleTile(e2) ? n2 = true : t3();
    }), n2 && await this._selectTilesAutoPrefetchUpsample(e, t2);
  }
  _sampleGeometryWithElevation(e) {
    e.geometry.coordinates.forEach((t2) => {
      const i = t2.elevationTile;
      let n2 = e.options.noDataValue;
      if (i) {
        const e2 = i.sample(t2.x, t2.y);
        null != e2 ? n2 = e2 : t2.elevationTile = null;
      }
      t2.z = n2;
    });
  }
  _extractSampleInfo(e) {
    const t2 = e.layer.tileInfo, i = z(t2.spatialReference);
    return e.geometry.coordinates.map((n2) => {
      let l2 = -1;
      if (n2.elevationTile && n2.elevationTile !== e.outsideExtentTile) {
        l2 = t2.lodAt(n2.elevationTile.tile.level).resolution * i;
      }
      return { demResolution: l2 };
    });
  }
}
class v {
  export() {
    return this._exporter(this.coordinates, this.spatialReference);
  }
  clone(e) {
    const t2 = new v();
    return t2.geometry = this.geometry, t2.spatialReference = this.spatialReference, t2.coordinates = e || this.coordinates.map((e2) => e2.clone()), t2._exporter = this._exporter, t2;
  }
  async project(e, t2) {
    if (this.spatialReference.equals(e))
      return this.clone();
    await F([{ source: this.spatialReference, dest: e }], { signal: t2 });
    const i = new u$2({ spatialReference: this.spatialReference, points: this.coordinates.map((e2) => [e2.x, e2.y]) }), n2 = b$1(i, e);
    if (!n2)
      return null;
    const l2 = this.coordinates.map((e2, t3) => {
      const i2 = e2.clone(), l3 = n2.points[t3];
      return i2.x = l3[0], i2.y = l3[1], i2;
    }), s = this.clone(l2);
    return s.spatialReference = e, s;
  }
  static fromGeometry(e) {
    const t2 = new v();
    if (t2.geometry = e, t2.spatialReference = e.spatialReference, e instanceof v)
      t2.coordinates = e.coordinates.map((e2) => e2.clone()), t2._exporter = (t3, i) => {
        const n2 = e.clone(t3);
        return n2.spatialReference = i, n2;
      };
    else
      switch (e.type) {
        case "point": {
          const i = e, { hasZ: n2, hasM: l2 } = i;
          t2.coordinates = n2 && l2 ? [new w(i.x, i.y, i.z, i.m)] : n2 ? [new w(i.x, i.y, i.z)] : l2 ? [new w(i.x, i.y, null, i.m)] : [new w(i.x, i.y)], t2._exporter = (t3, i2) => e.hasM ? new x$1(t3[0].x, t3[0].y, t3[0].z, t3[0].m, i2) : new x$1(t3[0].x, t3[0].y, t3[0].z, i2);
          break;
        }
        case "multipoint": {
          const i = e, { hasZ: n2, hasM: l2 } = i;
          t2.coordinates = n2 && l2 ? i.points.map((e2) => new w(e2[0], e2[1], e2[2], e2[3])) : n2 ? i.points.map((e2) => new w(e2[0], e2[1], e2[2])) : l2 ? i.points.map((e2) => new w(e2[0], e2[1], null, e2[2])) : i.points.map((e2) => new w(e2[0], e2[1])), t2._exporter = (t3, i2) => e.hasM ? new u$2({ points: t3.map((e2) => [e2.x, e2.y, e2.z, e2.m]), hasZ: true, hasM: true, spatiaReference: i2 }) : new u$2(t3.map((e2) => [e2.x, e2.y, e2.z]), i2);
          break;
        }
        case "polyline": {
          const i = e, n2 = [], l2 = [], { hasZ: s, hasM: o2 } = e;
          let a2 = 0;
          for (const e2 of i.paths)
            if (l2.push([a2, a2 + e2.length]), a2 += e2.length, s && o2)
              for (const t3 of e2)
                n2.push(new w(t3[0], t3[1], t3[2], t3[3]));
            else if (s)
              for (const t3 of e2)
                n2.push(new w(t3[0], t3[1], t3[2]));
            else if (o2)
              for (const t3 of e2)
                n2.push(new w(t3[0], t3[1], null, t3[2]));
            else
              for (const t3 of e2)
                n2.push(new w(t3[0], t3[1]));
          t2.coordinates = n2, t2._exporter = (t3, i2) => {
            const n3 = e.hasM ? t3.map((e2) => [e2.x, e2.y, e2.z, e2.m]) : t3.map((e2) => [e2.x, e2.y, e2.z]), s2 = l2.map((e2) => n3.slice(e2[0], e2[1]));
            return new m({ paths: s2, hasM: e.hasM, hasZ: true, spatialReference: i2 });
          };
          break;
        }
      }
    return t2;
  }
}
class w {
  constructor(e, t2, i = null, n2 = null, l2 = null, s = null) {
    this.x = e, this.y = t2, this.z = i, this.m = n2, this.tile = l2, this.elevationTile = s;
  }
  clone() {
    return new w(this.x, this.y, this.z, this.m);
  }
}
class g {
  constructor(e, t2) {
    this.layer = e, this.options = t2;
  }
}
class x extends g {
  constructor(e, t2, i) {
    super(e, i), this.outSpatialReference = t2, this.type = "geometry";
  }
  selectTilesAtLOD(e) {
    if (e < 0)
      this.geometry.coordinates.forEach((e2) => e2.tile = null);
    else {
      const { tileInfo: t2, tilemapCache: i } = this.layer, n2 = q(t2, i)[e].level;
      this.geometry.coordinates.forEach((e2) => e2.tile = t2.tileAt(n2, e2.x, e2.y));
    }
  }
  allElevationTilesFetched() {
    return !this.geometry.coordinates.some((e) => !e.elevationTile);
  }
  clearElevationTiles() {
    for (const e of this.geometry.coordinates)
      e.elevationTile !== this.outsideExtentTile && (e.elevationTile = null);
  }
  populateElevationTiles(e) {
    for (const t2 of this.geometry.coordinates)
      !t2.elevationTile && t2.tile?.id && (t2.elevationTile = e[t2.tile.id]);
  }
  remapTiles(e) {
    for (const t2 of this.geometry.coordinates) {
      const i = t2.tile?.id;
      t2.tile = i ? e[i] : null;
    }
  }
  getTilesToFetch() {
    const e = {}, t2 = [];
    for (const i of this.geometry.coordinates) {
      const n2 = i.tile;
      if (!n2)
        continue;
      const l2 = i.tile?.id;
      i.elevationTile || !l2 || e[l2] || (e[l2] = n2, t2.push(n2));
    }
    return t2;
  }
  forEachTileToFetch(e) {
    for (const t2 of this.geometry.coordinates)
      t2.tile && !t2.elevationTile && e(t2.tile, () => {
        t2.tile = null;
      });
  }
}
class _ extends g {
  constructor(e, t2, i, n2) {
    super(e, i), this.type = "extent", this.elevationTiles = [], this._candidateTiles = [], this._fetchedCandidates = /* @__PURE__ */ new Set(), this.extent = t2.intersection(e.fullExtent), this.maskExtents = n2;
  }
  selectTilesAtLOD(e, t2) {
    const i = this._maximumLodForRequests(t2), n2 = Math.min(i, e);
    n2 < 0 ? this._candidateTiles.length = 0 : this._selectCandidateTilesCoveringExtentAt(n2);
  }
  _maximumLodForRequests(e) {
    const { tileInfo: t2, tilemapCache: i } = this.layer, n2 = q(t2, i);
    if (!e)
      return n2.length - 1;
    const l2 = this.extent;
    if (null == l2)
      return -1;
    for (let s = n2.length - 1; s >= 0; s--) {
      const i2 = n2[s], o2 = i2.resolution * t2.size[0], a2 = i2.resolution * t2.size[1];
      if (Math.ceil(l2.width / o2) * Math.ceil(l2.height / a2) <= e)
        return s;
    }
    return -1;
  }
  allElevationTilesFetched() {
    return this._candidateTiles.length === this.elevationTiles.length;
  }
  clearElevationTiles() {
    this.elevationTiles.length = 0, this._fetchedCandidates.clear();
  }
  populateElevationTiles(e) {
    for (const t2 of this._candidateTiles) {
      const i = t2.id && e[t2.id];
      i && (this._fetchedCandidates.add(t2), this.elevationTiles.push(i));
    }
  }
  remapTiles(e) {
    this._candidateTiles = this._uniqueNonOverlappingTiles(this._candidateTiles.map((t2) => e[t2.id]));
  }
  getTilesToFetch() {
    return this._candidateTiles;
  }
  forEachTileToFetch(e, t2) {
    const i = this._candidateTiles;
    this._candidateTiles = [], i.forEach((i2) => {
      if (this._fetchedCandidates.has(i2))
        return void (t2 && t2(i2));
      let n2 = false;
      e(i2, () => n2 = true), n2 ? t2 && t2(i2) : this._candidateTiles.push(i2);
    }), this._candidateTiles = this._uniqueNonOverlappingTiles(this._candidateTiles, t2);
  }
  _uniqueNonOverlappingTiles(e, t2) {
    const i = {}, n2 = [];
    for (const s of e) {
      const e2 = s.id;
      e2 && !i[e2] ? (i[e2] = s, n2.push(s)) : t2 && t2(s);
    }
    const l2 = n2.sort((e2, t3) => e2.level - t3.level);
    return l2.filter((e2, i2) => {
      for (let n3 = 0; n3 < i2; n3++) {
        const i3 = l2[n3].extent;
        if (i3 && e2.extent && R$1(i3, e2.extent))
          return t2 && t2(e2), false;
      }
      return true;
    });
  }
  _selectCandidateTilesCoveringExtentAt(e) {
    this._candidateTiles.length = 0;
    const t2 = this.extent;
    if (null == t2)
      return;
    const { tileInfo: i, tilemapCache: n2 } = this.layer, l2 = q(i, n2)[e], s = i.tileAt(l2.level, t2.xmin, t2.ymin), o2 = s.extent;
    if (null == o2)
      return;
    const a2 = l2.resolution * i.size[0], r = l2.resolution * i.size[1], c = Math.ceil((t2.xmax - o2[0]) / a2), u2 = Math.ceil((t2.ymax - o2[1]) / r);
    for (let h = 0; h < u2; h++)
      for (let e2 = 0; e2 < c; e2++) {
        const t3 = new t$2(null, s.level, s.row - h, s.col + e2);
        i.updateTileInfo(t3), this._tileIsMasked(t3) || this._candidateTiles.push(t3);
      }
  }
  _tileIsMasked(e) {
    return !!this.maskExtents && this.maskExtents.some((t2) => e.extent && R$1(t2, e.extent));
  }
}
function E(e, t2, i = 0) {
  const n2 = q(e, t2);
  let l2 = n2.length - 1;
  if (i > 0) {
    const t3 = i / z(e.spatialReference), o2 = n2.findIndex((e2) => e2.resolution < t3);
    0 === o2 ? l2 = 0 : o2 > 0 && (l2 = o2 - 1);
  }
  return l2;
}
const R = { maximumAutoTileRequests: 20, noDataValue: 0, returnSampleInfo: false, demResolution: "auto", minDemResolution: 0 };
function q(e, t2) {
  const i = e.lods;
  if (I(t2)) {
    const { effectiveMinLOD: e2, effectiveMaxLOD: n2 } = t2;
    return i.filter((t3) => t3.level >= e2 && t3.level <= n2);
  }
  return i;
}
function I(e) {
  return null != e?.tileInfo;
}
export {
  T as ElevationQuery,
  v as GeometryDescriptor,
  E as getFinestLodIndex
};
