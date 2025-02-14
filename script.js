(
    async () => {

        try {
            const res = await fetch('./assets/data.json');
            const data = await res.json();

            function displayEmployee(index) {
                document.querySelector(".employee-name").textContent = data[index].name;
                document.querySelector(".employee-picture").setAttribute('src', data[index].imageUrl);
                document.querySelector(".employee-age").textContent = `Age : ${data[index].age}`;
                document.querySelector(".employee-work").textContent = data[index].work;
                document.querySelector(".employee-email").textContent = data[index].email;
                document.querySelector(".employee-phone").textContent = data[index].phone;
                document.querySelector(".employee-address").textContent = data[index].address;
            }

            displayEmployee(0);

            // Populate the sidebar list
            const employeeList = document.querySelectorAll('.list');
            employeeList.forEach((element, i) => {
                element.textContent = data[i].name;

                // Add event listener for click
                element.addEventListener('click', () => {
                    displayEmployee(i);
                });
            });

        } catch (error) {
            alert(error);
        }
    }

)();



// Cancel or Open popup
const addEmployee = document.querySelector('.add-employee');
const addEmployeePopup = document.querySelector('.add-employee-popup');

addEmployee.addEventListener('click', () => {

    addEmployeePopup.style.display = 'flex';

})

const cancelData = document.querySelector('.cancel-data');

cancelData.addEventListener('click', () => {
    addEmployeePopup.style.display = 'none';
})



// Submitting data in json

const submitData = document.querySelector('.submit-data');

submitData.addEventListener('click', () => {

    const username = document.querySelector('.username').value;
    const imageUrl = document.querySelector('.image-url').value;
    const userAge = document.querySelector('.user-age').value;
    const userWork = document.querySelector('.user-work').value;
    const userEmail = document.querySelector('.user-email').value;
    const userPhone = document.querySelector('.user-phone').value;
    const userAddress = document.querySelector('.user-address').value;

    (
        async () => {

            try {

                const res = await fetch('./assets/data.json');
                const data = await res.json();
                const lastId = data.length;

                const jsonData = {
                    "id": lastId + 1,
                    "name": username,
                    "imageUrl": imageUrl,
                    "age": userAge,
                    "work": userWork,
                    "email": userEmail,
                    "phone": userPhone,
                    "address": userAddress
                }


            } catch (error) {
                alert(error);

            }
        }
    )();


    const employeeList = document.querySelector('.employee-list');

    const newEmployee = document.createElement('li');
    newEmployee.setAttribute('tabindex', "0");
    newEmployee.setAttribute('calss', "list");

    employeeList.appendChild(newEmployee);


    addEmployeePopup.style.display = 'none';

})