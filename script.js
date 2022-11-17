$(document).ready(function (){
    $("#signup-form").validate({
        rules:{
            Fname:{
                required:true,
                minlength:4
            },
            Sname:{
                required:true
            },
            emailAddress:{
                required:true,
                email:true
            },
            password:{
                required:true,
                minlength:6
            },
            day:{
                required:true
            },
            month:{
                required:true,
            },
            year:{
                required:true,
            },
            gender:{
                required:true
            }

        },
        
    })
})
