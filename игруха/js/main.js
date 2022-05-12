const btn = document.getElementById('btn'),
      restart = document.getElementById('restart'),
      text = document.getElementById('text');

btn.addEventListener('click', () => {
    for(let i = 0; i <= 100; i++) {
      text.innerHTML +='Взлом пентагона...' + i + '% <br />';
    }
    text.innerHTML += 'Пентагон успешно взломан!';

    //анимация появления
    $.fn.animate_Text = function() {
      var string = this.text();
      return this.each(function(){
       var $this = $(this);
       $this.html(string.replace(/./g, '<span class="new">$&</span>'));
       $this.find('span.new').each(function(i, el){
        setTimeout(function(){ $(el).addClass('div_opacity'); }, 2 * i);
       });
      });
     };
     $('#text').show();
     $('#text').animate_Text();
});

//кнопка перезагрузки
restart.addEventListener('click', () => {
  window.location.reload();
});