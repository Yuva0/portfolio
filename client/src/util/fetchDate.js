const fetchDate = (date) => {
    const dateNew = new Date(date);
    const day = dateNew.toLocaleString('en-US', { day: '2-digit'});
    const month = dateNew.toLocaleString('en-US',{month: "long"});
    const year = dateNew.getFullYear();

    return [day,month,year];
};

export default fetchDate;