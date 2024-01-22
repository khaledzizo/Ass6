
export default async function displayGames(term) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ec6abd859emshff7cda73c618adep111743jsn5cfe7b461a3a',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${term}`, options);
    let response = await api.json();
    // console.log(response.length);
    // console.log(response);
    let row = document.querySelector('.row');
    $(row).html('');
    // console.log(row);

    // let cartona = ``;
    let div;
    for (let i = 0; i < response.length; i++) {
        // cartona += `<div class="col-md-3 my-2">
        //                 <div class="card-item p-3 border border-dark rounded rounded-3 pointer">
        //                     <div class="inner h-100 position-relative text-center">
        //                         <div class="info">
        //                             <img src="${response[i].thumbnail}" class="w-100 mb-4 rounded rounded-3 pointer" alt="">
        //                             <div class="head d-flex justify-content-between align-items-center">
        //                                 <h5>${response[i].title}</h5>
        //                                 <span class="bg-primary py-1 px-2 rounded rounded-2">Free</span>
        //                             </div>
        //                             <p>${response[i].short_description}</p>
        //                         </div>
        //                         <div class="more position-absolute bottom-0 w-100">
        //                             <div class="hr bg-dark my-1"></div>
        //                             <div class="d-flex justify-content-between align-items-center">
        //                                 <span class="bg-dark px-2 rounded rounded-3">${response[i].genre}</span>
        //                                 <span class="bg-dark px-2 rounded rounded-3">${response[i].platform}</span>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div class="layer">${response[i].id}</div>
        //                 </div>
        //             </div>`



        $('<div>', {
            class: 'col-md-3 my-2'
        }).appendTo(row);

        div = document.querySelectorAll('.row .col-md-3');
        // console.log(div);
        $('<div>', {
            class: 'card-item p-3 border border-dark rounded rounded-3 pointer'
        }).appendTo(div[i]);

        let cardItem = document.querySelectorAll('.col-md-3 .card-item')
        // console.log(cardItem);
        $('<div>', {
            class: 'inner h-100 position-relative text-center'
        }).appendTo(cardItem[i]);
        $('<div>', {
            class: 'layer'
        }).appendTo(cardItem[i]);
        let layer = document.querySelectorAll('.card-item .layer');
        // console.log(layer);
        $(layer[i]).text(`${response[i].id}`)

        let inner = document.querySelectorAll('.card-item .inner')
        // console.log(inner);
        $('<div>', {
            class: 'info'
        }).appendTo(inner[i]);
        let info = document.querySelectorAll('.inner .info');
        // console.log(info);
        $('<img>', {
            class: 'w-100 mb-4 rounded rounded-3 pointer',
            src: `${response[i].thumbnail}`
        }).appendTo(info[i]);
        $('<div>', {
            class: 'head d-flex justify-content-between align-items-center'
        }).appendTo(info[i]);

        let head = document.querySelectorAll('.info .head');
        // console.log(head);
        $('<h5>').appendTo(head[i]);
        let nameOfGame = document.querySelectorAll('.head h5');
        // console.log(nameOfGame);
        $('<span>', {
            class: 'bg-primary py-1 px-2 rounded rounded-2'
        }).appendTo(head[i]);
        let free = document.querySelectorAll('.head span');
        $(free[i]).text('Free')
        $(nameOfGame[i]).text(`${response[i].title}`)

        $('<p>').appendTo(info[i]);
        let desc = document.querySelectorAll('.info p')
        // console.log(desc);
        $(desc).text(`${response[i].short_description}`)

        cardItem[i].addEventListener('click', function (e) {
            // console.log(e.target.innerText);
            // displayGame(e.target.innerText)
            console.log($('.loading').removeAttr('style'));
            $(document).ready(function () {
                $('.loading').fadeOut(1000);
                displayGame(e.target.innerText)
            })
        })



        $('<div>', {
            class: 'more position-absolute bottom-0 w-100'
        }).appendTo(inner[i]);
        let more = document.querySelectorAll('.inner .more')
        // console.log(more);
        $('<div>', {
            class: 'hr bg-dark my-1'
        }).appendTo(more[i]);
        $('<div>', {
            class: 'd-flex justify-content-between align-items-center'
        }).appendTo(more[i]);
        let flex = document.querySelectorAll('.more .d-flex');
        // console.log(flex);
        $('<span>', {
            class: 'genre bg-dark px-2 rounded rounded-3'
        }).appendTo(flex[i]);
        $('.genre').text(`${response[i].genre}`)
        $('<span>', {
            class: 'platform bg-dark px-2 rounded rounded-3'
        }).appendTo(flex[i]);
        $('.platform').text(`${response[i].platform}`)


        //         $(div).html(`<div class="inner h-100 position-relative text-center">
        // <div class="info">
        //     <img src="${response[i].thumbnail}" class="w-100 mb-4 rounded rounded-3 pointer" alt="">
        //     <div class="head d-flex justify-content-between align-items-center">
        //         <h5>${response[i].title}</h5>
        //         <span class="bg-primary py-1 px-2 rounded rounded-2">Free</span>
        //     </div>
        //     <p>${response[i].short_description}</p>
        // </div>
        // <div class="more position-absolute bottom-0 w-100">
        //     <div class="hr bg-dark my-1"></div>
        //     <div class="d-flex justify-content-between align-items-center">
        //         <span class="bg-dark px-2 rounded rounded-3">${response[i].genre}</span>
        //         <span class="bg-dark px-2 rounded rounded-3">${response[i].platform}</span>
        //     </div>
        // </div>
        // </div>`);
    }
}



export async function displayGame(gameID) {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ec6abd859emshff7cda73c618adep111743jsn5cfe7b461a3a',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    let api = await fetch(`https://rapidapi.com/digiwalls/api/free-to-play-games-database?id=${gameID}`, options);
    let response = await api.json();
    $('.games').addClass('d-none');
    $('.game-details').removeClass('d-none');


    $('.game-details .row').html(`<div class="col-md-4">
                    <img src="${response.thumbnail}" class="w-100" alt="">
                </div>
                <div class="col-md-8">
                    <h4>Title: ${response.title}</h4>
                    <h5 class="my-3">Category: <span class="rounded rounded-2 bg-secondary px-2">${response.genre}</span></h5>
                    <h5 class="my-3">Platform: <span class="rounded rounded-2 bg-secondary px-2">${response.platform}</span></h5>
                    <h5 class="my-3">${response.description}</p>
                        <a href="${response.game_url}" class="btn btn-outline-warning text-light">Show Game</a>
                </div>`)








    $('.game-details .head i').on('click', function () {
        // $('.game-details').html('');
        $('.game-details').addClass('d-none');
        $('.games').removeClass('d-none');
    })

    // let game = document.querySelector('.game-details .container .row');
}
