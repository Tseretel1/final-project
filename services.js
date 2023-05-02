window.addEventListener('load', function() {
    document.body.classList.add('fade-in');
  });



function playvideo(){
    document.getElementById("everyday").style.zIndex="0";
    document.getElementById("everyday").style.display="flex";
    document.getElementById("everyday").style.flexDirection="column";
    document.getElementById("everyday").style.alignItems="center";
    document.getElementById("everyday").style.justifyContent="center";
    document.getElementById("xclosebutton").style.zIndex="10";
    document.getElementById("video").style.opacity="1";
    document.getElementById("video").style.zIndex="20";
    document.getElementById("marginheader").style.opacity="0";
    document.getElementById("playbutton").style.transition="0.5s all ease-in-out";
    document.getElementById("video").style.transition="0.5s all ease-in-out";
}
function closevideo(){
    document.getElementById("everyday").style.zIndex="1";
    document.getElementById("everyday").style.opacity="1";
    document.getElementById("video").style.opacity="0";
    document.getElementById("video").style.zIndex="0";
    document.getElementById("everyday").style.display="flex";
    document.getElementById("everyday").style.justifyContent="left";
    document.getElementById("marginheader").style.opacity="1";
    document.getElementById("playbutton").style.opacity="1";
    document.getElementById("playbutton").style.transition="0.5s all ease-in-out";
    document.getElementById("video").style.transition="1.1s all ease-in-out";
}
