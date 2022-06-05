'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// const getCountryData = function (country) {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v2/name/${country}`)
//     request.send()
//     console.log('#request', request)
//     console.log(request.responseText);
//     request.addEventListener('load', function () {
//         console.log('#this', this)
//         console.log(this.responseText)
//         const [data] = JSON.parse(this.responseText)
//         const html = `
//     <article class="country">
//         <img class="country__img" src="${data.flag}" />
//         <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//         </div>
//     </article>
//     `

//         countriesContainer.insertAdjacentHTML('beforeend', html)
//         countriesContainer.style.opacity = 1
//         console.log('#data', data)
//     })
// }


const renderCountry = (data, className) => {
    const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
    </article>
    `

    countriesContainer.insertAdjacentHTML('beforeend', html)
    // countriesContainer.style.opacity = 1
}

const getCountryAndNeighbour = function (country) {

    // Ajax call country 1
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${country}`)
    request.send()
    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText)
        renderCountry(data)
        const neighbour = data.borders?.[0]
        if (!neighbour) return
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`)
        request2.send()
        request2.addEventListener('load', function () {
            const data2 = JSON.parse(this.responseText)
            renderCountry(data2, 'neighbour')
        })
    })
}

const renderError = function (message) {
    countriesContainer.insertAdjacentText('beforeend', message)
    // countriesContainer.style.opacity = 1
}

// getCountryAndNeighbour('portugal')

const getCountryAndNeighbourWithFetch = (country) => {
    fetch(`https://restcountries.com/v2/name/${country}`)
        .then(response => response.json())
        .then(data => {
            renderCountry(data[0])
            const neighbour = data[0].borders?.[0]

            if (!neighbour) return

            return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)
        })
        .then(response => response.json())
        .then(data => renderCountry(data, 'neighbour'))
        .catch(error => {
            renderError(`Something went wrong, ${error.message}`)
        })
        .finally(() => {
            countriesContainer.style.opacity = 1
        })
}

getCountryAndNeighbourWithFetch('portugal')

btn.addEventListener('click', function () {
    getCountryAndNeighbourWithFetch('asdasd')
})