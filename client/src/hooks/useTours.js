import { useEffect, useState } from 'react';

const useTours = () => {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        fetch('https://mighty-falls-22636.herokuapp.com/tours')
            .then((res) => res.json())
            .then((data) => {
                setTours(data);
            });
    }, []);

    const submit = (values) => {
        fetch('https://mighty-falls-22636.herokuapp.com/addservice', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
            .then((res) => res.json())
            .then((data) => {
                setTours([{ _id: data.insertedId, ...values }, ...tours]);
            });
    };

    return { tours, submit };
};

export default useTours;
