import imgPuraVidaViajes from '../images/puraVidaViajes.webp'
import imgEsquinaVerdePlanta from '../images/EsquinaVerde.webp'
import imgDriversPi from '../images/DriversPI.jpg'
import imgUserAuthApp from '../images/UserAuthApp.jpg'

export const Projects = [

    {
        id: 1,
        name: "Pura Vida Viajes",
        img: imgPuraVidaViajes,
        demo: 'https://client-puravidas-projects.vercel.app/',
        repository: 'https://github.com/JhonattanEscorihuela/PuraVidaViajesPremium',
        despription: "A website where you can put together a travel plan with an expert from the country you are going to."
    },
    {
        id: 2,
        name: "Esquina Verde",
        img: imgEsquinaVerdePlanta,
        demo: '',
        repository: 'https://github.com/EsquinaVerdePlantas',
        despription: 'A website where you can buy plants for indoor, outdoor or decorative use.'
    },
    {
        id: 3,
        name: "PI Drivers",
        img: imgDriversPi,
        demo: 'https://pidrivers.netlify.app',
        repository: 'https://github.com/JhonattanEscorihuela/ProyectoIndividual_JE_Drivers',
        despription: 'A web application with the use of Drivers api.'
    },
    {
        id: 4,
        name: "User Auth App",
        img: imgUserAuthApp,
        demo: "https://userauthappescorihuela.netlify.app",
        repository: "https://github.com/JhonattanEscorihuela/UserAuthApp",
        despription: "A user authentication web app built with React.js, Redux, and CSS. It uses JWT tokens for authentication, Axios for API requests, and is deployable on Netlify and Render. Securely manage user registration and authentication!"
    }
]