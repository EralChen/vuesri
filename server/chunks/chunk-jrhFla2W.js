class t {
  constructor(t2) {
    this.size = 0, this._start = 0, this.maxSize = t2, this._buffer = new Array(t2);
  }
  get entries() {
    return this._buffer;
  }
  enqueue(t2) {
    if (this.size === this.maxSize) {
      const s = this._buffer[this._start];
      return this._buffer[this._start] = t2, this._start = (this._start + 1) % this.maxSize, s;
    }
    return this._buffer[(this._start + this.size++) % this.maxSize] = t2, null;
  }
  dequeue() {
    if (0 === this.size)
      return null;
    const t2 = this._buffer[this._start];
    return this._buffer[this._start] = null, this.size--, this._start = (this._start + 1) % this.maxSize, t2;
  }
  peek() {
    return 0 === this.size ? null : this._buffer[this._start];
  }
  find(t2) {
    if (0 === this.size)
      return null;
    for (const s of this._buffer)
      if (null != s && t2(s))
        return s;
    return null;
  }
  clear(t2) {
    let s = this.dequeue();
    for (; null != s; )
      t2 && t2(s), s = this.dequeue();
  }
}
export {
  t
};
