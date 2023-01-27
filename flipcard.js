const card = document.querySelector('.card');


 $(document).ready(function(){
    $(".card").flip({
        axis: 'y',
        trigger: 'click'
    });
});