function e(e2) {
  const { options: n2, value: o } = e2;
  return "number" == typeof n2[o];
}
function n(n2) {
  let o = "";
  for (const t in n2) {
    const i = n2[t];
    if ("boolean" == typeof i)
      i && (o += `#define ${t}
`);
    else if ("number" == typeof i)
      o += `#define ${t} ${i.toFixed()}
`;
    else if ("object" == typeof i)
      if (e(i)) {
        const { value: e2, options: n3, namespace: f } = i, s = f ? `${f}_` : "";
        for (const t2 in n3)
          o += `#define ${s}${t2} ${n3[t2].toFixed()}
`;
        o += `#define ${t} ${s}${e2}
`;
      } else {
        const e2 = i.options;
        let n3 = 0;
        for (const t2 in e2)
          o += `#define ${e2[t2]} ${(n3++).toFixed()}
`;
        o += `#define ${t} ${e2[i.value]}
`;
      }
  }
  return o;
}
export {
  n
};
