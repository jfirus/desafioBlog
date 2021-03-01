window.addEventListener('load', function(){   
    document.getElementById('logged').style.display='none';
    document.getElementById('userLogged').style.display='none';

    console.log(document.cookie);
    
    if (document.cookie == ""){
        //Si no tiene cookie modifico el header para mostrar los botones de login
        document.getElementById('logged').style.display='block';
    }else{
        // SI exist le muestro el header con sus datos
        //guardo el email y en otra variable 0 o 1 si es ADMIN o NO
        let cookiemail = document.cookie.slice(0, document.cookie.indexOf(';'));
        let cookieAdmin = document.cookie.slice(document.cookie.indexOf(';')+1, document.cookie.length);
       
        // Acomodo los valores
        cookiemail = cookiemail.split('=')[cookiemail.split('=').length-1].replace('%40','@');
        cookieAdmin = cookieAdmin.split('=')[cookieAdmin.split('=').length-1]

        //Capturo el objeto para poner el mail del usuario en el header
        let emailheader = document.getElementById('email');
        //document.getElementById('salir').display='block';
        // y habilito los comentarios
        emailheader.innerHTML=`<p class="lead" id="email"> ${cookiemail} </p> `

         //SI tiene cookie modifico el header para mostrar los datos del user
         document.getElementById('userLogged').style.display='block';
   
         // Capturo el objeto Salir
         let logout = document.getElementById('logout');
         // Capturo el evento Click y borro la cookie
         console.log(logout);
         logout.addEventListener('click', function(event){
            document.cookie.split(";").forEach(function(c) {
                document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
              });

         })

        
    }

})