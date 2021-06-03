const images = () => {
    const imgPop = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImg = document.querySelector('img');

    imgPop.classList.add('popup');
    workSection.appendChild(imgPop);
    
    imgPop.style.alignItems = 'center';
    imgPop.style.justifyContent = 'center';
    imgPop.style.display = 'none';
    
    imgPop.appendChild(bigImg);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if (target && target.classList.contains('preview')) {
            imgPop.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
        }

        if (target && target.matches('div.popup')) {
            imgPop.style.display = 'none';
        }

        
    })
};

export default images;