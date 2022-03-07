var $ = function (id) { return document.getElementById(id); };

var employees = [];
var salaries = [];
var arrayID = 0;


window.onload = function () 
{
    $("add").onclick = addSalary;
    $("average").onclick = displayResults;
    $("table").onclick = displaySalary;

}

function addSalary()
{
    var employee = $('employee').value;
    var salary = $('salary').value;
     
    if (salary == "")
    {
        alert("Salary can not be blank");
    }
    
    else 
    {
        employees[arrayID] = employee;
        salaries[arrayID] = salary;
        arrayID++;
    }
     
    document.getElementById("salary").value = "";
}

function displayResults()
{
    if (salaries.length == 0)
    {
       alert("Please add a salary to an employee before display")
    }

    else
    {
        var highestPaid = employees[0];
        var largestSalary = salaries[0];
        var salaryAverage = 0;
        var display = '';

        for (var i = 0; i < salaries.length; i++)
        {
            if (largestSalary < salaries[i])
            {
                highestPaid = employees[i];
                highestSalary = salaries[i];
            }
            
            salaryAverage += salaries[i];
        }
        salaryAverage = salaryAverage/salaries.length;
         
        display = "<h2 style = 'text-align:center' >Average Pay & Highest Salaries</h2> <p>The Average Salary is: $" + salaryAverage + "<br><br>" + highestPaid + " earns the most with a gross pay of: $" + largestSalary + "</p>";
        
        $('result').innerHTML = display;
    }
}


function displaySalary()
{
    var display = "<h2 style = 'text-align:center'>Table of Employees and there respective pay</h2> ";
    var display2 = "<tr><th>Employee</th><th>Salary</th></tr>";
    if (salaries.length == 0)
    {
        alert("Please add a salary to an employee before display")
    }

    else
    {
        for (var i = 0; i < salaries.length; i++){
            display2 = display2 + "<tr><td>" + employees[i] + "</td><td>$" + salaries[i] + "</td></tr>"
        }
        $('result2').innerHTML = display;
        $('salaries_table').innerHTML = display2;
    }
}