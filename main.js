const rating = document.getElementById('rating');
const submit = document.getElementById('submit');

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

```
add the following code to the main.css file:
```
