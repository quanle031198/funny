function yes() {
    alert('I love U too')
}
function noBtn()
{
  var sl = document.getElementById('id-paper');
  var x = Math.round(Math.random() * sl.offsetWidth);
  var y = Math.round(Math.random() * sl.offsetHeight);

  document.getElementById('btnNo').style.left = x + 'px';
  document.getElementById('btnNo').style.top = y + 'px';
}


document.querySelector('.envelope').addEventListener('click', function(){
  if (document.querySelector('.letter').classList.contains('letter--open')){
    document.querySelector('.letter').classList.remove('letter--open');
    document.querySelector('.letter').classList.add('letter--close');
    setTimeout(function(){
      document.querySelector('.letter').classList.remove('letter--close');
    }, 600);    
  } else {
    document.querySelector('.letter').classList.remove('letter--close');
    document.querySelector('.letter').classList.add('letter--open');
  }
});

document.querySelector('.paper-close').addEventListener('click', function(){   document.querySelector('.letter').classList.remove('letter--open');
  document.querySelector('.letter').classList.add('letter--close');
  setTimeout(function(){
    document.querySelector('.letter').classList.remove('letter--close');
  }, 600);
});
  