// Sort the names in a given one dimesional array of string.
var names:string[] = new Array("Zafar","Ashwin","Muriel","Sameeha","Alfonsa","Maimuna","Thashina");
console.log("Array before sorting" + names);
var sorted_names:string[] = names.sort();
console.log("Array after sorting" + sorted_names);

// In two diemsnional string array sort each row data. Each row represent the team members.
var teams:string[][] = new Array(["Zafar", "Muriel"], ["Ashwin", "Alfonsa"], ["Sameeha", "Maimuna", "Thashina"]);
console.log("\n");
for(var i=0; i<teams.length; i++)
{
    console.log("team"+(i+1)+ " " +teams[i].sort());
}




