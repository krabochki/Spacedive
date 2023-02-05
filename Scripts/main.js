for (let i=0; i<=document.getElementsByTagName('nav')[0].getElementsByTagName('img').length-1; i++) {
    document.getElementsByTagName('nav')[0].getElementsByTagName('img')[i].addEventListener('click',function(){DoesItCurrent(this.id)});
}

$(document).scroll(function(e)
{

    id='h1';
    for (let i = 1; i <= 10; i++) 
    {
        var current_top = $(this).scrollTop()  + 1;
        $(document.getElementById(i)).each(function()
        {
            if
            ( 
                $(this).position().top  <= current_top && $(this).position().top + $(this).outerHeight() >= current_top
            )   
                {
                    document.getElementById(id).classList.add("current-theme");
                }
            else
            {
                document.getElementById(id).classList.remove("current-theme");
            }
        });
        id = id.replace('h','');
        id++;
        id='h'+id;
    }    
});
    


  document.getElementsByTagName('button')[0].addEventListener('click',function(){DoesItCurrent2()});

function DoesItCurrent(paramId) {
  var id=paramId;
  id = id.replace('h','');
  const pNum = id;
  const scrollTarget = document.getElementById(pNum);
  const elementPosition = scrollTarget.getBoundingClientRect().top;
  const offsetPosition = elementPosition;

  window.scrollBy({
      top: offsetPosition,
      behavior: "smooth"
  });
}


function DoesItCurrent2() {

  const scrollTarget = document.getElementById("1");
  const elementPosition = scrollTarget.getBoundingClientRect().top;

  window.scrollBy({
      top: elementPosition,
      behavior: "smooth"
  });
}



var k=1;

document.getElementById('menubutton').addEventListener('click',function(){Menu()});
function Menu() {
    if (k==1){
        k--;
        document.getElementsByTagName("aside")[0].classList.add("asideyes");
        document.getElementById("menubutton").classList.add("rocket");
        document.getElementsByTagName("html")[0].classList.add("noscroll");

    }
    else{
        k++;
        document.getElementsByTagName("aside")[0].classList.remove("asideyes");
        document.getElementById("menubutton").classList.remove("rocket");
        document.getElementsByTagName("html")[0].classList.remove("noscroll");


    }

  }

  document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("menubutton");
    const rect = document.getElementById("rect");
  
    button.addEventListener("click", () => {
      toggleTwoClasses(rect, "is-visible", "is-hidden", 1000);
    });
  });
  
  function toggleTwoClasses(element, first, second, timeOfAnimation) {
    if (!element.classList.contains(first)) {
      element.classList.add(first);
      element.classList.remove(second);
    } else {
      element.classList.add(second);
      window.setTimeout(function() {
        element.classList.remove(first);
      }, timeOfAnimation);
    }
  }