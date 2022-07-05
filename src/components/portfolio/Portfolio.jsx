import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/123.png'
import IMG2 from '../../assets/loudgreen.png'
import IMG3 from '../../assets/irezumi.png'
import IMG4 from '../../assets/Kokoro.png'
import IMG5 from '../../assets/retrosnake.png'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Keep Up',
        github: 'https://github.com/AlexJBustillos/Keep-Up',
        demo: 'http://www.alexjbustillos.com/keepup/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Loud and Green',
        github: 'https://github.com/AlexJBustillos/Loud-and-Green',
        demo: 'https://loud-and-green.herokuapp.com/'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Irezumi',
        github: 'https://github.com/anonyymous1/irezumi-client',
        demo: 'http://irezumi-tattoo.herokuapp.com/'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Kokoro',
        github: 'https://github.com/AlexJBustillos/kokoro-client',
        demo: 'https://kokoro-meditation.herokuapp.com/'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Retro Snake',
        github: 'https://github.com/AlexJBustillos/MyRetroSnake',
        demo: 'http://www.alexjbustillos.com/MyRetroSnake/'
    }
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Projects</h5>
            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, github, demo}) => {
                        return (
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className="btn" target='_blank'>Github</a>
                                    <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio
