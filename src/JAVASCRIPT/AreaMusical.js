window.onload = function(){
    slideA();
   // slide0();
    slider1()
}

var c = 1000;
    function slider1(){                          
        document.getElementById('comerci').src= '../IMG/IMG-Guitarra/Guitarra-Google/80px/0 (1).jpg';
        setTimeout('slider2()', c);
    }
    function slider2(){
        document.getElementById('comerci').src= '../IMG/IMG-Guitarra/Guitarra-Google/80px/0 (2).jpg';
        setTimeout('slider3()', c);
    }
    function slider3(){
        document.getElementById('comerci').src= '../IMG/IMG-Guitarra/Guitarra-Google/80px/0 (3).jpg';
        setTimeout('slider4()', c);
    }
    function slider4(){
        document.getElementById('comerci').src= '../IMG/IMG-Guitarra/Guitarra-Google/80px/0 (4).jpg';
        setTimeout('slider1()', c);
    }


    var i = 3000;
    function slide0(){
        document.getElementById('t').src = '../IMG/fotos para site/700px/0 (1).jpg';
        setTimeout('slide1()', i);
    }
    
    function slide1(){
        document.getElementById('t').src = '../IMG/fotos para site/700px/0 (2).jpg';
        setTimeout('slide2()', i);
    }
    function slide2(){
        document.getElementById('t').src = '../IMG/fotos para site/700px/0 (3).jpg';
        setTimeout('slide3()', i);
    }
    function slide3(){
        document.getElementById('t').src = '../IMG/fotos para site/700px/0 (8).jpg';
        setTimeout('slide4()', i);
    }
    function slide4(){
        document.getElementById('t').src = '../IMG/fotos para site/700px/0 (9).jpg';
        setTimeout('slide0()', i);
    }
    
    
    
    function slideA(){
        document.getElementById('a').src = '../IMG/fotos para site/700px/0 (1).jpg';
        setTimeout('slideB()', i);
    }
    
    function slideB(){
        document.getElementById('a').src = '../IMG/fotos para site/700px/0 (2).jpg';
        setTimeout('slideC()', i);
    }
    function slideC(){
        document.getElementById('a').src = '../IMG/fotos para site/700px/0 (3).jpg';
        setTimeout('slideD()', i);
    }
    function slideD(){
        document.getElementById('a').src = '../IMG/fotos para site/700px/0 (8).jpg';
        setTimeout('slideE()', i);
    }
    function slideE(){
        document.getElementById('a').src = '../IMG/fotos para site/700px/0 (9).jpg';
        setTimeout('slideA()', i);
    }
