
window.addEventListener('load', function(){   
    // Agrego la validación del login en el crear publicación
    
    // Botón de arriba
    let btnCreatePublicationUp = document.querySelector('#createPublicationUp');
    btnCreatePublicationUp.addEventListener('click', function(evento){

        //Valido si existe un usuario en la cookie
        //Agrego el evento lisener a la tarjeta para verificar si apreta el comentar y no está logueado para pedirle que se loguee
        if (document.cookie == ""){
                var check = confirm("Debes registrarte para realizar comentarios. ¿Deseas hacerlo?");
                if (check == true){
                    window.location.replace(window.location.href+'user/login');
                    return true;
                }else{
                    evento.preventDefault(); // Esto hace que no se envíe el formulario
                    return false;
                }
        }else{
            window.location.href=window.location.href+'publication/publication-comment/'+ element.querySelector("#publicationId").value;
        }          
    })
    // Botón de abajo
    let btnCreatePublicationDown = document.querySelector('#createPublicationDown');
    btnCreatePublicationDown.addEventListener('click', function(evento){
        //Valido si existe un usuario en la cookie
        //Agrego el evento lisener a la tarjeta para verificar si apreta el comentar y no está logueado para pedirle que se loguee
        if (document.cookie == ""){
                var check = confirm("Debes registrarte para realizar comentarios. ¿Deseas hacerlo?");
                if (check == true){
                    window.location.replace(window.location.href+'user/login');
                    return true;
                }else{
                    evento.preventDefault(); // Esto hace que no se envíe el formulario
                    return false;
                }
        }else{
            window.location.href=window.location.href+'publication/publication-comment/'+ element.querySelector("#publicationId").value;
        }          
    })



    // Busco todas las publicaciones
    //1. Tengo que agregar a todos los botones likes, con su respectivo id de publicación, que invoquen a la API cuando es oprimido
    let cardCant = document.querySelectorAll('.card-body');
    // Recorro la lista de tarjetas y le agrego el evento 
    cardCant.forEach(element => {  

          //********** */ Busco el botón Comentar *************
        btnComment = element.querySelector("#comment");
        btnComment.addEventListener('click', function(evento){

            //Valido si existe un usuario en la cookie
            //Agrego el evento lisener a la tarjeta para verificar si apreta el comentar y no está logueado para pedirle que se loguee
            if (document.cookie == ""){
                    var check = confirm("Debes registrarte para realizar comentarios. ¿Deseas hacerlo?");
                    if (check == true){
                        //console.log(window.location.href);
                        // let paramURL = window.location.href.split('/')[window.location.href.split('/').length-1];
                        window.location.replace(window.location.href+'user/login');
                        return true;
                    }else{
                        evento.preventDefault(); // Esto hace que no se envíe el formulario
                        return false;
                    }
            }else{
                window.location.href=window.location.href+'publication/publication-comment/'+ element.querySelector("#publicationId").value;
            }          
        })
        
        // ************* Busco el botón like ****************
        btnLike = element.querySelector("#like");
        //Una vez que obtengo el boton, agrego el evento CLICK y cuando lo aprentan, llamo a la API
        btnLike.addEventListener('click', function(evento){
            let urlSetLike = 'http://localhost:3000/api/publication/setLike';
            
            // Armo los items que deben enviarse por parámetro
            let itemData = {
                id : element.querySelector("#publicationId").value,
                likes: element.querySelector("#cantLikes").textContent,
            }
            console.log(itemData);

            fetch(urlSetLike, {
                    method: 'post',
                    body: JSON.stringify(itemData),
                    headers:{
                        'Content-Type': 'application/json; charset=utf-8'
                    }
                })
                .then(res => res.json())
                .then(data => {
                    if(data.meta.hasErrors){
                        console.log('Hay errores');
                    } else {
                        console.log('Dato Actualizado');
                        // Muestro la nueva cantidad de likes que tiene
                        lettotalLikes = Number(element.querySelector("#cantLikes").textContent) +1;
                        element.querySelector("#cantLikes").innerHTML = `<p class=" text-dark" id="cantLikes"> <i class="fas fa-heart"></i>`+ lettotalLikes + `</p>`
                        
                    }
                })
            });
        })
})