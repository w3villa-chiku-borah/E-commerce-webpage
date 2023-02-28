$(document).ready(function(){
$('#owltwo.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
    
        1220:{
            items:4
        },
    
        1460:{
            items:5
        },
    }
    
    })
    
    $('#owlone.owl-carousel').owlCarousel({
    // loop:true,
    margin:0,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
    
        1220:{
            items:6
        },
    
        1460:{
            items:9
        },
    }
    
    });
    $('#owlthree.owl-carousel').owlCarousel({
    // loop:true,
    margin:0,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        },
    
        1220:{
            items:3
        },
    
        1460:{
            items:3
        },
    }
    
    });
    $('#owlnine.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
    
        1220:{
            items:3
        },
    
        1460:{
            items:4
        },
    }
    
    });
    $('#owlfour.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1084:{
            items:2
        },
    
        1220:{
            items:2
        },
        
    
        1400:{
            items:3
        },
    }
    
    });
    });

function tapButtonBuy(para){
    let boxC= document.getElementsByClassName('boxc1')[0];
    boxC.classList.remove("boxc1");
    para.classList.add("boxc1");

}
function tapButtonFeature(para){
    let boxC= document.getElementsByClassName('boxc1-feature')[0];
    boxC.classList.remove("boxc1-feature");
    para.classList.add("boxc1-feature");

}
function tapButtonBlog(para){
    let boxC= document.getElementsByClassName('boxc1-blog')[0];
    boxC.classList.remove("boxc1-blog");
    para.classList.add("boxc1-blog");

}


