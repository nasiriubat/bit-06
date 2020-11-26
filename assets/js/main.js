$(document).ready(function(){

    
    //active menu item
    $(function() {
        $( 'ul.main-nav li' ).on( 'click', function() {
              $( this ).parent().find( 'li.active' ).removeClass( 'active' );
              $( this ).addClass( 'active' );
        });
    });
    
    
    
    
    });