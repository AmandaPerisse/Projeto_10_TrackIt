import React from 'react';
import dayjs from 'dayjs';

export default function Data() {
    var data = new Date()
    const par = dayjs(data).format("DD/MM"); // display
    const diasSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

    return(
        <>
            <h3>
                {diasSemana[data.getDay()]}, {par}
            </h3>
        </>
    );
}