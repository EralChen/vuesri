import { t } from "./chunk-jrhFla2W.js";
import { es as e$1 } from "./chunk-ejFG4zJ0.js";
const s = "__esri_stream_id__", i = "__esri_timestamp__", r = 1e3;
class o {
  constructor(t2, e, i2, r2, o2 = 128) {
    this._trackIdToObservations = /* @__PURE__ */ new Map(), this._idCounter = 0, this._lastPurge = performance.now(), this._addOrUpdated = /* @__PURE__ */ new Map(), this._removed = [], this._maxAge = 0, this._timeInfo = i2, this._purgeOptions = r2, this.store = t2, this.objectIdField = e, this.purgeInterval = o2, this._useGeneratedIds = this.objectIdField === s;
  }
  removeById(t2) {
    this._removed.push(t2);
  }
  removeByTrackId(t2) {
    const e = this._trackIdToObservations.get(t2);
    if (e)
      for (const s2 of e.entries)
        this._removed.push(s2);
  }
  add(s2) {
    if (this._useGeneratedIds) {
      const t2 = this._nextId();
      s2.attributes[this.objectIdField] = t2, s2.objectId = t2;
    } else
      s2.objectId = s2.attributes[this.objectIdField];
    const i2 = s2.objectId;
    if (this._addOrUpdated.set(i2, s2), this._maxAge = Math.max(this._maxAge, s2.attributes[this._timeInfo.startTimeField]), !this._timeInfo.trackIdField)
      return null == this._trackIdLessObservations && (this._trackIdLessObservations = new t(1e5)), void this._trackIdLessObservations.enqueue(i2);
    const o2 = s2.attributes[this._timeInfo.trackIdField];
    if (!this._trackIdToObservations.has(o2)) {
      const s3 = null != this._purgeOptions?.maxObservations ? this._purgeOptions.maxObservations : r, i3 = e$1(s3, 0, r);
      this._trackIdToObservations.set(o2, new t(i3));
    }
    const d = this._trackIdToObservations.get(o2), a = d?.enqueue(i2);
    null != a && (this._addOrUpdated.has(a) ? this._addOrUpdated.delete(a) : this._removed.push(a));
  }
  checkForUpdates() {
    const t2 = this._getToAdd(), e = this._getToRemove(), s2 = performance.now();
    s2 - this._lastPurge >= this.purgeInterval && (this._purge(s2), this._lastPurge = s2);
    const r2 = [];
    if (null != e)
      for (const i2 of e) {
        const t3 = this.store.removeById(i2);
        null != t3 && r2.push(t3);
      }
    const o2 = [];
    if (null != t2) {
      const r3 = new Set(e ?? []);
      for (const e2 of t2)
        r3.has(e2.objectId) || (e2.attributes[i] = s2, this.store.add(e2), o2.push(e2));
    }
    return !(!o2.length && !r2?.length) && (this.store.update(o2, r2), true);
  }
  _getToAdd() {
    if (!this._addOrUpdated.size)
      return null;
    const t2 = new Array(this._addOrUpdated.size);
    let e = 0;
    return this._addOrUpdated.forEach((s2) => t2[e++] = s2), this._addOrUpdated.clear(), t2;
  }
  _getToRemove() {
    const t2 = this._removed;
    return this._removed.length ? (this._removed = [], t2) : null;
  }
  _nextId() {
    const t2 = this._idCounter;
    return this._idCounter = (this._idCounter + 1) % 4294967294 + 1, t2;
  }
  _purge(t2) {
    const e = this._purgeOptions;
    null != e && (this._purgeSomeByDisplayCount(e), this._purgeByAge(e), this._purgeByAgeReceived(t2, e), this._purgeTracks());
  }
  _purgeSomeByDisplayCount(t2) {
    if (!t2.displayCount)
      return;
    let e = this.store.size;
    if (e > t2.displayCount) {
      if (this._timeInfo.trackIdField) {
        for (const s2 of this._trackIdToObservations.values())
          if (e > t2.displayCount && s2.size) {
            const t3 = s2.dequeue();
            this._removed.push(t3), e--;
          }
      }
      if (null != this._trackIdLessObservations) {
        let s2 = e - t2.displayCount;
        for (; s2-- > 0; ) {
          const t3 = this._trackIdLessObservations.dequeue();
          null != t3 && this._removed.push(t3);
        }
      }
    }
  }
  _purgeByAge(t2) {
    const e = this._timeInfo?.startTimeField;
    if (!t2.age || !e)
      return;
    const s2 = 60 * t2.age * 1e3, i2 = this._maxAge - s2;
    this.store.forEach((t3) => {
      t3.attributes[e] < i2 && this._removed.push(t3.objectId);
    });
  }
  _purgeByAgeReceived(t2, e) {
    if (!e.ageReceived)
      return;
    const s2 = t2 - 60 * e.ageReceived * 1e3;
    this.store.forEach((t3) => {
      t3.attributes[i] < s2 && this._removed.push(t3.objectId);
    });
  }
  _purgeTracks() {
    this._trackIdToObservations.forEach((t2, e) => {
      0 === t2.size && this._trackIdToObservations.delete(e);
    });
  }
}
export {
  o
};
