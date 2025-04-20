function caps(str) {
  let st = str.split(" ");

  for (let i = 0; i < st.length; i++) {
    st[i] = st[i].charAt(0).toUpperCase() + st[i].slice(1);
  }
  return st.join(" ");
}

console.log(caps("habit tracker app"));
