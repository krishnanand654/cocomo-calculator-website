$("#my-form").submit(function(e) {
    e.preventDefault();
});

function myFunction() {
    var array1 = [];
    var array2 = [];
    var arr_name = ["Project","Effort", "Duration", "Staff"];
    console.log(arr_name);
    var mytable = "<table><tr>";
        for (var i of arr_name){ 
            mytable += "<th >" + i + "</th>";
            console.log(i);
        }
        mytable +="</tr>";
        
        
                                        var x = document.getElementById("myText").value;
                                        var y = Number(x);
                                        var effort_org = 2.4*(y**1.05);
                                        array1.push('organic',effort_org);
                                        var duration_org = 2.5*(effort_org**0.38);
                                        array1.push(duration_org);
                                        var staff_org = effort_org/duration_org;
                                        array1.push(staff_org);

                                        for (var i of array1){ 
                                            mytable += "<td>" + i + "</td>";
                                            console.log(i);
                                        }
                                        mytable +="</tr>";

        array1 = []
        var effort_org = 3.0*(y**1.12);
        array1.push('Semi-detached',effort_org);
        var duration_org = 2.5*(effort_org**0.35);
        array1.push(duration_org);
        var staff_org = effort_org/duration_org;
        array1.push(staff_org);

        for (var i of array1){ 
        mytable += "<td>" + i + "</td>";
        console.log(i);
        }
        mytable +="</tr>";


                                        array1=[]
                                        var effort_org = 3.6*(y**1.20);
                                        array1.push('Embeded',effort_org);
                                        var duration_org = 2.5*(effort_org**0.32);
                                        array1.push(duration_org);
                                        var staff_org = effort_org/duration_org;
                                        array1.push(staff_org);

                                        for (var i of array1){ 
                                            mytable += "<td>" + i + "</td>";
                                            console.log(i);
                                        }
                                        mytable +="</tr>";



        document.getElementById("ID").innerHTML = mytable;
    
}