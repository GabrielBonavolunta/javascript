/* 
&& -> false && true -> false "o valor mesmo"
|| -> true && false -> true "o valor mesmo"
FALSY
false
0
''
""
``
null/undefined
NaN

*/

function falaOi(){
    return "Oi";
}

const vaiExecutar = "Joãozinho";
console.log(vaiExecutar && falaOi());

// ----------------------------------------------------------------------

console.log(0 || null || "Gabriel Bonavoluntá" || true);

const cor = "red";
const corPadrao = cor || "black";
console.log(corPadrao);

