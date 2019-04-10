$('#my-menu').mmenu({
  extensions: ['widescreen','position-bottom', 'theme-black', 'effect-menu-slide', 'pagedim-black'],
  });

 api=$('#my-menu').data('mmenu');
 api.bind('open:finish', function(){
   $('.hamburger').addClass('is-active');
 });
 api.bind('close:finish', function(){
   $('.hamburger').removeClass('is-active');
 });


//Owl-carousel
$('.owlcarousel-services').owlCarousel({
  loop: true,
  nav: true,
  navText: ['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
  responsiveClass: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1
    },
    450: {
      items: 2
    },
    680: {
      items: 3
    },
    1100: {
      items: 4
    }
  }
});
$('.owlcarousel-categories').owlCarousel({
  autoplay: true,
  responsiveClass: true,
  loop: true,
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    600: {
      items: 3
    },
    900: {
      items: 4
    }
  }
});

$('.owlcarousel-for-beginners').owlCarousel({
  responsiveClass: true,
  responsive: {
    0: {
      items: 2
    },
    420: {
      items: 3
    },
    680: {
      items: 4
    },
    900: {
      items: 5
    }
  }
});

$('.owlcarousel-for-brands').owlCarousel({
  responsiveClass: true,
  responsive: {
    0: {
      items: 2
    },
    900: {
      items: 6
    },
    550: {
      items: 4
    },
    400: {
      items: 3
    },
    1100: {
      items: 8
    },
    700: {
      items: 5
    }
  }
});

$('.owlcarousel-for-professionals').owlCarousel({
  responsiveClass: true,
  responsive: {
    0: {
      items: 3
    },
    700: {
      items: 4
    }
  }
});



//Preloader

images=document.images;
totalAmountOfImages=images.length;
imagesLoadedCounter=0;
loadedPerc=document.getElementById('loadPerc');


for(var i=0; i<totalAmountOfImages;i++)
{
	imageClone= new Image();
	imageClone.src=images[i].src;
	imageClone.onload=  imagesLoaded;
    imageClone.onerror= imagesLoaded;



	function imagesLoaded()
	{
	   imagesLoadedCounter++;
	   loadedPerc.innerHTML=(((100/totalAmountOfImages)*imagesLoadedCounter)<<0)+'%';

	   if (imagesLoadedCounter>=totalAmountOfImages)
	   {
			document.body.onload=preloadFunction();

			function preloadFunction()
			{
				time=setTimeout(function()
				{
					var preloader=document.getElementById('pagePreloader');
					if(!preloader.classList.contains('done'))
					{
						preloader.classList.add('done');
					}
				},1000);
			}
	   }
	}

}

//Scroll
/*
var pageHeight = window.innerHeight;
var isAnimating = false;
document.body.style.transform = 'translate3d(0px,0px,0px)';

document.addEventListener('scroll', function(e){
  document.body.scrollTop = 0;
});
document.addEventListener('wheel', wheelListener);

function wheelListener(e) {
  if(e.deltaY > 0) {
    scrollPage(-pageHeight);
  } else {
    scrollPage(+pageHeight);
  }
}

function scrollPage(scrollSize) {
  if(isAnimating){
    return;
  }
  isAnimating = true;
  var yPos = getNewYPos(scrollSize);
  document.body.style.transform = 'translate3d(0px,'+ yPos + ',0px)';
}

function getNewYPos(add){
  console.log('aaaa', document.body.style.transform);
  var oldYPos = document.body.style.transform.split(',')[1];
  oldYPos = parseInt(oldYPos.replace(/px/,''));
  var newYPos = oldYPos + add;
  return Math.min(0, newYPos) + 'px';
}


document.body.addEventListener('transitionend', function(){
  setTimeout(function(){ isAnimating = false; }, 500);
  document.addEventListener('wheel', wheelListener);
})
*/
$(document).ready(function() {
	$('#my-page').fullpage({
		//options here
		autoScrolling:true
	});
});
