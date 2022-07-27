import { v4 as uuid } from 'uuid';

const user = {
    name: "Thyago Quintas",
    username: "thyagoquintas",
    img: "https://media-exp1.licdn.com/dms/image/C4D03AQEEnamQ47SI2Q/profile-displayphoto-shrink_200_200/0/1614316634957?e=1653523200&v=beta&t=-zdQbgGC8YeQAswnT2Pf8vnkeKjJpbU03JliHr-B0X0",
    id: uuid()
}

export function getPost(){
    return {
        id: uuid(),
        user: user,
        text: "Olá Mundo!",
        img: 'https://i.pinimg.com/originals/5c/7b/53/5c7b53a7be1dd267f24f7559584d1345.jpg',
        likes: 10,
        comments: [{
            user: user,
            text: "Topzera!"
        },{
            user: user,
            text: '@beeabelha @waltin'
        }]
    }
}