function validateUserData() {

    console.log("Hello its working Write code below");

    var Data = {};
    Data.id = $("#username").val();
    Data.pwd = $("#password").val();

    console.log(Data);


    var PromisesData = $.ajax({
        url: 'http://localhost:8081/login/page',
        data: Data,
        dataType: 'json',
        method: 'GET'
    });

    PromisesData.then(function (res) {

        console.log("Sucess");
        console.log(res);
    }, function () {
        console.log("Error");
    });


}