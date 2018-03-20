function addvalue(x, y) {
    return x + y;
}

/**
 * Set card animation
 */
function setForcastEvents() {
    setTimeout(function(){
        $('.element-card').on('click', function () {

            if ($(this).hasClass('open')) {
                $(this).removeClass('open');
            } else {
                $('.element-card').removeClass('open');
                $(this).addClass('open');
            }
        });
    },1000)
    
}

exports.addvalue = addvalue;
exports.setForcastEvents = setForcastEvents;