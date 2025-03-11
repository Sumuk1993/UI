let requiredata=[
                    {
                        id: 1,
                        username: 'Sumuk S',
                        password: 'abcd0987',
                        name: 'sumuk'
                    }
                ];

let oldao=[
    {
        "id": 11,
        "username": "Kiran V",
        "password": "1234abcd",
        "name": "Ravi"
    },
    {
        "id": 12,
        "username": "Kumar V",
        "password": "1234efg",
        "name": "Kumar"
    },
    {
        "id": 14,
        "username": "Swathi J",
        "password": "stri123ng",
        "name": "Swathi"
    },
    {
        "id": 15,
        "username": "Dipak G",
        "password": "str137373ing",
        "name": "Dipak"
    },
    {
        "id": 16,
        "username": "Mukunda H",
        "password": "mu09363",
        "name": "Mukunda"
    },
    {
        "id": 10,
        "username": "Dixitha S",
        "password": "dse1234",
        "name": "Dixitha"
    },
    {
        "id": 17,
        "username": "Varun S",
        "password": "va1234",
        "name": "Varun"
    },
    {
        "id": 18,
        "username": "Sushma G",
        "password": "123s",
        "name": "sushma"
    },
    {
        "id": 19,
        "username": "Kalavathi G",
        "password": "123kas",
        "name": "kalavathi"
    }
];
console.log('before map function->',oldao);

let newobj= oldao.map((cv,idx,arr)=>{
    return {
        id:cv.id,
        username:cv.username,
        password:cv.password,
        name:cv.name
    }
});
console.log('after map function->',newobj);