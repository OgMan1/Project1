
      function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.querySelector('#main').style.display = 'block';
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.querySelector('#main').style.display = 'none'; 
    }
    
    $(document).keydown(function (e) {

if (e.keyCode == 27) {
  document.getElementById("mySidenav").style.width = "0";
  document.querySelector('#main').style.display = 'none';
}
});

