$(function(){

    $('#random-button').click(function(){
      getRandom();
    })

    function getRandom() {
        $.ajax({
          url: 'random',
          success: function(data) {
            showRandom(data.number);
          }
        })
    }

    function showRandom(number) {
      $("#random-number").text(number);
    }

})
