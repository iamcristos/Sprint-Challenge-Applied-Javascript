class Carousel {
    constructor(domElement) {
        this.domElement = domElement;
        this.images = this.domElement.querySelectorAll('img');
        this.btnRight =this.domElement.querySelector('.right-button');
        this.btnLeft = this.domElement.querySelector('.left-button');
        this.index = 0
        this.btnRight.addEventListener('click', (e)=>this.slide(e));
        this.btnLeft.addEventListener('click', (e)=>this.slide(e)); 
    }
    
    slide(e) {
        this.hideSlide()
        this.showSlide()
        e.target.classList.contains('right-button')
            ? TweenMax.from(".show-image", 2, {x:-100,opacity: 0.1})
            : TweenMax.from(".show-image", 2, {x:100,opacity: 0.1})
    }

    hideSlide() {
        this.images.forEach(image=> image.classList.remove('show-image'))
    }

    showSlide () {
        const imageArray =Array.from(this.images)
        this.index <= 1 ? this.index+=2 : this.index--
        imageArray[this.index].classList.add('show-image');
    }
}

let carousel = document.querySelector('.carousel');

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
new Carousel(carousel)