const rating = document.getElementById('rating');
const submit = document.getElementById('submit');
const rate = document.querySelectorAll('.rate');

const thankyou = document.getElementById('thankyou');

submit.addEventListener('click', () => {
    thankyou.style.display = 'block';
    rating.style.display = 'none';

    setTimeout(() => {
        thankyou.style.display = 'none';
        rating.style.display = 'block';
    }
    , 5000);
}
);

rate.forEach((star) => {
    star.addEventListener('click', () => {
        rate.forEach((star) => {
            star.classList.remove('active');
        }
        );
        star.classList.add('active');
    }
    );
});



