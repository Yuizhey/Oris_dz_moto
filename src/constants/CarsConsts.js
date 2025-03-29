const carsConsts = [
    {
        id: 1,
        imagePath: "https://photo.auto.ru/photo/get-autoru-vos/5233266/ZgycElMwEAsBWXV31tgXdvwzZvtNKnysDiRs0C_7cW_R4R785ZtconhHP7tIyUoziW2G7my-WUr-M0ghdrmfOoeIcuHnEmhreLe7i8orU72HuceM4cj5QEbWzlFlgcUDXWdEYH0aKIdKBllLx1SDGfnFtu2rzcytIJlklVfNe8VRVA/1200x900n",
        name: "BMW X5 30d, 2021",
        characteristics: {
            seats: 4,
            horsepower: 286,
            fuel: "Diesel",
            engine: 3 ,
            doors: 4,
            drive: 4,
            type: "SUV",
            luggage: 650
        },
        pricePerHour: 56
    },
    {
        id: 2,
        imagePath: "https://avatars.mds.yandex.net/get-autoru-vos/4792406/69145bacb71a554ca4a754703cc4f496/1200x900n",
        name: "BMW X5 4.4i, 2001",
        characteristics: {
            seats: 4,
            horsepower: 286 ,
            fuel: "Petrol",
            engine: 4.4 ,
            doors: 4,
            drive: 4,
            type: "SUV",
            luggage: 465
        },
        pricePerHour: 80
    },
    {
        id: 3,
        imagePath: "https://avatars.mds.yandex.net/get-autoru-vos/2169820/94d97fb74cdb0c60aaae7712fc000ca5/1200x900n",
        name: "BMW X5 35i, 2014",
        characteristics: {
            seats: 4,
            horsepower: 306,
            fuel: "Petrol",
            engine: 3,
            doors: 4,
            drive: 4,
            type: "SUV",
            luggage: 650
        },
        pricePerHour: 100
    },
    {
        id: 4,
        imagePath: "https://avatars.mds.yandex.net/get-autoru-vos/2062230/483dd84375b91dd99ccab7bd47f84974/832x624",
        name: "BMW Z4 28i, 2013",
        characteristics: {
            seats: 2,
            horsepower: 245,
            fuel: "Petrol",
            engine: 2 ,
            doors: 2,
            drive: 2,
            type: "Rodster",
            luggage: 180
        },
        pricePerHour: 120
    },
    {
        id: 5,
        imagePath: "https://avatars.mds.yandex.net/get-autoru-vos/10637031/398e9b770c43a5f2d7f6f4629ae247fe/832x624",
        name: "BMW Z4 20i, 2021",
        characteristics: {
            seats: 2,
            horsepower: 197 ,
            fuel: "Petrol",
            engine: 2 ,
            doors: 2,
            drive: 2,
            type: "Rodster",
            luggage: 281 
        },
        pricePerHour: 90
    },
    {
        id: 6,
        imagePath: "https://avatars.mds.yandex.net/get-autoru-vos/6167167/b56bc5843e88fd8456764296fa85d200/832x624",
        name: "BMW Z4 30i, 2021",
        characteristics: {
            seats: 2,
            horsepower: 258,
            fuel: "Petrol",
            engine: 2 ,
            doors: 2,
            drive: 2,
            type: "Rodster",
            luggage: 281  
        },
        pricePerHour: 110
    },
    {
        id: 7,
        imagePath: "https://avatars.mds.yandex.net/get-autoru-vos/2166186/2ac5e9dbe481ab01a456c074cbf7296c/832x624",
        name: "BMW iX xDrive40",
        characteristics: {
            seats: 4,
            horsepower: 326 ,
            fuel: "Electricity",
            engine: 0,
            doors: 4,
            drive: 4,
            type: "SUV",
            luggage: 500
        },
        pricePerHour: 70
    },
    {
        id: 8,
        imagePath: "https://avatars.mds.yandex.net/get-autoru-vos/2087663/a8c18d7766c60c9c861fe3ce7b2b8c32/832x624",
        name: "BMW iX xDrive50, 2024",
        characteristics: {
            seats: 4,
            horsepower: 523,
            fuel: "Electricity",
            engine: 0,
            doors: 4,
            drive: 4,
            type: "SUV",
            luggage: 500
        },
        pricePerHour: 50
    },
    {
        id: 9,
        imagePath: "https://avatars.mds.yandex.net/get-autoru-vos/4948662/32ac95bd457d04dee0c0b2b5a1df439c/832x624",
        name: "BMW iX M60, 2022",
        characteristics: {
            seats: 4,
            horsepower: 540 ,
            fuel: "Electricity",
            engine: 0,
            doors: 4,
            drive: 4,
            type: "SUV",
            luggage: 500
        },
        pricePerHour: 150
    },
    {
        id: 10,
        imagePath: "https://avatars.mds.yandex.net/get-autoru-vos/2058600/6d1ac071b263e888aa2a00b8d958f825/832x624",
        name: "BMW 3 серии 318d, 2021",
        characteristics: {
            seats: 5,
            horsepower: 150 ,
            fuel: "Diesel",
            engine: 2,
            doors: 4,
            drive: 2,
            type: "Sedan",
            luggage: 480 
        },
        pricePerHour: 130
    },
    {
        id: 11,
        imagePath: "https://photo.auto.ru/photo/get-autoru-vos/2022285/CG9AjyVd1YugWFDLLHH8a59cHSmLnD4bi3W9PM4jCGd5uPDWsxvmQJ8-mi2tUxTmoEWsjVc4SwOLY6HNo9A4NACj8lNn44ssT0DmidTcvCit7JREObNvcwvT8V4ZYU6vd8-gzH8nfk9w_QuPkdS-BN51e0u0JScOvclX5o6vyruUxiY/832x624",
        name: "BMW 3 серии Long 325Li, 2021",
        characteristics: {
            seats: 5,
            horsepower: 184,
            fuel: "Petrol",
            engine: 2,
            doors: 4,
            drive: 2,
            type: "Sedan",
            luggage: 517
        },
        pricePerHour: 200
    },
    {
        id: 12,
        imagePath: "https://avatars.mds.yandex.net/get-autoru-vos/2142578/45216afb87680adc9404ab139d6d930f/832x624",
        name: "BMW 3 серии 320i xDrive, 2020",
        characteristics: {
            seats: 5,
            horsepower: 184 ,
            fuel: "Petrol",
            engine: 2,
            doors: 4,
            drive: 4,
            type: "Sedan",
            luggage: 480 
        },
        pricePerHour: 300
    },
    {
        id: 13,
        imagePath: "https://avatars.mds.yandex.net/get-autoru-vos/2171287/c8a10995a725d05493b27da528e115de/832x624",
        name: "BMW 4 серии 420i, 2022",
        characteristics: {
            seats: 4,
            horsepower: 184 ,
            fuel: "Petrol",
            engine: 2,
            doors: 2,
            drive: 2,
            type: "Coupe",
            luggage: 440  
        },
        pricePerHour: 300
    },
    {
        id: 14,
        imagePath: "https://avatars.mds.yandex.net/get-autoru-vos/11369845/470b472f0aef7a4274fbcb86e5056445/832x624",
        name: "BMW 4 серии 430i, 2022",
        characteristics: {
            seats: 4,
            horsepower: 245 ,
            fuel: "Petrol",
            engine: 2,
            doors: 2,
            drive: 2,
            type: "Cabriolet",
            luggage: 385   
        },
        pricePerHour: 300
    },
    {
        id: 15,
        imagePath: "https://avatars.mds.yandex.net/get-autoru-vos/2080053/d909182880dfdee5c75dad95a8665b6c/832x624",
        name: "BMW 4 серии 420d xDrive, 2016",
        characteristics: {
            seats: 4,
            horsepower: 190 ,
            fuel: "Petrol",
            engine: 2,
            doors: 2,
            drive: 4,
            type: "Coupe",
            luggage: 445    
        },
        pricePerHour: 300
    }
];

export default carsConsts;
