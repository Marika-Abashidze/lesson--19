let navbarLinks = document.getElementById('navbarLinks');
let togglebutton = document.getElementById('toggleButton');


togglebutton.addEventListener('click',function(){
    navbarLinks.classList.toggle('active');

})


// ajax

function getUsers(){

    let requist = new XMLHttpRequest();

    requist.addEventListener('load', function(){
        let response = this.responseText;
        let responseData = JSON.parse(response);
        console.log(responseData);

        let ul = document.createElement('ul');

        responseData.data.forEach(item => {
            let li = document.createElement('li');
            li.textContent = item.employee_salary;

            ul.appendChild(li);

            
        });
        document.getElementById('ajax').appendChild(ul);
       })
       requist.open('get','http://dummy.restapiexample.com/api/v1/employees');
       requist.send();

}
getUsers();
