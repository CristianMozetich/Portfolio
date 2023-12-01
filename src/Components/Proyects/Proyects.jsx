import React from 'react'
import './Proyects.css'
import { proyectos } from '../../../asyncmock'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";


const Proyects = () => {
  return (
    <>
    <div className='contenedor_titulo'>
      <h1 className='titulo_proyectos '>Proyectos</h1>
    </div>
    <div  className="proyectos">
      {
      proyectos.map((proyecto) => (
          <Card className='tarjeta_proyectos' key={proyecto.id}>
            <CardHeader className='contenedor_proyectos'>
              <a href={proyecto.web} target='_blank'><h2>{proyecto.name}</h2></a>
            </CardHeader>
            <Divider/>
            <CardBody>
              <a href={proyecto.web} target='_blank'><p className='desc'>{proyecto.desc}</p></a>
            </CardBody>
            <Divider/>
            <CardFooter>
              <p className='tech'>{proyecto.tech}</p>

            </CardFooter>
            <Divider/>
            <CardFooter>
              <p className='year'>{proyecto.year}</p>
            </CardFooter>
          </Card>
        ))}
    </div>
    </>
  )
}

export default Proyects
