let list = document.getElementById('friend_print');
let firstname_field= document.getElementById('firstname_field');
let lastname_field= document.getElementById('lastname_field');
let birthday_field= document.getElementById('birthday_field');
let delete_value = document.getElementById('')


//Array of objects: friends list
let friend_list = [
    {
        "firstname": "James",
        "lastname": "Smith", 
        "birthday": new Date(1972, 8, 24)

    }, {
        "firstname": "Kady",
        "lastname": "Carlson", 
        "birthday": new Date(1999, 2, 2)
    }, {
        "firstname": "Johannes",
        "lastname": "Jefferson", 
        "birthday": new Date(1993, 9, 22)
    }, 
];
let ft = friend_list;

//Print names from the friends list array of objects
function print(){
    list.innerHTML = ' ';
    for ( let i = 0; i < friend_list.length; i++){
        list.innerHTML += '<table>' + '<td>' + friend_list[i].firstname + '</td>' + '<td>' + friend_list[i].lastname + '</td>' + '<td>' + friend_list[i].birthday.toDateString() + '</td>' + 
        '<td>' + '<button id="delete_button' + i + '" value=' + '"' +[i] + '"' + ' onclick="delete_friend(' + [i] + ')">' + 'delete' + '</button>' + '</td>' + 
        '<td>' + '<button id="edit_button' + i + '" value=' + '"' +[i] + '"' + ' onclick="edit_friend(' + [i] + ')">' + 'edit' + '</button>' + '</td>' + '</table>' ;
    };
};
print();

//Create textfields when editing information about your friend
function edit_friend(a) {
    list.innerHTML = '';

    list.innerHTML += '<label for="edit_firstname'+[a]+'">First name:</label> <br>' +
    '<input id = "edit_firstname" name="edit_firstname">' + '</input> <br>' + 
    '<label for="edit_lastname">Last name:</label> <br>'+
    '<input type="text" + id="edit_lastname" name="edit_lastname"></input> <br>'+
    '<label for="edit_birthday">Birthday:</label> <br>'+
    '<input type="date" id="edit_birthday" name="edit_birthday">' + 
    '<button onclick="save_edit('+[a]+')">Save Changes</button>';
}

//Fetch information from the edit html and save it to the correct index
function save_edit(a){
    ft[a].firstname = document.getElementById('edit_firstname').value;
    ft[a].lastname = document.getElementById('edit_lastname').value;
    ft[a].birthday = new Date(document.getElementById('edit_birthday').value);
    list.innerHTML = '';
    print();
}

//Delete friend from the correct index
function delete_friend(a){
    friend_list.splice(a,1);
    print();
};


//Create new friend
function add_friend(){
    let friend = {
        "firstname": document.getElementById('firstname_field').value, 
        "lastname": lastname_field.value,
        "birthday": new Date(birthday_field.value)
    };
    friend_list.push(friend);
    print();
};

function firstname_sort(){
    friend_list.sort(function(a,b){
        if (a.firstname.toLowerCase() < b.firstname.toLowerCase()) {
            return -1;
        };
        if (a.firstname.toLowerCase() > b.firstname.toLowerCase()) {
            return 1;
        };
        return 0;
    });
    print();
};
function lastname_sort(){
    friend_list.sort(function(a,b){
        if (a.lastname.toLowerCase() < b.lastname.toLowerCase()) {
            return -1;
        };
        if (a.lastname.toLowerCase() > b.lastname.toLowerCase()) {
            return 1;
        };
        return 0;
    });
    print();
};
function birthday_sort (){
    friend_list.sort(function(a,b){
        if (a.birthday > b.birthday) {
            return -1;
        };
        if (a.birthday < b.birthday) {
            return 1;
        };
        return 0;
    });
    print();
};
