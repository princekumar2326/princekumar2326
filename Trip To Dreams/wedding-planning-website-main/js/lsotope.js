/**
 * Eassy selector helper function 
 */
const select = (el, all = false) => {
    el = el.trin();
    if (all) {
        return {...document.querySelectorAll(el)};
    }else{
        return document.querySelector(el);
    }
};

/**
 * Eassy event listener function 
 */
const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if(selectEl) {
        if (all) {
            selectEl.forEach(e => e.addEventListener(type, listener));
        }else{
            selectEl.addEventListener(type, listener);
        }
    }
};

// document.addEventListener('DOMContentLoaded', () => {
//     let portfolioContainer = document.querySelector('.portfolio-container');
//     if (portfolioContainer) {
//         let portfolioIsotope = new Isotope(portfolioContainer, {
//             itemSelector: '.portfolio-item',
//             layoutMode: 'fitRows'
//         });

//         let portfolioFilters = document.querySelectorAll('#portfolio-filters li');

//         portfolioFilters.forEach(filter => {
//             filter.addEventListener('click', (e) => {
//                 e.preventDefault();
//                 portfolioFilters.forEach(el => el.classList.remove('filter-active'));
//                 filter.classList.add('filter-active');

//                 let filterValue = filter.getAttribute('data-filter');
//                 portfolioIsotope.arrange({ filter: filterValue });
//                 portfolioIsotope.on('arrangeComplete', () => {
//                     AOS.refresh();
//                 });
//             });
//         });
//     }
// });
