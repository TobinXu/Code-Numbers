function Chicken(headAndFoot) {
    var str = headAndFoot.split(",");
    var head = parseInt(str[0]);
    var foot = parseInt(str[1]);
    if(head <= 1) console.log("NODATA");
    var too = 0;
    for (var j =0; j < head; j++) {
        too = head - j;
        if (j * 2 + too * 4 === foot) {
            console.log(j + ',' + too);
        }
    }
}
var k = '20,60';

Chicken(k);
