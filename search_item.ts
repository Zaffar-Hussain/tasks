
// Check the input name is there in the two dimesnional string or not.
var two_dim_string:string[][] = new Array(["Zafar", "Muriel"], ["Ashwin", "Alfonsa"], ["Sameeha", "Maimuna", "Thashina"]);

var stdin = process.openStdin();
console.log("Enter the name to check wether \nits present in the array:");
stdin.addListener("data", function(d) {

    var search_term:string = d.toString().trim();

    for(var i=0;i<two_dim_string.length;i++)
    {
        for(var j=0;j<two_dim_string[i].length;j++)
        {
            if (two_dim_string[i][j] == search_term) {
                var flag = true;
                console.log("The name foun at possition ["+i+"]["+j+"]");
                break;
            }
        }
    }
    if (!flag)
    {
        console.log("Name not found.");
    }
});
stdin.end();

