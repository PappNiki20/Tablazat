$(function () {
  const LIST = [
    { nev: "pite", tul1: "almás", tul2: "barackos" },
    { nev: "muffin", tul1: "nutellás", tul2: "lekváros" },
    { nev: "kókusz kocka", tul1: "epres", tul2: "banános" },
  ];
  const ARTICLE = $("article");
  let txt = osszeallit(LIST);
  ARTICLE.eq(0).html(txt);
});

function osszeallit(LIST) {
  let txt = "";
txt += `<table>`;
  for (let i = 0; i < LIST.length; i++) {
    txt += `<tr><th>${LIST[i].nev}</th> <td>${LIST[i].tul1}</td>  <td>${LIST[i].tul2}</td></tr>`;
  }
  txt += `</table>`;
  return txt;
}
