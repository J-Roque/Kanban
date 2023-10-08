import { v4 as uuidv4 } from 'uuid'
const mockData = [
    {
        id: uuidv4(),
        title: "📋Por hacer",
        tasks: [
            {
                id: uuidv4(),
                title: 'Estudiar javascript'
            },
            {
                id: uuidv4(),
                title: 'Estudiar react'
            },
            {
                id: uuidv4(),
                title: 'Revisar log vps'
            }
        ]
    },
    {
        id: uuidv4(),
        title: "✔️En Progreso",
        tasks: [
            {
                id: uuidv4(),
                title: 'curso javascript'
            },
            {
                id: uuidv4(),
                title: 'curso react'
            },
        ]
    },{
        id: uuidv4(),
        title: "✔️Completado",
        tasks: [
            {
                id: uuidv4(),
                title: 'curso javascript'
            },
        ]
    }
];

export default mockData;