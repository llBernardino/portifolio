 
// export const myObserver = new IntersectionObserver ((entries) => {
//     entries.forEach((entry) => {
//         if(entry.isIntersecting === true){
//             entry.target.classList.add('showL') 
            
//         } else{
//             entry.target.classList.remove('showL')
//             entry.target.classList.add('hidden')
//         }
//     })
// })
   
// const selector = (): void => {
//     const elements = document.querySelectorAll('.select')
//     elements.forEach((element) => myObserver.observe(element))
// };
// setInterval(selector, 1000); 
export const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const element = entry.target as HTMLElement;
        if (entry.isIntersecting) {
            element.classList.add('show');
            element.classList.remove('hidden', 'hidden'); // Remove ambas as classes de hidden, se existirem
        } else {
            element.classList.remove('show');
            // Verifica o atributo de dados para determinar qual classe hidden aplicar
            const hiddenClass = element.dataset.hiddenClass || 'hidden';
            element.classList.add(hiddenClass);
        }
    });
});

const selector = (): void => {
    const elements = document.querySelectorAll('.select');
    elements.forEach((element) => myObserver.observe(element as Element));
};
setInterval(selector, 1000);