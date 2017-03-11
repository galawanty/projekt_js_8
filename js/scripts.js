function rysujChoinke(tree) {
    var star;
    for (var k = 1 ; k <= tree ; k++) {
        star = '';
        for (var n = 0 ; n < k*2-1 ; n++) {
            star += '*';
        }
        console.log(star);     
    }
}
rysujChoinke(5);