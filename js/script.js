$(document).ready(function() {
    $('#headingOne').on('click', function(){
        var xhr = new XMLHttpRequest;
        xhr.open('GET','gameMD.html',true);
        xhr.onload = function() {
            if(this.status=== 200)
            {
                let el = document.getElementById("gameMD2");
                el.innerHTML=xhr.responseText;
                let $content = $("#headingOne");
                $content.css ({
                    'display': "block"
                });
            }
        }   
        xhr.send();
    });

    $('#headingTwo').on('click', function(){
        var xhr = new XMLHttpRequest;
        xhr.open('GET','gameCycle.html',true);
        xhr.onload = function() {
            if(this.status=== 200)  {
                let el = document.getElementById("gameCycle2");
                el.innerHTML=xhr.responseText;
                let $content = $("#headingTwo");
                $content.css ({
                'display': "block"
                });
            }
        }   
        xhr.send();
    });
    $('#headingThree').on('click', function(){
        var xhr = new XMLHttpRequest;
        xhr.open('GET','liquidationCenter.html',true);
        xhr.onload = function() {
            if(this.status=== 200)  {
                let el = document.getElementById("liquidationCenter2");
                el.innerHTML=xhr.responseText;
                let $content = $("#headingThree");
                $content.css ({
                'display': "block"
                });
            }
        }   
        xhr.send();
    });
   
    $(".next").on('click', function(){
        var currentImg = $(".active");
        var nextImg = currentImg.next();

        if (nextImg.length > 0) {
            currentImg.removeClass('active').css("z-index", "-10");
            nextImg.addClass('active').css("z-index", "10");
        }
    });
    $(".prev").on('click', function(){
        var currentImg = $(".active");
        var prevImg = currentImg.prev();

        if (prevImg.length > 0) {
            currentImg.removeClass('active').css("z-index", "-10");
            prevImg.addClass('active').css("z-index", "10");
        }
    });
}); 

