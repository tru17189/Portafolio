var iframeAdvance = document.getElementById('PantallaNew');
var estado = "warning";
var numero = 0;

function ReturnNumero(){
    console.log(numero);
    return numero;
}

function RightButton(){ 
    ReturnNumero();
}

function DownButton(){ 
    if(estado = "menu"){
        numero -= 1;
        if(numero < -6){
            numero = 0;
        }
        if(numero > 0){
            numero = -6
        }

       if(numero == 0){
            document.getElementById('PantallaNew').src = "menu.html";
            ReturnNumero();
       }
       if(numero == -1){
            document.getElementById('PantallaNew').src = "ChatJs.html";
            ReturnNumero();
       }
       if(numero == -2){
            document.getElementById('PantallaNew').src = "imagenCss.html";
            ReturnNumero();
       }
        if(numero == -3){
            document.getElementById('PantallaNew').src = "JuegoDeMemoria.html";
            ReturnNumero();
        }
        if(numero == -4){
        document.getElementById('PantallaNew').src = "ClonePagina.html";
        ReturnNumero();
        }
        if(numero == -5){
        document.getElementById('PantallaNew').src = "calculadora.html";
        ReturnNumero();
        }
        if(numero == -6){
        document.getElementById('PantallaNew').src = "LectorDeLibros.html";
        ReturnNumero();
        }              
    }
}

function UpButton(){ 
    if(estado = "menu"){
        numero += 1;
        if(numero < -6){
            numero = 0;
        }
        if(numero > 0){
            numero = -6
        }

        if(numero == 0){
            document.getElementById('PantallaNew').src = "menu.html";
            ReturnNumero();
       }
       if(numero == -1){
            document.getElementById('PantallaNew').src = "ChatJs.html";
            ReturnNumero();
       }
       if(numero == -2){
            document.getElementById('PantallaNew').src = "imagenCss.html";
            ReturnNumero();
       }
        if(numero == -3){
            document.getElementById('PantallaNew').src = "JuegoDeMemoria.html";
            ReturnNumero();
        }
        if(numero == -4){
        document.getElementById('PantallaNew').src = "ClonePagina.html";
        ReturnNumero();
        }
        if(numero == -5){
        document.getElementById('PantallaNew').src = "calculadora.html";
        ReturnNumero();
        }
        if(numero == -6){
        document.getElementById('PantallaNew').src = "LectorDeLibros.html";
        ReturnNumero();
        }
    }
}

function LeftButton(){ 
    return numero; 
}

function StartButton(){
    document.getElementById('PantallaNew').src = "Perfil.html";
    estado = "perfil";
}

function SelectButton(){
    document.getElementById('PantallaNew').src = "warning.html";
    estado = "warning";
}

function AButton(){
    console.log(estado);
    if(estado == "menu"){
       if(numero == 0){
           window.open("http://msdeus.site/17189/lab3/Inicio.html");
       }
       if(numero == -1){
           window.open("http://msdeus.site/17189/jsOnly.html");
       }
       if(numero == -2){
            window.open("http://msdeus.site/17189/lab4/lab_4/Rey_snorky.html");
       }
        if(numero == -3){
            window.open("http://msdeus.site/17189/lab_6/index.html");
        }
        if(numero == -4){
            window.open("http://msdeus.site/17189/proyecto-web/proyecto-web-/src/index.html");
        }
        if(numero == -5){
            window.open("http://msdeus.site/17189/lab8/src/calculadora.html");
        }
        if(numero == -6){
            window.open(" http://18.223.101.121/");
        }              
    }
    if(estado = "Warning"){
        document.getElementById('PantallaNew').src = "menu.html";
        estado = "menu";
    }
    if(estado == "perfil"){
        window.open("https://www.linkedin.com/in/alexander-trujillo-contreras-724a72197/");
    }
}

function BButton(){
    if(estado = "menu"){
       if(numero == 0){
           window.close("http://msdeus.site/17189/lab3/Inicio.html");
       }
       if(numero == -1){
           window.close("http://msdeus.site/17189/jsOnly.html");
       }
       if(numero == -2){
            window.close("http://msdeus.site/17189/lab4/lab_4/Rey_snorky.html");
       }
        if(numero == -3){
            window.close("http://msdeus.site/17189/lab_6/index.html");
        }
        if(numero == -4){
            window.close("http://msdeus.site/17189/proyecto-web/proyecto-web-/src/index.html");
        }
        if(numero == -5){
            window.close("http://msdeus.site/17189/lab8/src/calculadora.html");
        }
        if(numero == -6){
            window.close(" http://18.223.101.121/");
        }              
    }
}
