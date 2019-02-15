// Logic Challenge - Mengurutkan Abjad

function urutkanAbjad(str) {
    var result=str.split("").sort().join("");
    return result;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
console.log(urutkanAbjad('abracadabra')); // 'aaaaabbcdrr'

