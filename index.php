<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Modal de Exito o Fracaso</title> 
    </head> 

    <style> 
        body {
            text-align: center;
            margin-top: 250px;
        } 
        .input {
            margin-bottom: 10px;
            width: 250px;
        }
        .input:focus-visible {
            outline-offset: 0px;
        } 
    </style>

    <link rel="stylesheet" href="modal.css">

    <body>
        <div class="relative"> 
            <button id="exito" class="abre_modal">Exito</button> 
            <button id="alerta" class="abre_modal">Alerta</button>
        </div>
    </body>

    <script src="jquery.min.js"></script> 
    <script  src="js.js"></script> 

</html>
 

