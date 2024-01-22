import displayGames from "./displayModule.js";


$(document).ready(function () {
    $('.loading').fadeOut(2000);
    let category = 'mmorpg';

    let cat = ['mmorpg', 'shooter', 'sailing', 'permadeath', 'superhero', 'pixel'];

    let navOffset = $('.navbar').offset().top;
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > navOffset) {
            $('.navbar').addClass('fixed-top');
        } else {
            $('.navbar').removeClass('fixed-top');
        }
    })

    $('.nav-item').on('click', function (e) {
        category = $(e.target).text();
        console.log(category);
        displayGames(category)
    })
    let row = document.querySelector('.row');
    displayGames(category)

    $('.game-details i').on('click', function () {
        // console.log('sososo');
        $('.game-details').addClass('d-none');
        $('.games').removeClass('d-none');
    })
})