const myCarouselElement = document.querySelector('#carouselAutoplaying')
    const carousel = new bootstrap.Carousel(myCarouselElement, {
        interval: 5000,
        touch: false
    })