export const props = {
  maxScale: {
    type: Number,
    default: 0,
  },
  minScale: {
    type: Number,
    default: 0,
  },
  cursor: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  visible: {
    type: Boolean,
    default: true,
  },

  opacity: {
    type: Number,
    default: 1,
  },

  index: {
    type: Number,
    default: undefined,
  },
  orphan: {
    type: Boolean,
    default: false,
  },
}
