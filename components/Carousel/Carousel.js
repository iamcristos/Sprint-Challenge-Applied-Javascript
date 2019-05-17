class Carousel {
    constructor(domElement) {
        this.domElement = domElement;
        this.images = document.querySelectorAll('img');
        this.btnRight = document.querySelector('.right-button');
        this.btnLeft = document.querySelector('.left-button');
        this.index = 0
        this.btnRight.addEventListener('click', ()=>this.rightSlide())
        this.btnLeft.addEventListener('click', ()=>this.rightSlide())
    }

    rightSlide() {
        this.hideSlide()
        const imageArray =Array.from(this.images)
        this.index <= 1 ? this.index+=2 : this.index--
        imageArray[this.index].classList.add('show-image')
    }

    // leftSlide() {
    //     this.hideSlide()
    // }

    hideSlide() {
        this.images.forEach(image=> image.classList.remove('show-image'))
    }
}

let carousel = document.querySelectorAll('img');

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
new Carousel(carousel)