export default {
  gridRows: 100,
  gridColumns: 100,

  theme: "light",

  init() {
    for (const key of this)
      if (key !== "init") localStorage.setItem(key, this[key]);
  },
};
