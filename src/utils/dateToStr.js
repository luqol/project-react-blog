export const dateToStr = date => {
    return  date.getDate() + '/' + (date.getMonth()+1) + '/' + (date.getYear()-100);
};