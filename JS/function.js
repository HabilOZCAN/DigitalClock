function show_selected() {
      let selector = document.getElementById('cities');
      let value = selector[selector.selectedIndex].value;


      let option = {
            timeZone: `${value}`,     //Asia/Tokyo,//Europe/Zurich //America/New_York
           // year: 'numeric',
           // month: 'numeric',
           // day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second:'numeric',
          }
          
          formater = new Intl.DateTimeFormat([], option);
          document.getElementById('display').innerHTML = formater.format(new Date());

          setTimeout(show_selected, 1000);
  }
  const displayScreen = document.getElementById('display');
  const citiesAvailable = document.getElementById('cities');

  window.onload = show_selected();
