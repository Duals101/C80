arrayj=[];

function Submit_function()

{
    var displayarray=[];
    for(j=1; j<=4; j++){
        arrayj.push(document.getElementById("student-" +j).value);  
    }
for(k=0; k<arrayj.length; k++){
    displayarray.push("<h4> Name - " +arrayj[k]+"</h4>");
}
    document.getElementById("Students").innerHTML=displayarray;
    var display_name_without_comma=displayarray.join(" ");
    console.log(display_name_without_comma);
    document.getElementById("Display_Name_W_Commas").innerHTML=display_name_without_comma;
    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";

}

function Sort_function()

{
    var displayarray=[];
    arrayj.sort();
    for(k=0; k<arrayj.length; k++){
        displayarray.push("<h4> Name - " +arrayj[k]+"</h4>");
    }
    var display_name_without_comma=displayarray.join(" ");
    console.log(display_name_without_comma);
    document.getElementById("Display_Name_W_Commas").innerHTML=display_name_without_comma;


}
