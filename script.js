$(document).ready(function () {
    $('.filter').click(function () {
        const value = $(this).attr('data-filter');
        if (value == 'Showall') {
            $('.itemBox').show('1000');
        }
        else {
            $('.itemBox').not('.' + value).hide('1000');
            $('.itemBox').filter('.' + value).show('1000');
        }
    })
    // add active class on selected item
    $('.filter').click(function () {
        $(this).addClass('acctive').siblings().removeClass('acctive');
    })
})